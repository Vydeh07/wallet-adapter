import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from './Airdrop';
import { ShowSolBalance } from './ShowSolBalance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ padding: "20px" }}>
            <h2>🚀 My Solana dApp</h2>

            <WalletMultiButton />
            <WalletDisconnectButton />

            <div style={{ marginTop: "20px" }}>
              <Airdrop />
              <ShowSolBalance />
              <SendTokens />
              <SignMessage />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
