import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support signing!');

        const message = document.getElementById("messageBox").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            throw new Error('Message signature invalid!');
        }

        alert(`✅ Message signed!\nSignature: ${bs58.encode(signature)}`);
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>✍️ Sign Message</h3>
            <input id="messageBox" type="text" placeholder="Enter message" />
            <button onClick={onClick}>Sign</button>
        </div>
    );
}
