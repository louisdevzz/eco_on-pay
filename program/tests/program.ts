import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Product } from "../target/types/product";

describe("program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Program as Program<Product>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initUser('huu',"huu");
    console.log("Your transaction signature", tx);
  });
});
