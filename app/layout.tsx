import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import PageProvider from "./provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ryosuke Saiki's Portfolio",
    description: "Ryosuke Saiki's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body /*className={inter.className}*/>
                <PageProvider>
                    {children}
                </PageProvider>
            </body>
        </html>
    );
}
