import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        let to = document.getElementById("toAddress").value;
        let amount = document.getElementById("sendAmount").value;

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            })
        );

        await wallet.sendTransaction(transaction, connection);
        alert("✅ Sent " + amount + " SOL to " + to);
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>📤 Send SOL</h3>
            <input id="toAddress" type="text" placeholder="Recipient Address" />
            <input id="sendAmount" type="text" placeholder="Amount in SOL" />
            <button onClick={sendTokens}>Send</button>
        </div>
    );
}
