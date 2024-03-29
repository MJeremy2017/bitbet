const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const propositionPath = path.resolve(__dirname, 'contracts', 'BetProposition.sol');
const source = fs.readFileSync(propositionPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// if path not exists, create a new one
fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(':', '') + '.json'),
      output[contract]
    );
}
