import web3 from "./web3";
import PropositionFactory from './build/PropositionFactory';

const contractAddress = '0xA99ed7D4dC171691ccBe9129D3010d1D26624fa7';
const factory = new web3.eth.Contract(JSON.parse(PropositionFactory.interface), contractAddress);

export default factory;