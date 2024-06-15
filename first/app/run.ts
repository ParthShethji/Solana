
import * as anchor from "@coral-xyz/anchor";
import {Program } from "@coral-xyz/anchor";
import { First} from "../target/types/first"; 
import { Keypair, Connection } from "@solana/web3.js";
import fs from "fs";

const idlContent = fs.readFileSync("/home/parth/solana/first/target/idl/first.json", "utf8");
const idl = JSON.parse(idlContent);


(async ()=> {

  console.log("HI")
  const connection = new anchor.web3.Connection("http://localhost:8899");
  const secret = fs.readFileSync("home/parth/.config/solana/id.json");
  const keypair = Keypair.fromSecretKey(new Uint8Array (secret))

  const wallet = new anchor.Wallet (keypair)
  const provider = new anchor.AnchorProvider(connection, wallet, {});
  const program = new Program<First>(idl, provider);
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  })