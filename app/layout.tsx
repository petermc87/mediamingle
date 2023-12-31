import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import NavBar from "./components/NavBar";
import Progress from "./components/Progress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Mingle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html suppressHydrationWarning={true} lang="en">
        <Head>
          {/* Bootstrap css CDN link */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossOrigin="anonymous"
          />
        </Head>
        <body className={inter.className}>
          <Progress />
          <NavBar />
          {children}
        </body>
        {/* bootstrap JavaScript CDN link */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </html>
    </>
  );
}
