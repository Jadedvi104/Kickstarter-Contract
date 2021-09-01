// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

//145. Single Run Compilation

  contract CampaignFactory {
      //change type address to Campaign
      Campaign[] public deployedCampaigns;

      function createCampaign(uint minimum) public {
          // same here
          Campaign newCampaign = new Campaign(minimum, msg.sender);
          deployedCampaigns.push(newCampaign);
      }
                                                  // address to Campaign[]
      function getDeployedCampaigns() public view returns (Campaign[] memory) {
          return deployedCampaigns;
      }
  }

  contract Campaign {
        struct Request {
            string description;
            uint value;
            address payable recipient;
            bool complete;
            uint approvalCount;
            mapping(address => bool) approvals;
        }

        // Request[] public requests; >> uint numRequests
          uint public numRequests;
          // Request[] public requests;
          mapping (uint => Request) public requests;

          address public manager;
          uint public minimumContribution;
          mapping(address => bool) public approvers;
          uint public approversCount;



        modifier restricted() {
            require(msg.sender == manager);
            _;
        }

        // change from function to constructor
        // function Campaign(uint minimum, address creator)
        constructor(uint minimum, address creator) {
            manager = creator;
            minimumContribution = minimum;
        }

        function contribute() public payable {
            require(msg.value > minimumContribution);

            approvers[msg.sender] = true;
            approversCount++;
        }

        // must have memory or calldata after string
        function createRequest(string calldata description, uint value, address payable recipient) public restricted {

                Request storage newRequest = requests[numRequests];


                newRequest.description = description;
                newRequest.value = value;
                newRequest.recipient = recipient;
                newRequest.approvalCount = 0;

                numRequests++;
        }

        function approveRequest(uint index) public {
            Request storage request = requests[index];

            require(approvers[msg.sender]);
            require(!request.approvals[msg.sender]);

            request.approvals[msg.sender] = true;
            request.approvalCount++;

        }

        function finalizeRequest(uint index) public restricted {

            Request storage request = requests[index];

            require(request.approvalCount > (approversCount / 2));
            require(!request.complete);

            request.recipient.transfer(request.value);
            request.complete = true;


        }

        function getSummary() public view returns (uint, uint, uint, uint, address) {
            return (
              minimumContribution,
              address(this).balance,
              numRequests,
              approversCount,
              manager
          );
        }

        function getRequestsCount() public view returns (uint) {
            return numRequests;
        }

  }
