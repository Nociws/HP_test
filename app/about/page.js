import Image from 'next/image';
import Link from 'next/link'; // Linkコンポーネントをインポート

export const metadata = {
  title: '団体について | Nociws',
  description: 'Nociwsは宇宙開発に携わる学生サークルです。私たちの理念、歴史、活動内容についてご紹介します。',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="h-80 w-full relative">
          <Image
            src="/images/about-hero.jpg"
            alt="チームメンバー集合写真"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                団体について
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* サイドバー */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-4 pb-4 border-b border-gray-200">目次</h2>
                <nav className="space-y-2">
                  <a href="#mission" className="block text-blue-600 hover:text-blue-800">理念とミッション</a>
                  <a href="#history" className="block text-blue-600 hover:text-blue-800">設立の歴史</a>
                  <a href="#activities" className="block text-blue-600 hover:text-blue-800">主な活動内容</a>
                  <a href="#achievements" className="block text-blue-600 hover:text-blue-800">実績と受賞歴</a>
                  <a href="#organization" className="block text-blue-600 hover:text-blue-800">組織構成</a>
                  <a href="#join" className="block text-blue-600 hover:text-blue-800">入会について</a>
                </nav>
              </div>
            </div>

            {/* 中略 - 変更のない部分 */}

            {/* 入会について */}
            <section id="join" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">入会について</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p>
                  Nociwsでは、宇宙開発に興味のある大学生・大学院生を随時募集しています。
                  工学系の知識がなくても、熱意をもって活動に参加できる方であれば大歓迎です。
                </p>
                <p>
                  入会を希望される方は、以下の方法でお問い合わせください：
                </p>
                <ul>
                  <li>お問い合わせフォームから「入会希望」として問い合わせる</li>
                  <li>毎週水曜日18:00から開催している説明会に参加する（事前予約制）</li>
                  <li>年2回（4月・10月）開催の新歓イベントに参加する</li>
                </ul>
                <p>
                  見学も随時受け付けていますので、まずは活動の様子を見てみたいという方も
                  お気軽にお問い合わせください。
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                {/* ここでaタグをLinkコンポーネントに置き換え */}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  入会について問い合わせる
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
