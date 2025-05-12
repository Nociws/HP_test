'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'ホーム', href: '/' },
    { name: '団体について', href: '/about' },
    { name: 'ロケット', href: '/rocket' },
    { name: '探査機', href: '/spacecraft' },
    { name: 'ブログ', href: '/blog' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="サークルロゴ"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 font-bold text-lg">北見工業大学 Nociws : ノチウス</span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:ml-6 md:flex md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive(item.href)
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;