import { useEffect, useMemo, useState } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useConnection, useWallet,useAnchorWallet } from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { clusterApiUrl, Connection,Keypair,LAMPORTS_PER_SOL,PublicKey,SystemProgram, Transaction } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import * as anchor from "@project-serum/anchor"
import idl from '../idl.json'
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";



const PROGRAM_KEY = new PublicKey(idl.metadata.address)


export const useCashApp = () =>{
    const {connected, publicKey, sendTransaction} = useWallet()
    const [useAddress, setUseAddress] = useState('Not Data!')
    const {connection} = useConnection()
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState(0)
    const [transactionPurpose, setTransactionPurpose] = useState('')
    const [user, setUser] = useState()
    const [initialized, setInitialized] = useState(false)
    const [transactionPending, setTransactionPending] = useState(false)
    const [lastProductid, setLastProductid] = useState(0)
    const [product, setProduct] = useState([])



    const anchorWallet = useAnchorWallet()
    const program = useMemo(()=>{
        if(anchorWallet){
            const provider = new anchor.AnchorProvider(connection,anchorWallet,anchor.AnchorProvider.defaultOptions())
            return new anchor.Program(idl,PROGRAM_KEY,provider)
        }
    },[connection,anchorWallet])



    useEffect(()=>{
        const start = async ()=>{
            
            if (program && publicKey){
                try{
                    //setTransactionPending(true)
                    //check if there is a user account
                    const [userPda] = await findProgramAddressSync([utf8.encode("user"), publicKey.toBuffer()],program.programId)

                    const user = await program.account.userAccount.fetch(userPda)
                    if (user){
                        setInitialized(true)
                        setUser(user)
                        setLastProductid(user.lastProductId)
                        
                        const productAccount = await program.account.productAccount.all()
                        setProduct(productAccount)
                        console.log("productAccount: ",productAccount)
                    }
                }catch(err){
                    console.log("NO user!") 
                    setInitialized(false)
                }
                finally{
                    //setTransactionPending(false)
                }
            }
        }
        start()
        if(connected){
          setUseAddress(publicKey.toString())
          
        }
    },[program,publicKey, transactionPending])
    //program,publicKey, transactionPending


    const initUser = async(name, avatar)=>{
        console.log("INITING USER")
        if(program && publicKey){
            try{
                setTransactionPending(true)
                const [userPda] = await findProgramAddressSync([utf8.encode("user"), publicKey.toBuffer()],program.programId)

                await program.methods
                .initUser(name,avatar)
                .accounts({
                    userAccount: userPda,
                    authority: publicKey,
                    systemProgram: SystemProgram.programId,
                })
                .rpc()
                setInitialized(true)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setTransactionPending(false)
            }
        }
    }

    const initSeller = async(nameshop)=>{
        console.log("INITING SELLER")
        if(program && publicKey){
            try{
                setTransactionPending(true)
                const [userPda] = await findProgramAddressSync([utf8.encode("user"), publicKey.toBuffer()],program.programId)
                
                const [sellerPda] = await findProgramAddressSync([utf8.encode("seller"), publicKey.toBuffer()],program.programId)
                await program.methods
                .initSeller(nameshop)
                .accounts({
                    sellerAccount: sellerPda,
                    userAccount: userPda,
                    authority: publicKey,
                    systemProgram: SystemProgram.programId,
                })
                .rpc()
                setInitialized(true)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setTransactionPending(false)
            }
        }
    }

    // titile,about,price,color,image,category,size,quanlity,votes
    const createProduct = async(title,about,price,color,image,category,size,quanlity,votes)=>{
        console.log("Creating Product")
        if(program && publicKey){
            try{
                setTransactionPending(true)
                const [sellerPda] = await findProgramAddressSync([utf8.encode("seller"), publicKey.toBuffer()],program.programId)

                const [product_data] = findProgramAddressSync([utf8.encode("product"), publicKey.toBuffer(),
                Uint8Array.from([lastProductid])],
                program.programId)
                //console.log(userPda)
                await program.methods
                .createProduct(title,about,price,color,image,category,size,quanlity,votes)
                .accounts({
                    productAccount: product_data,
                    sellerAccount: sellerPda,
                    authority: publicKey,
                    systemProgram: SystemProgram.programId,
                })
                .rpc()
            }
            catch(err){
                console.log(err)
            }
            finally{
                setTransactionPending(false)
            }
        }
    }

    const useLocalStorage = (storageKey, fallbackState)=>{
        const [value, setValue] = useState(
            JSON.parse(localStorage.getItem(storageKey))?? fallbackState
        )
        useEffect(()=>{
            localStorage.setItem(storageKey, JSON.stringify(value))
        },[value,setValue])
        return [value,setValue]
    }

    const [transaction, setTransaction] = useLocalStorage("transaction",[])

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
            lamports: amount*LAMPORTS_PER_SOL,
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
        // console.log(bnAmount.toNumber())
        const reference = Keypair.generate().publicKey
        const transactions = await makeTransaction(fromWallet, toWallet, bnAmount.toNumber(), reference)

        const txnHash = await sendTransaction(transactions, connection)
        console.log(txnHash)

        //create transaction history object
        const newID = (transaction.length + 1).toString()
        const newTransaction = {
            id: newID,
            from:{
                name: publicKey,
                handle: publicKey,
                verified: true
            },
            to:{
                name: receiver,
                handle: '-',
                verified: true
            },
            description: transactionPurpose,
            transactionDate: new Date(),
            status: 'Completed',
            amount: amount,
            source: '-',
            identifer: '-'

        };
        setTransaction([newTransaction, ...transaction])
    }

    return {
        connected, 
        publicKey, 
        amount,
        setAmount,
        receiver,
        setReceiver,
        transactionPurpose,
        setTransactionPurpose,
        doTransaction,
        transaction,
        setTransaction,
        setUseAddress,
        useAddress,
        initUser,
        createProduct,
        product,
        initSeller
    }
}