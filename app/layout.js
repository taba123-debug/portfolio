import { Poppins, Inter } from "next/font/google";import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], // for headings
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // for body text
  variable: "--font-inter"
});

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Site",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
