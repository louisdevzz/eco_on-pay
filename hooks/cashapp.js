import { useState } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection,Keypair,LAMPORTS_PER_SOL,PublicKey,SystemProgram, Transaction } from "@solana/web3.js";
import BigNumber from "bignumber.js";

export const useCashApp = () =>{
    const {connected, publicKey, sendTransaction} = useWallet()
    const {connection} = useConnection()

    const [amount, setAmount] = useState(0)

    //create the transaction to send to our wallet and we can sign it from there!
    const makeTransaction = async(fromWallet, toWallet, amount, reference) =>{
        const network = WalletAdapterNetwork.Devnet
        const endpoint = clusterApiUrl(network)
        const connection = new Connection(endpoint)

        //get a recent blockhash to include in the transaction
        const {blockhash} = await connection.getLatestBlockhash('finalized')

        const transaction = new Transaction(
            {
                recentBlockhash: blockhash,
                //the buyer pays the transaction fee
                feePayer: fromWallet
            }
        )

        //create the instruction to send SOL from owner to recipient
        const transferInstruction = SystemProgram.transfer({
            fromPubkey: fromWallet,
            lamports: amount.muiltipliedBy(LAMPORTS_PER_SOL).toNumber(),
            toPubkey: toWallet,
        })

        transferInstruction.keys.push({
            pubkey: reference,
            isSigner: false,
            isWritable: false
        })
        transaction.add(transferInstruction)

        return transaction
    }

    //create the function to run the transaction. this will added to the button

    const doTransaction = async({amount, receiver, transactionPurpose})=>{
        const fromWallet = publicKey
        const toWallet = new PublicKey(receiver)
        const bnAmount = new BigNumber(amount)
        const reference = Keypair.generate().publicKey
        const transaction = await makeTransaction(fromWallet, toWallet, bnAmount, reference)

        const txnHash = await sendTransaction(transaction, connection)
        console.log(txnHash)
    }

    return {connected, publicKey, doTransaction}
}