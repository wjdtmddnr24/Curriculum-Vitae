import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";
import GradientBackground from "../components/gradient-background/GradientBackground";
import { ToggleDarkmodeButton } from "../components/toggle-darkmode-button/ToggleDarkmodeButton";
import { pretendardFont } from "../fonts";
import "../styles/globals.css";

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendardFont.className} suppressHydrationWarning>
      <body className="text-slate-700 dark:text-slate-300">
        <Providers>
          <GradientBackground />
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
