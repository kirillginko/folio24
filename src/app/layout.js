import ThemeWrapper from "./components/theme/ThemeWrapper";
import localFont from "next/font/local";
import "./globals.css";

const instructions = localFont({
  src: "./fonts/Instruction.otf",
  variable: "--font-instructions",
  weight: "100 900",
});

const Heavy2197 = localFont({
  src: "./fonts/2197-Heavy.ttf",
  variable: "--font-2197-heavy",
  weight: "100 900",
});

const block2197 = localFont({
  src: "./fonts/Block-2197.ttf",
  variable: "--font-block-2197",
  weight: "100 900",
});

const f5000 = localFont({
  src: "./fonts/F5000.ttf",
  variable: "--font-f5000",
  weight: "100 900",
});

export const metadata = {
  title: "Kirill Ginko | Full-Stack Developer",
  description: "Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instructions.variable} ${Heavy2197.variable} ${block2197.variable} ${f5000.variable}`}
      >
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
