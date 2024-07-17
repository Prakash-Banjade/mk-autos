import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout-components/footer";
import localFont from 'next/font/local'
import { ModelProvider } from "@/context/model-data.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKAutos",
  description: "This is the best car dealer in the world",
};

const HubotSans = localFont({
  src: [
    {
      path: '../../public/fonts/HubotSans-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/HubotSans-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModelProvider>
          {children}
        </ModelProvider>
        <Footer />
      </body>
    </html>
  );
}
