import "./globals.css";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={` ${manrope.className}  grid h-screen place-items-center bg-lightGrayishBlue `}
      >
        {children}
      </body>
    </html>
  );
}
