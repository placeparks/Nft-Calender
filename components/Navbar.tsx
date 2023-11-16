import { ConnectWallet } from "@thirdweb-dev/react";

export const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
            height: "4rem",
            backgroundColor: "#018749",
            color: "white",
            maxWidth: "1440px",
            margin: "10px auto 0px auto",
        }}>
            <h1>NFT Calendar</h1>
            <ConnectWallet 
                btnTitle="Login"
            />
        </div>
    )
};