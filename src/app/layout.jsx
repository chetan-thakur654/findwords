import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
