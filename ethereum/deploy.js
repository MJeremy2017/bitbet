const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/PropositionFactory');

const provider = new HDWalletProvider(
    'split elite narrow recall junk input link resist fork long stem erase',
    'https://rinkeby.infura.io/v3/50266a515df44177bde45f83f877503d'
);
const web3 = new Web3(provider);

// deploy to Rinkeby test network
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '3000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();