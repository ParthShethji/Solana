import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getDomainKeySync, NameRegistryState } from "@bonfida/spl-name-service";
// const connection = new Connection(clusterApiUrl("devnet"));
// console.log(`✅ Connected!`);
const domainName = "shaq.sol";
const { pubkey } = getDomainKeySync(domainName);
// const suppliedPublicKey = process.argv[2];
// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// const publicKey = new PublicKey(suppliedPublicKey);

// // const address = new PublicKey("DpqufuapGavKAvuxwQiFKW9GXRRC64aJPziPDuzGQYWs");
// const balance = await connection.getBalance(publicKey);
// const balanceInSol = balance / LAMPORTS_PER_SOL;
// console.log(`The balance of the account at ${publicKey} is ${balanceInSol} SOL`);
// console.log(`✅ Finished!`);
try {
  const publicKey = new PublicKey(pubkey.toBase58());
  const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
  console.log(` Finished! The balance for the wallet at address ${pubkey} is ${balanceInSOL}!`);
} catch (error) {
  console.info("Invalid Address or unable to Fetch. Error Details: \n");
  console.error(error);
}
