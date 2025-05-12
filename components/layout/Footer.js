import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Nociws</h3>
            <p className="text-gray-300">
              私たちは宇宙開発に携わる学生サークルです。ロケットや探査機の開発を行っています。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  団体について
                </Link>
              </li>
              <li>
                <Link href="/rocket" className="text-gray-300 hover:text-white">
                  ロケット
                </Link>
              </li>
              <li>
                <Link href="/spacecraft" className="text-gray-300 hover:text-white">
                  探査機
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">連絡先</h3>
            <p className="text-gray-300">
              〒123-4567<br />
              東京都○○区××1-2-3<br />
              ○○大学 ××学部<br />
              Email: info@example.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Nociws. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;