import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
import CampaignFactoryByteC from "./build/CampaignFactoryByteC.json";

const instance = new web3.eth.Contract(
  JSON.parse(JSON.stringify(CampaignFactory)),
  "0x1B3fa674708E811a9BF9f7203a6B310940AB680D"
);

export default instance;
