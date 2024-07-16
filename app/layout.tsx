import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaboration with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more!",
  icons: {
    icon: "/assets/images/site-logo.svg", // Corrected path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimry: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <link rel="icon" href={metadata.icons.icon} type="image/svg+xml" />
          <meta name="description" content={metadata.description} />
        </head>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <h1 className="">This is a text</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
