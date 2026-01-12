import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Opiny } from "opiny-sdk-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Widget Opiny",
  description: "Exemplo de uso do widget da Opiny no Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <Opiny 
            surveyId="cmjt5c5d00003jr0wngf8kjga"

            // Opicional: Metadados
            metadata={{
              origem: 'nextjs-example'
            }}
            
            // Opcional: Mostrar APENAS nestas rotas
            includedPaths={[
              '/',  // Mostra apenas na página inicial
            ]}

            // Opcional: NÃO mostrar nestas rotas (tem prioridade sobre o include)
            excludedPaths={[
              '/test'
            ]}
          />
      </body>
    </html>
  );
}
