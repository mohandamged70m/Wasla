import type { Metadata, Viewport } from "next";
import { Tajawal, Montserrat } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const title = "Wasla";
const description =
  "Wasla هو مركز عمليات واتساب لعيادتك. صندوق وارد موحد، حجوزات مواعيد، تذكير تلقائي للمرضى، وفريق كامل يدير المحادثات من شاشة واحدة.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wasla.app"),
  title,
  description,
  applicationName: "Wasla",
  authors: [{ name: "Wasla" }],
  creator: "Wasla",
  publisher: "Wasla",
  category: "medical",
  keywords: [
    "Wasla",
    "إدارة العيادات",
    "حجوزات مواعيد",
    "واتساب للعيادات",
    "تذكير مواعيد",
    "صندوق وارد موحد",
    "عيادات",
    "مراكز طبية",
    "إدارة مرضى",
    "WhatsApp clinic",
    "appointment booking",
    "clinic management",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: "Wasla",
    title,
    description,
    url: "https://wasla.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Wasla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/wasla-icon.svg",
    apple: "/wasla-icon.svg",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Wasla",
    statusBarStyle: "default",
  },
  alternates: {
    languages: {
      ar: "/",
    },
  },
  other: {
    "language": "ar",
    "distribution": "global",
    "rating": "general",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1317",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
