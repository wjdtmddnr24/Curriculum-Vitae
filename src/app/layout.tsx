import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";
import { ToggleDarkmodeButton } from "../components/toggle-darkmode-button/ToggleDarkmodeButton";
import { pretendardFont } from "../fonts";
import "../styles/globals.css";

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendardFont.className} suppressHydrationWarning>
      <body className="text-slate-700 dark:text-slate-300">
        <Providers>
          <div className="fixed inset-0 -z-10 bg-fixed bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-800 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
          <div className="fixed inset-0 -z-10 bg-fixed bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 dark:opacity-0 transition-opacity duration-500"></div>
          {children}
          <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3 rounded-full">
            <ToggleDarkmodeButton />
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
