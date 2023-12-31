// Note: This is the root layout for the app
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Note: ClerkProvider is a wrapper for the Clerk SDK
import {ClerkProvider} from '@clerk/nextjs'
// Note: ModalProvider is a wrapper for the modal component
import { ModalProvider } from '@/providers/modal-provider'
// import prismadb from '@/lib/prismadb'
//
import { ToasterProvider } from '@/providers/toast-provider'

// Note: This is the global css file
import './globals.css'



// Note: This is the font for the app
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const store = prismadb.store
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
