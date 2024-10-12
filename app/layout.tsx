import NavMenu from "@/components/NavBar/NavMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Remote work nexus",
    description: "Remote work nexus",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="flex flex-col w-full min-h-screen bg ">
            <body className={`${inter.className}  `}>
                <NavMenu />
                {/* <BgHomepage /> */}
                <div className=" mx-auto w-full max-w-[1400px] py-2">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
