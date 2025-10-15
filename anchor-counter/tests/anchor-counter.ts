import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorCounter } from "../target/types/anchor_counter";
import { expect } from "chai";
import { PublicKey } from "@solana/web3.js";

describe("anchor-counter", () => {
  // Configure the client to use the local cluster.
  
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.anchorCounter as Program<AnchorCounter>;
  // const counter = anchor.web3.Keypair.generate();
  const[counterpda] = PublicKey.findProgramAddressSync([Buffer.from("counter")], program.programId);
  it("Is initialized!", async () => {
    const tx = await program.methods
    .initialize()
    .rpc();
    console.log("Your transaction signature for initialisation is ", tx);
    const account_data = await program.account.counter.fetch(counterpda);
    console.log("The account data is ", account_data.count);
  });

  it("Incremented the count", async () => {
    const tx = await program.methods
    .update()
    .rpc();
    console.log("Your transaction signature", tx);
    const account_data = await program.account.counter.fetch(counterpda);
    console.log("The account data is ", account_data.count);
  });
});


