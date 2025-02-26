import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TanstackProvider } from '@/providers/TanstackProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
        <div className="bg-gray-400 absolute top-[-2rem] -z-10 left-[-30rem] h-[35rem] w-[55rem] rounded-full blur-[12rem] sm:w-[70rem] md:left-[-28rem] lg:left-[-20rem] xl:left-[-10rem] 2xl:left-[-2rem] dark:bg-gray-800"></div>

        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
