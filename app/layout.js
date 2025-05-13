import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers'; // 新しいProviderをインポート

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nociws | ロケット・探査機開発',
  description: '私たちは宇宙開発をテーマとした学生サークルです。ロケットや探査機の開発を行っています。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}