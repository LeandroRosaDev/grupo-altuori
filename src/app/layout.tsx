import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/componentes/Menu";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Grupo Altuori",
  description:
    "Grupo Altuori: Especialistas em gestão empresarial, oferecendo soluções personalizadas para otimizar processos e impulsionar o crescimento sustentável da sua empresa. Descubra como podemos transformar o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
