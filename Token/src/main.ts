import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { userKeypair } from "./helpers";
import { keypairIdentity } from "@metaplex-foundation/umi";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";


const umi = createUmi('https://api.devnet.solana.com');

//set out default address as to token metadata
const keypair = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);
umi.use(keypairIdentity(keypair))
    .use(mplTokenMetadata())


const metadata = {
    name: "Sigma Coin",
    symbol: "SGMA",
    description: "A sigma meme coin for 🗿"
    
}