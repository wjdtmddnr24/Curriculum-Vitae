import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { pretendardFont } from "../fonts";
import "../styles/globals.css";
import { Providers } from "./providers";

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendardFont.className} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="fixed inset-0 -z-10 bg-fixed bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-800 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
          <div className="fixed inset-0 -z-10 bg-fixed bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 dark:opacity-0 transition-opacity duration-500"></div>
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
