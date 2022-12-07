import Head from 'next/head';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetGreeter, SetGreeter } from '../components/contract';
import Landing from './Landing/landing';
import Navbar from './Navbar/Navbar';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Create-Web3 App</title>
        <meta name="description" content="Generated by npx create-web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ padding: '1rem' }}>
        <Navbar />
      </header>

      <main
        style={{
          minHeight: '60vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Landing />
      </main>
    </div>
  );
}
