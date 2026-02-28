import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} | The Best Ethical Hacking And Cyber Security Institute in Mumbai`,
        template: `%s | ${siteConfig.name}`,
    },
    icons: siteConfig.icons,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `The Best Ethical Hacking And Cyber Security Institute in Mumbai`,
        description: siteConfig.description,
        countryName: 'India',
        images: [
            {
                url: `${siteConfig.url}/images/CCN-Favicon.png`,
                width: 800,
                height: 600,
                alt: siteConfig.name,
            },
        ],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body
                className={`${lato.variable} ${geistMono.variable} antialiased`}
                cz-shortcut-listen="true"
                suppressHydrationWarning
            >
                <Providers>
                    {children}
                </Providers>
                <Toaster/>
            </body>
        </html>
    );
}
