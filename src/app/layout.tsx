import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/app-context";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio Moctezuma | Desarrollador de Software",
  description:
    "Portafolio de Gerardo Mauricio Luna Moctezuma, desarrollador de software multiplataforma especializado en aplicaciones web y móviles.",
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var l=localStorage.getItem('lang');var d=document.documentElement;if(t==='light')d.classList.add('light');if(l==='en'||l==='es')d.setAttribute('lang',l);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-white">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1 !important;filter:none !important;transform:none !important}`}</style>
        </noscript>
        <AppProvider>
          <Background />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </AppProvider>
      </body>
    </html>
  );
}
