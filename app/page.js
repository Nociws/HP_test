import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="h-96 w-full relative">
          <Image
            src="/images/hero.jpg"
            alt="ロケット打ち上げの様子"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                世界を宇宙に拡げよう
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                私たちは北見工業大学の学生サークルNociwsです。ロケットや探査機の開発に取り組んでいます．
              </p>
              <Link
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                団体について
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">活動内容</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ロケット開発 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/rocket_member.jpg"
                  alt="ロケット開発"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">ロケット開発</h3>
              <p className="text-gray-600 mb-4">
                設計から製作、打ち上げまでを学生主体で行っています。
              </p>
              <Link
                href="/rocket"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                詳細を見る →
              </Link>
            </div>
            
            {/* 探査機開発 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/shamoji.jpg"
                  alt="探査機開発"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">探査機開発</h3>
              <p className="text-gray-600 mb-4">
                惑星探査のための小型探査機の設計・開発を行っています。
              </p>
              <Link
                href="/spacecraft"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                詳細を見る →
              </Link>
            </div>
            
            {/* 研究活動 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/research.jpg"
                  alt="研究活動"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">研究活動</h3>
              <p className="text-gray-600 mb-4">
                宇宙工学に関する研究を行い、学会発表も積極的に行っています。
              </p>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                活動ブログ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新ブログ記事セクション */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">最新の活動</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ブログ記事1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 relative">
                <Image
                  src="/images/blog1.jpg"
                  alt="ブログ記事1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2023年10月15日</div>
                <h3 className="text-xl font-bold mb-2">高高度ロケットの打ち上げに成功</h3>
                <p className="text-gray-600 mb-4">
                  先週末、チームが開発した高高度ロケットの打ち上げに成功しました。高度3000mを達成し...
                </p>
                <Link
                  href="/blog/high-altitude-rocket-launch"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  続きを読む →
                </Link>
              </div>
            </div>
            
            {/* ブログ記事2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 relative">
                <Image
                  src="/images/blog2.jpg"
                  alt="ブログ記事2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2023年9月28日</div>
                <h3 className="text-xl font-bold mb-2">全国学生宇宙開発コンテストで優勝</h3>
                <p className="text-gray-600 mb-4">
                  今年の全国学生宇宙開発コンテストにおいて、私たちのチームが開発した探査機が...
                </p>
                <Link
                  href="/blog/space-development-contest-victory"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  続きを読む →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              すべての記事を見る
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-lg text-gray-600 mb-8">
            見学や入会に関するお問い合わせはこちらからお願いします。
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            お問い合わせフォーム
          </Link>
        </div>
      </section>
    </>
  );
}