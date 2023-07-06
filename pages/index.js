import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <Image
          src="/images/profile.jpg"
          height={200}
          width={300}
          alt="Nilesh"
          style={{ 'border-radius': '100%' }}
        />
      </div>
    </div>
  );
}
