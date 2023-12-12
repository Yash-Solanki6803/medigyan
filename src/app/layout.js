import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediGyan",
  description: "A medical blog for all your health needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-hidden`}>
        <header className="bg-emerald-700 flex items-center justify-between py-5 px-10">
          <Link className="text-2xl font-bold" href="/">
            {metadata.title}
          </Link>
          <nav>
            <ul className="flex space-x-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
