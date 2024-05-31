## Solana Smart Contract Development Process

### On-Chain Code
- Written in Rust.
- Deployed on the Solana network.
- Network consists of validator nodes on platforms like AWS, Azure, GCP.

### Off-Chain Code
- Client code executed to interact with the smart contract.
- Users interact via websites or applications.

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

## Additional Notes
- More topics and implementation details to be covered in the next video.
- Next video will focus on setting up an environment for writing a smart contract.




## Run the solana-test-validator in root folder of ubuntu and run that on bash

Next we need to set RPC URL for our localized blockchain - solana config set --url localhost 
the ports are predefined

Or we can use the testnet provided by solana itself 
solana config set --url testnet

to create a new wallet - solana-keygen new  or solana-keygen new -o filepath

