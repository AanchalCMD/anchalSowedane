// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Sowedane{


    mapping(address => User) public allUsers;

    struct User{
        bytes32 password;
        string email;
        bool isLoggedIn;
        string message;
    }

    // Function for hashing data
    function hash(uint _data) internal returns(bytes32){
        bytes memory gotBytes = abi.encodePacked(_data);
        return keccak256(gotBytes);
    }


    modifier checkRegistry(){
        string memory currentUserEmail = allUsers[msg.sender].email;

        // Converting to bytes to check the length of the string is 0 or not
        bytes memory toBytes = bytes(currentUserEmail);

        // Checks whether the user is already in the mapping or not
        require(toBytes.length == 0, "Account already registered!");
        _;
    }


    // Function to register the user
    function register(uint _password, string memory _email) checkRegistry public {
        
        // Checking that the argument must not be empty
        bytes memory _emailToBytes = bytes(_email);
        require(_emailToBytes.length != 0, "Email should not be empty");

        // Hashing the password
        bytes32 hashedPassword = hash(_password);

        // Creating a new user
        User memory newUser = User({
            password : hashedPassword,
            email : _email,
            isLoggedIn : false,
            message : ""
        });

        // Adding the user into the map
        allUsers[msg.sender] = newUser;

    }

    function login(uint _password) public{

        
        require(allUsers[msg.sender].isLoggedIn == false, "Already Logged in!");

        // Hashing the password
        bytes32 hashedPassword = hash(_password);

        // Verifying the password 
        require(allUsers[msg.sender].password == hashedPassword, "Incorrect Password");

        allUsers[msg.sender].isLoggedIn = true;
    }


    event sendMessage(address sender, string message);
    
    function writeMessage(string memory _message) public{
        require(allUsers[msg.sender].isLoggedIn == true, "You are not logged in!");
        allUsers[msg.sender].message = _message;

        emit sendMessage(msg.sender, _message);
    }

    function getMyMessage() view public returns(string memory){
        return allUsers[msg.sender].message;
    }

    function logout() public{
        require(allUsers[msg.sender].isLoggedIn == true, "You are not Logged in!");
        allUsers[msg.sender].isLoggedIn = false;

    }

}








contract hehe{
    string public name;
    bool public stateHow;

    function doSomething(string memory _string) public returns(bool) {
        name = _string;
        return true;
    }

    function doAfter() public{
        bool how = doSomething("salil");
        if(how == true){
            stateHow  = true;
        } else {
            stateHow = false;
        }
    }
}


contract hehe2{
    bool public fromOutside;
    hehe heheContract;

    constructor(address _contract){
        heheContract = hehe(_contract);
    }

    function doSomething() public{
        bool gotBool = heheContract.doSomething("salil");
        fromOutside = gotBool; 
        
    }
}


contract forHashingDemo{
    function hashKeccak(uint _data) pure public returns(bytes32){
        bytes memory toBytes = abi.encodePacked(_data);
        return keccak256(toBytes);
    }

    function hashSha(uint _data) pure public returns(bytes32){
        bytes memory toBytes = abi.encodePacked(_data);
        return sha256(toBytes);
    }
}


contract hehe3{
    uint i = 2;
    event Logging(address sender, uint value);

    function doSomething() public{
        emit Logging(msg.sender, 1);

        require(i > 0, "I is less");
    }
}
