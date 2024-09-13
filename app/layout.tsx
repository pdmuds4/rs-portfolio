import type { Metadata } from "next";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
