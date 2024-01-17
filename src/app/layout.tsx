import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import { Providers } from "./providers";

config.autoAddCss = false;

const pretendardFont = localFont({
  src: [
    {
      path: "../fonts/pretendard/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },

    {
      path: "../fonts/pretendard/Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendardFont.className} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="relative">
            <div className="absolute inset-0 bg-fixed bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500  dark:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-fixed bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-800 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
