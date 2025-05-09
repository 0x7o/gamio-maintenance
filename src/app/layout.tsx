import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gamio AI - Обновление 3.0",
  description: "Сайт Gamio AI закрыт на установку обновления 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
