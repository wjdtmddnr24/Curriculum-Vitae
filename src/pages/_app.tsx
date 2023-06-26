import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <main className={pretendardFont.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
