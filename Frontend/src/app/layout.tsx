import type { Metadata } from "next";
import { Tajawal, Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Wasla | نظام إدارة مواعيد ومرضى العيادات على الواتساب",
  description:
    "Wasla هو مركز عمليات واتساب لعيادتك. صندوق وارد موحد، حجوزات مواعيد، تذكير تلقائي للمرضى، وفريق كامل يدير المحادثات من شاشة واحدة.",
  icons: {
    icon: "/wasla-icon.svg",
  },
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
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
