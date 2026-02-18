import './globals.css';
import type { Metadata } from 'next';
import { EB_Garamond, Lora, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Primeira Igreja Batista Reformada de Uberlândia',
  description: 'Igreja Batista Reformada Confessional em Uberlândia - Comprometida com a pregação fiel das Escrituras e a Confissão de Fé Batista de 1689.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${ebGaramond.variable} ${playfairDisplay.variable} ${lora.variable} font-serif`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
