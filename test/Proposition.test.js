const mocha = require('mocha');
const assert = require('assert');
const ganache = require('ganache-cli');  // ganache local network
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const compiledProposition = require('../ethereum/build/Proposition');
const compiledFactory = require('../ethereum/build/PropositionFactory');

let accounts;
let factory;
let proposition;
let propositionAddress;

mocha.beforeEach( async () => {
    // contrat time is in seconds
    const currTimeSec = Math.floor(new Date().getTime()/1000);
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode})
        .send({from: accounts[0], gas: '3000000'});

    await factory.methods.createProposition("bet title", "bet description", "bet logic",
        (currTimeSec + 2).toString(), (currTimeSec + 3).toString(), "yes", "no", "10")
        .send({from: accounts[0], gas: '3000000'});

    [propositionAddress] = await factory.methods.getDeployedPropositions().call();

    // get deployed proposition by address
    proposition = new web3.eth.Contract(JSON.parse(compiledProposition.interface), propositionAddress);

    factory.setProvider(provider);
    proposition.setProvider(provider);

});

mocha.describe('test proposition', () => {

    mocha.it('check factory and proposition deployed', () => {
       assert.ok(factory.options.address);
       assert.ok(proposition.options.address);
    });

    mocha.it('check creator address', async () => {
        const creatorAddress = await proposition.methods.creator().call();
        assert.strictEqual(creatorAddress, accounts[0]);
    });

    mocha.it('check can enter', async () => {
       // choose option index 0 => "yes"
       await proposition.methods.enterBet(0)
           .send({
               from: accounts[1],
               value: '200',
               gas: '3000000'});

       const isEntered = await proposition.methods.isplayersEntered(accounts[1]).call();
       const totalPool = await proposition.methods.totalPool().call();
       const optionPool = await proposition.methods.getOptionPool(0).call();

       assert(isEntered);
       assert.strictEqual(totalPool, '200');
       assert.strictEqual(optionPool, '200');
    });

    mocha.it('check can finalize bet and distribute prize', async () => {
        const initbalance = await web3.eth.getBalance(accounts[1]);
        console.log('initial balance', parseFloat(web3.utils.fromWei(initbalance, 'ether')));

        await proposition.methods.enterBet(0)
            .send({
                from: accounts[1],
                value: '200',
                gas: '3000000'});

        // wait till resolution time
        await new Promise(r => setTimeout(r, 5000));
        // set "yes" to bet outcome
        await proposition.methods.finalizeBet(0).send({from: accounts[0], gas: '3000000'});
        const result = await proposition.methods.getOutcome().call();

        // distribute prize
        await proposition.methods.distributePrice().send({from: accounts[0], gas: '3000000'});
        const balance = await web3.eth.getBalance(accounts[1]);
        console.log('account balance', parseFloat(web3.utils.fromWei(balance, 'ether')));

        assert.strictEqual(result, 'yes');
    });

});

