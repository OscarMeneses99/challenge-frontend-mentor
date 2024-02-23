import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store | Home",
  description: "Generated by create next app",
  icon: "/favicon-32x32.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="mx-auto max-w-4xl min-h-screen">{children}</div>
      </body>
    </html>
  );
}
