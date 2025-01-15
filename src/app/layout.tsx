import type { Metadata } from "next";
import "./globals.css";
import { lato, playfairDisplay } from "@/fonts/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Abedin Wahid",
  description:
    "this is abedin wahid portfolio.Front-end Developer | MERN stack | Programming Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.className} h-screen w-full bg-gradient-to-tr dark:from-lg-secondary from-dr-button dark:to-lg-primary to-dr-primary to-45%  bg-no-repeat `}
      >
        <ThemeProvider attribute="data-mode" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
