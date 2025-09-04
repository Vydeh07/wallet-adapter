import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchBalance() {
            if (publicKey) {
                const bal = await connection.getBalance(publicKey);
                setBalance(bal / LAMPORTS_PER_SOL);
            }
        }
        fetchBalance();
    }, [publicKey, connection]);

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>💰 SOL Balance</h3>
            <p>{balance} SOL</p>
        </div>
    );
}
