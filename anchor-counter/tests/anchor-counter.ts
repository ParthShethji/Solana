import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorCounter } from "../target/types/anchor_counter";
import { expect } from "chai";

describe("anchor-counter", () => {
  // Configure the client to use the local cluster.
  
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.anchorCounter as Program<AnchorCounter>;
  const counter = anchor.web3.Keypair.generate();
  it("Is initialized!", async () => {
    const tx = await program.methods
    .initialize()
    .accounts({counter: counter.publicKey})
    .signers([counter])
    .rpc();
    console.log("Your transaction signature for initialisation is ", tx);
  });

  it("Incremented the count", async () => {
    const tx = await program.methods
    .update()
    .accounts({counter: counter.publicKey})
    .rpc();
    console.log("Your transaction signature", tx);
  });
});


