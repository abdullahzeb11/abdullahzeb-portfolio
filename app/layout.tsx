import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://abdullahzeb.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdullah Zeb — Software Engineer & SFCC Developer",
    template: "%s · Abdullah Zeb",
  },
  description:
    "Senior software engineer based in Riyadh, Saudi Arabia. Building modern enterprise web experiences, SFCC commerce platforms, dashboards and bilingual business systems.",
  keywords: [
    "Abdullah Zeb",
    "Software Engineer",
    "SFCC Developer",
    "Salesforce Commerce Cloud",
    "Magento Developer",
    "Next.js Developer",
    "React Developer",
    "Saudi Arabia Web Developer",
    "Enterprise Web Development",
    "Frontend Engineer",
  ],
  authors: [{ name: "Abdullah Zeb" }],
  creator: "Abdullah Zeb",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdullah Zeb — Software Engineer & SFCC Developer",
    description:
      "Building modern enterprise web experiences, SFCC commerce platforms, dashboards and bilingual business systems.",
    siteName: "Abdullah Zeb",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Zeb — Software Engineer & SFCC Developer",
    description:
      "Building modern enterprise web experiences, SFCC commerce platforms, dashboards and bilingual business systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

const fouc = `(function(){try{
  var t=localStorage.getItem('theme');
  var d=t?t==='dark':true;
  document.documentElement.classList.toggle('dark',d);
  var l=localStorage.getItem('locale');
  if(l!=='ar'&&l!=='en')l='en';
  document.documentElement.setAttribute('lang',l);
  document.documentElement.setAttribute('dir',l==='ar'?'rtl':'ltr');
}catch(e){
  document.documentElement.classList.add('dark');
  document.documentElement.setAttribute('lang','en');
  document.documentElement.setAttribute('dir','ltr');
}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fouc }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arabic.variable} font-sans relative min-h-screen overflow-x-hidden`}
      >
        <LocaleProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
