import web3 from "./web3";
import PropositionFactory from './build/PropositionFactory';

const contractAddress = '0x5588EE6e0eaA3C56e3385f573a3fdAcE9267ae72';
const factory = new web3.eth.Contract(JSON.parse(PropositionFactory.interface), contractAddress);

export default factory;