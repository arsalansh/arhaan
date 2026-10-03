import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const editorialSerif = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arhaan Shaikh · Business Consultant & Growth Strategist",
  description:
    "Founder of The Bombay Digital Company. Turning business problems into growth strategies across GTM, e-commerce, and brand positioning in Mumbai, India.",
  keywords: [
    "Arhaan Shaikh",
    "Business Consultant Mumbai",
    "Growth Strategist",
    "The Bombay Digital Company",
    "Go-To-Market Strategy",
    "E-commerce Growth",
    "Brand Positioning",
    "Marketing Strategy",
  ],
  authors: [{ name: "Arhaan Shaikh" }],
  openGraph: {
    title: "Arhaan Shaikh · Business Consultant & Growth Strategist",
    description:
      "Turning business problems into growth strategies. Founder of The Bombay Digital Company.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${editorialSerif.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased selection:bg-crimson selection:text-white`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 font-sans">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
