import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Utilities/Navbar";

const poppins = Poppins({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "AnimeWibuList",
  description: "Website untuk wibu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
