import type { Metadata } from "next";
import "./globals.css";
import PageProvider from "./provider";

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
            <body>
                <PageProvider>
                    {children}
                </PageProvider>
            </body>
        </html>
    );
}
