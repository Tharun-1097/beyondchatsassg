import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inbox UI",
  description: "Enhanced Inbox UI with Tailwind CSS and improved functionality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 text-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-blue-600 text-white p-4 text-center font-bold">
          My Improved Inbox UI
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 My Inbox UI
        </footer>
      </body>
    </html>
  );
}
