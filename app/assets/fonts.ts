import { Pathway_Extreme, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const font_logo = localFont({
  src: [
    {
      path: "../assets/fonts/Great Bromwich W01 Bold.ttf",
      weight: "400",
    },
  ],
});

export const font_heading_bold = Pathway_Extreme({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "500",
});

export const font_text = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "300",
});

export const font_subHeading =
Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "300",
});



