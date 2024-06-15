## Solana Smart Contract Development Process


### Transactions
- Consist of a signature and a message.
- **Signature**: Array of private keys.
- **Message**: Payload sent to the smart contract, includes:
  - Account addresses.
  - Recent block hash.
  - Instructions.

### Instructions
- Contain logic for the smart contract.
- Components:
  - Program ID.
  - Accounts.
  - Data.

## Sending Data to Smart Contracts

### Data Serialization
- Important for sending/receiving data.
- Potential source of errors.

### Client and Server Code
- Required to execute a transaction.
- Focus on the involved accounts.

### Accounts
- Track the state on a Solana program.
- Properties:
  - **Signer**: User sending the transaction.
  - **Read-Only**: Accounts that can only be read.
  - **Executable**: Accounts that can process instructions.
  - **Rent**: Fee for keeping accounts on the network.
- Data in accounts is serializable.

## Interacting with Smart Contracts

### On-Chain
- Instruction received, account data read/parsed/incremented.
- New state serialized and stored on the network.

### Off-Chain
- JavaScript equivalent of the smart contract account.
- Data deserialized from account info.
- Allows sending data to the smart contract and querying information.


## basic commands 
1. solana config get - give configuraiton
2. solana config set --url localhost / --keypair path_to_keypair.json - sets keypair path
3. solana balance - tells balance in above set account
4. solana airdrop amount account - if accoutn not specified uses default account

## Run the solana-test-validator in root folder of ubuntu or user/name and run that on wsl

Next we need to set RPC URL for our localized blockchain - solana config set --url localhost 
the ports are predefined

Or we can use the testnet provided by solana itself 
solana config set --url testnet

to create a new wallet - solana-keygen new  or solana-keygen new -o filepath

## once validator is on  <b> Deploy on solana<b>

solana program deploy path_to_compile_file  (in example-helloworld its ./dist/program/helloworld.so)  //file ending with .so
//this will give you the program id

and then run the client
