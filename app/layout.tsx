import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import './globals.css';
import Header from '@/app/components/Header/Header';
import Nav from '@/app/components/Nav/Nav';
import Footer from '@/app/components/Footer/Footer';
import Head from 'next/head';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/css?f[]=satoshi@400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen flex flex-col">
      <div className="container w-10/12 mx-auto flex-grow">
        <header>
          <Header />
        </header>
        <nav>
          <Nav />
        </nav>
        {children}
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
      </body>
      </html>
    </StoreProvider>
  );
}
