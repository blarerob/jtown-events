import { type Metadata } from 'next'
import {
    ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Poppins } from "next/font/google";


const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: "J-Town Events",
    description: "Events being hosted around J-Town",
    icons: {
        icon: '/assets/images/jtown-district.jpg',
    }
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    )
}
