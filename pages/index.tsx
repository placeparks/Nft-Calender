import { MediaRenderer, useAddress, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { NFT_CONTRACT_ADDRESS } from "../constants/constants";
import { Gift } from "../components/Gift";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);
  const { data: nfts, isLoading: isLoadingNfts } = useNFTs(contract);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      maxWidth: "1440px",
      backgroundColor:"#E31837",
    }}>
      {address ? (
        isLoadingNfts ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.grid} style={{ marginTop: "40px" }}>
            {nfts && nfts.length > 0 ? (
              nfts.map((nft) => (
                <Gift
                  nft={nft}
                  key={nft.metadata.id}
                />
              ))
            ) : (
              <p>No NFTs found.</p>
            )}
          </div>
        )
      ) : (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "40px auto",
          maxWidth: "100%",
        }}>
          <MediaRenderer
            src={contractMetadata?.image}
            style={{
              borderRadius: "10px",
            }}
          />
          <h1>Login to claim gifts.</h1>
        </div>
      )}
      
    </div>
  );
};

export default Home;
