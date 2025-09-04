import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById("airdropAmount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("✅ Airdropped " + amount + " SOL");
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>💸 Request Airdrop</h3>
            <input id="airdropAmount" type="text" placeholder="Amount in SOL" />
            <button onClick={sendAirdropToUser}>Request Airdrop</button>
        </div>
    );
}
