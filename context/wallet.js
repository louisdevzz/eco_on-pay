import { VStack, Button, Image } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";

const Wallets = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();

  return !publicKey ? (
    <VStack gap={4}>
      {wallets.filter((wallet) => wallet.readyState === "Installed").length >
      0 ? (
        wallets
          .filter((wallet) => wallet.readyState === "Installed")
          .map((wallet) => (
            <Button
              key={wallet.adapter.name}
              onClick={() => select(wallet.adapter.name)}
              w="50"
              size="lg"
              fontSize="md"
              bg="#00a8ff"
              color="white"
              _hover="#74b9ff"
              leftIcon={
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  h={6}
                  w={6}
                />
              }
            >
              {wallet.adapter.name}
            </Button>
          ))
      ) : (
        <span></span>
      )}
    </VStack>
  ) : (
    <VStack gap={4}>
      <button onClick={disconnect} style={{backgroundColor: "#00a8ff"}} className="phantom-button text-sm mt-1 px-3 py-2 font-bold hover:bg-[#74b9ff] rounded-lg w-[200px] h-[50px] text-white">{truncate(publicKey.toBase58())}</button>
      {/* <Button onClick={disconnect}>disconnect wallet</Button> */}
    </VStack>
  );
};

export default Wallets;
export const truncate = (longstring, limit=12) =>{
    if(longstring.length>limit){
      return longstring.substring(0,limit)+'...'
    }
    return longstring
}
