pragma solidity ^0.4.17;

// 1. create proposition
// 2. enter a bet
// 3. end a bet
// 4. return or distribute money to winner
// "bet title", "bet description", "bet logic", "1584587837", "1584587838", "yes", "no", "10"

contract PropositionFactory {
    address[] public deployedPropositions;
    
    function createProposition(string title, string description, string logic, uint enterDeadline, 
                uint resolutionTime, string option1, string option2, uint minimum) public {
        
        // pass in the creator when created
        address propositionAddress = new Proposition(title, description, logic, enterDeadline, 
        resolutionTime, option1, option2, minimum, msg.sender);
        
        deployedPropositions.push(propositionAddress);
    }
    
    // view: no data modified
    function getDeployedPropositions() public view returns (address[]) {
        return deployedPropositions;
    }
}


contract Proposition {
    
    struct Bet {
        string title;
        string description;
        string logic;
        uint enterDeadline;
        uint resolutionTime;  // time to start to resolve
        uint minimum;
        uint initializationTime;
    }
    
    address public creator;
    string[] public options;
    address[] public players;
    mapping(string => address[]) optionPlayers;
    mapping(address => uint) public playerAmount;
    // check if players entered already
    mapping(address => bool) public isplayerEntered;
    mapping(string => uint) optionPool;
    mapping(address => uint) public playerEnterTime;
    uint public totalPool;
    uint finalOptionIndex;
    bool isEnd;
    Bet public bet;
    
    modifier restricted() {
        require(msg.sender == creator);
        _;
    }
    
    constructor(string title, string description, string logic, uint enterDeadline, 
                uint resolutionTime, string option1, string option2, uint minimum, address initiator) public {
        creator = initiator;
        options.push(option1);
        options.push(option2);
        bet = Bet({
            title: title,
            description: description, 
            logic: logic, 
            enterDeadline: enterDeadline, 
            resolutionTime: resolutionTime, 
            minimum: minimum,
            initializationTime: now
        });
        
        isEnd = false;
        
    }
    
    function enterBet(uint optionIndex) public payable {
        uint currentTime = now;
        require(msg.value > bet.minimum);
        require(currentTime < bet.enterDeadline);
        require(optionIndex < options.length);
        
        string storage option = options[optionIndex];
        // add player
        if (isplayerEntered[msg.sender]) {
            playerAmount[msg.sender] += msg.value;
        } else {
            playerAmount[msg.sender] = msg.value;
            isplayerEntered[msg.sender] = true;
            // if first enter, then add into player list
            optionPlayers[option].push(msg.sender);
            players.push(msg.sender);
        }
        
        // update player enter time
        playerEnterTime[msg.sender] = currentTime;
        // add to option pool
        optionPool[option] += msg.value;
        // add to total pool
        totalPool += msg.value;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
    
    // give index and return the option
    function getOptionPool(uint optionIndex) public view returns (uint) {
        string storage option = options[optionIndex];
        return optionPool[option];
    }
    
    // settle the outcome of a bet
    function finalizeBet(uint optionIndex) public restricted {
        require(now > bet.resolutionTime);  // start resolve after resolutionTime
        
        isEnd = true;
        finalOptionIndex = optionIndex;
    }
    
    function getOutcome() public view returns (string) {
        if (isEnd) {
            return options[finalOptionIndex];
        } else {
            return "result not set by host yet!";
        }
    }
    
    function distributePrice() public restricted {
        require(isEnd);
        require(now > bet.resolutionTime);
        
        string storage option = options[finalOptionIndex];
        address[] storage winners = optionPlayers[option];
        
        // distribute prize
        uint prize = totalPool/winners.length;
        for (uint i=0; i < winners.length; i++) {
           winners[i].transfer(prize);
        }
        
        totalPool = 0;
    }
    
}

