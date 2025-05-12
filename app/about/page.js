import Image from 'next/image';

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

            {/* メインエリア */}
            <div className="md:col-span-2 space-y-12">
              {/* 理念とミッション */}
              <section id="mission" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">理念とミッション</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Nociwsは「自分たちの手で宇宙へ」をスローガンに掲げ、学生主体の宇宙開発プロジェクトを推進する団体です。
                    私たちは、単なる研究や学習にとどまらず、実際に宇宙空間に到達する機体の設計・開発・打ち上げを目指しています。
                  </p>
                  <p>
                    私たちのミッションは以下の通りです：
                  </p>
                  <ul>
                    <li>「手の届く宇宙」を実現する技術の開発</li>
                    <li>宇宙開発の次世代を担うエンジニアの育成</li>
                    <li>宇宙開発の魅力を広く一般に伝える活動</li>
                    <li>学生主体の自律的なプロジェクト運営のモデルケース創出</li>
                  </ul>
                </div>
              </section>

              {/* 設立の歴史 */}
              <section id="history" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">設立の歴史</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Nociwsは2010年、宇宙工学を学ぶ5名の学生によって設立されました。
                    当初は大学の研究室の一角を借りて小型モデルロケットの製作からスタートし、徐々に活動規模を拡大してきました。
                  </p>
                  <p>
                    2012年には初の自作エンジンを搭載したロケットの打ち上げに成功し、2015年には高度1,000mを突破。
                    2018年からは衛星開発プロジェクトを開始し、現在は小型衛星の軌道投入を目指しています。
                  </p>
                  <p>
                    現在では複数の大学から集まった50名以上のメンバーが、ロケットチーム、探査機チーム、電装チーム、
                    広報チームなど専門分野ごとに分かれて活動しています。
                  </p>
                </div>
              </section>

              {/* 主な活動内容 */}
              <section id="activities" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">主な活動内容</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">ロケット開発プロジェクト</h3>
                    <p className="text-gray-700 mb-4">
                      高度3,000m以上を目指す高高度ロケットの設計・製作・打ち上げを行っています。
                      エンジン開発、機体設計、制御システムなど、すべてを学生の手で行っています。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">探査機開発プロジェクト</h3>
                    <p className="text-gray-700 mb-4">
                      月や火星などの惑星探査を想定した小型探査機の開発を行っています。
                      月面コンテストなどの国際大会にも積極的に参加しています。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">研究開発活動</h3>
                    <p className="text-gray-700 mb-4">
                      宇宙工学に関する研究開発を行い、学会や論文での発表も行っています。
                      推進系、誘導制御系、構造系など様々な分野での研究を進めています。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">アウトリーチ活動</h3>
                    <p className="text-gray-700 mb-4">
                      地域の子どもたちに向けたロケット工作教室や、一般向けの宇宙開発講座などを開催し、
                      宇宙開発の魅力を広く伝える活動も行っています。
                    </p>
                  </div>
                </div>
              </section>

              {/* 実績と受賞歴 */}
              <section id="achievements" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">実績と受賞歴</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">主な実績</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>高度3,050mロケット打ち上げ成功（2023年）</li>
                      <li>全国学生宇宙開発コンテスト優勝（2022年）</li>
                      <li>自作エンジン燃焼実験100回達成（2021年）</li>
                      <li>月面探査ローバープロトタイプ開発（2020年）</li>
                      <li>国際宇宙ステーション実験採択（2019年）</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">受賞歴</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>宇宙開発推進機構賞（2023年）</li>
                      <li>全国学生宇宙開発コンテスト技術賞（2022年）</li>
                      <li>アジア太平洋宇宙協力機構ユースフォーラム優秀賞（2021年）</li>
                      <li>○○財団宇宙開発奨励賞（2020年）</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 組織構成 */}
              <section id="organization" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">組織構成</h2>
                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    Nociwsは以下のチーム構成で活動しています。各チームがそれぞれの専門分野を担当しながら、
                    プロジェクト単位で横断的に協力して活動を進めています。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">ロケットチーム</h3>
                    <p className="text-gray-700">ロケットの設計・製作・打ち上げを担当</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">探査機チーム</h3>
                    <p className="text-gray-700">探査機の設計・製作・試験を担当</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">電装チーム</h3>
                    <p className="text-gray-700">電子機器の設計・製作・プログラミングを担当</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">エンジンチーム</h3>
                    <p className="text-gray-700">推進系の研究開発・試験を担当</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">広報チーム</h3>
                    <p className="text-gray-700">SNS運用・イベント・資金調達・アウトリーチを担当</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">運営チーム</h3>
                    <p className="text-gray-700">団体の全体運営・対外交渉・予算管理を担当</p>
                  </div>
                </div>
              </section>

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
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                  >
                    入会について問い合わせる
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
