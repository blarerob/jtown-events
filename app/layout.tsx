import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from "next/font/google";

import './globals.css'

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
            <body className={poppins.variable}>{children}</body>
            </html>
        </ClerkProvider>
    )
}
