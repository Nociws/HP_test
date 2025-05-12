import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '探査機開発 | Nociws',
  description: 'Nociwsの探査機開発プロジェクトについてご紹介します。月面探査ローバーや小型衛星など、宇宙探査に関する開発活動を掲載しています。',
};

export default function SpacecraftPage() {
  return (
    <div className="bg-gray-50">
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="h-80 w-full relative">
          <Image
            src="/images/spacecraft-hero.jpg"
            alt="月面探査ローバーのイメージ"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                探査機開発
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
                  <a href="#overview" className="block text-blue-600 hover:text-blue-800">プロジェクト概要</a>
                  <a href="#rover" className="block text-blue-600 hover:text-blue-800">月面探査ローバー: LunaWalker</a>
                  <a href="#cubesat" className="block text-blue-600 hover:text-blue-800">超小型衛星: NOCISat</a>
                  <a href="#technology" className="block text-blue-600 hover:text-blue-800">主要技術</a>
                  <a href="#competitions" className="block text-blue-600 hover:text-blue-800">大会参加実績</a>
                  <a href="#future" className="block text-blue-600 hover:text-blue-800">今後の展望</a>
                </nav>
              </div>
            </div>

            {/* メインエリア */}
            <div className="md:col-span-2 space-y-12">
              {/* プロジェクト概要 */}
              <section id="overview" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">プロジェクト概要</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Nociwsの探査機開発プロジェクトは、2018年に立ち上げられた比較的新しい取り組みです。
                    ロケット開発で培った技術をベースに、月や火星などの天体を探査する小型ローバーや、
                    地球周回軌道で様々なミッションを行う超小型衛星の開発を進めています。
                  </p>
                  <p>
                    このプロジェクトの特徴は、「実際に宇宙で使える技術」の開発にこだわっている点です。
                    過酷な宇宙環境に耐える設計や、限られたリソースで効率的に動作するシステムの構築など、
                    実践的な宇宙工学の知識と経験を積み重ねています。
                  </p>
                  <p>
                    現在は月面探査ローバー「LunaWalker」と超小型衛星「NOCISat」の2つのサブプロジェクトを
                    並行して進めており、国内外の学生宇宙開発コンテストにも積極的に参加しています。
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-3">チームメンバー</h3>
                    <p className="text-4xl font-bold text-blue-600">15名</p>
                    <p className="text-gray-600 mt-2">電子工学、機械工学、情報工学など多様な専攻</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-3">大会参加回数</h3>
                    <p className="text-4xl font-bold text-blue-600">8回</p>
                    <p className="text-gray-600 mt-2">国内外のコンテストに参加</p>
                  </div>
                </div>
              </section>

              {/* 月面探査ローバー: LunaWalker */}
              <section id="rover" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">月面探査ローバー: LunaWalker</h2>
                
                <div className="mb-8 aspect-w-16 aspect-h-9 relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/lunawalker.jpg"
                    alt="LunaWalker月面探査ローバー"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    LunaWalkerは月面探査を想定した小型ローバーで、月の起伏の激しい地形での走行や、
                    月の砂（レゴリス）の採取・分析などのミッションを想定して開発されています。
                  </p>
                  <p>
                    現在のプロトタイプは全長50cm、幅30cm、高さ25cm、重量3kgで、
                    太陽電池パネルと二次電池によるハイブリッド電源システムを採用しています。
                    また、カメラやセンサー類を搭載し、遠隔操作と自律走行の両方のモードで動作します。
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">主要スペック</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-500">サイズ</h4>
                      <p className="font-bold">50 × 30 × 25 cm</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">重量</h4>
                      <p className="font-bold">3 kg</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">動力</h4>
                      <p className="font-bold">ソーラー + バッテリー</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">走行方式</h4>
                      <p className="font-bold">6輪独立駆動</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">センサー</h4>
                      <p className="font-bold">カメラ、IMU、温度計など</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">通信</h4>
                      <p className="font-bold">WiFi/Bluetooth/LoRa</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">最大走行速度</h4>
                      <p className="font-bold">0.1 m/s</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">障害物乗り越え</h4>
                      <p className="font-bold">最大10cm</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">動作温度範囲</h4>
                      <p className="font-bold">-20°C 〜 +50°C</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">ミッション能力</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>地形マッピング（ステレオカメラによる3D地形データ作成）</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>サンプル採取（小型アームによる土壌サンプリング）</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>環境データ収集（温度、放射線、磁場などの計測）</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>自律走行（障害物回避と目標地点への自動ナビゲーション）</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 超小型衛星: NOCISat */}
              <section id="cubesat" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">超小型衛星: NOCISat</h2>
                
                <div className="mb-8 aspect-w-16 aspect-h-9 relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/nocisat.jpg"
                    alt="NOCISat超小型衛星"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    NOCISatは、1Uサイズ（10×10×10cm）のキューブサット規格に準拠した超小型衛星です。
                    低軌道周回衛星として、地球観測や通信実験などの様々なミッションに対応できる
                    汎用プラットフォームとして開発を進めています。
                  </p>
                  <p>
                    現在のエンジニアリングモデルでは、姿勢制御システム、通信システム、
                    オンボードコンピューターなどの基本機能を実装し、地上での検証試験を重ねています。
                    将来的には自作ロケットによる打ち上げも視野に入れています。
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">主要スペック</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-500">サイズ</h4>
                      <p className="font-bold">10 × 10 × 10 cm (1U)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">重量</h4>
                      <p className="font-bold">1.3 kg</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">電源</h4>
                      <p className="font-bold">太陽電池 + リチウムイオン電池</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">発電能力</h4>
                      <p className="font-bold">最大2.5W</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">通信</h4>
                      <p className="font-bold">UHF帯アマチュア無線</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">姿勢制御</h4>
                      <p className="font-bold">磁気トルカー</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">CPU</h4>
                      <p className="font-bold">ARM Cortex-M4</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">センサー</h4>
                      <p className="font-bold">太陽センサー、磁気センサー</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">ミッション機器</h4>
                      <p className="font-bold">小型カメラ</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">開発状況</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">構造系</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">通信系</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">電源系</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">姿勢制御系</span>
                        <span>50%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">ミッション機器</span>
                        <span>40%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">ソフトウェア</span>
                        <span>55%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 主要技術 */}
              <section id="technology" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">主要技術</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">姿勢制御システム</h3>
                    <p className="text-gray-700">
                      磁気トルカーと太陽センサーを組み合わせた低消費電力の姿勢制御システム。
                      地磁気を利用して衛星の向きを制御します。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">電力管理システム</h3>
                    <p className="text-gray-700">
                      高効率な太陽電池パネルとリチウムイオン電池を組み合わせたシステム。
                      省電力モードと最大出力モードを切り替えることで、限られた電力を有効活用します。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">オンボードコンピューター</h3>
                    <p className="text-gray-700">
                      耐放射線設計を考慮した低消費電力マイコンベースのコンピューター。
                      冗長化によりシングルイベントアップセットに対する耐性を持たせています。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">通信システム</h3>
                    <p className="text-gray-700">
                      UHF帯のアマチュア無線帯を利用した双方向通信システム。
                      低ビットレートながら確実なデータ送受信を実現します。
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">技術開発アプローチ</h3>
                  <p className="text-gray-700 mb-4">
                    Nociwsの探査機開発では、以下のアプローチで技術開発を行っています：
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>市販の部品を最大限活用しつつ、宇宙環境に適応させる工夫を施す</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>フェイルセーフ設計とグレースフルデグラデーションを重視する</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>ソフトウェアによる機能実現を最大化し、ハードウェア複雑性を最小化する</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>地上での徹底的な環境試験と模擬運用によるシステム検証</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 大会参加実績 */}
              <section id="competitions" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">大会参加実績</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="md:flex items-start">
                      <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <Image
                          src="/images/comp-unisec.jpg"
                          alt="全国学生宇宙開発コンテスト"
                          width={120}
                          height={120}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">全国学生宇宙開発コンテスト 2023</h3>
                        <p className="text-gray-700 mb-3">
                          LunaWalkerプロジェクトで参加し、技術革新賞を受賞。月面環境を模擬したフィールドでの
                          走行性能とサンプル採取能力が高く評価されました。
                        </p>
                        <div className="flex items-center">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">受賞</span>
                          <span className="ml-2 text-sm text-gray-600">技術革新賞</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="md:flex items-start">
                      <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <Image
                          src="/images/comp-satellite.jpg"
                          alt="アジア太平洋学生衛星コンテスト"
                          width={120}
                          height={120}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">アジア太平洋学生衛星コンテスト 2022</h3>
                        <p className="text-gray-700 mb-3">
                          NOCISatプロジェクトで参加し、ファイナリストに選出。
                          低コストで実現可能な地球観測ミッションの提案が評価されました。
                        </p>
                        <div className="flex items-center">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">ファイナリスト</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="md:flex items-start">
                      <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <Image
                          src="/images/comp-rover.jpg"
                          alt="国際学生ローバーチャレンジ"
                          width={120}
                          height={120}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">国際学生ローバーチャレンジ 2021</h3>
                        <p className="text-gray-700 mb-3">
                          LunaWalkerの初期プロトタイプで参加。障害物回避と自律走行のタスクでは好成績を収めたものの、
                          サンプル採取タスクで課題が見つかり、総合12位でした。
                        </p>
                        <div className="flex items-center">
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">入賞</span>
                          <span className="ml-2 text-sm text-gray-600">自律走行部門 3位</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 今後の展望 */}
              <section id="future" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">今後の展望</h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p>
                    Nociwsの探査機開発チームは、以下の目標に向けて活動を続けています：
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">LunaWalker Flight Model完成</h3>
                    <p className="text-gray-700 mb-2">
                      現在のプロトタイプをさらに発展させ、実際の月面環境に耐える
                      フライトモデルの完成を目指します。2024年末までに完成予定。
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">開発進捗: 45%</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">NOCISat打ち上げ</h3>
                    <p className="text-gray-700 mb-2">
                      完成したNOCISatを実際に打ち上げ、軌道上での実証を行うことを目指します。
                      国内外の打ち上げ機会を探っており、2025年以降の打ち上げを計画中です。
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">開発進捗: 30%</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">独自ミッションの立案と実行</h3>
                    <p className="text-gray-700 mb-2">
                      これまでの開発で得た知見をもとに、科学的・工学的に価値のある
                      独自ミッションの立案と実行を目指します。現在、いくつかのミッション案を検討中です。
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">開発進捗: 20%</div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                  >
                    探査機チームへの参加を問い合わせる
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">探査機プロジェクトはどのような頻度で活動していますか？</h3>
              <p className="text-gray-700">
                探査機チームは週2〜3回の定例ミーティングを行っています。また、プロジェクトの進捗状況や
                イベント・大会の準備に応じて、追加の作業日を設けることもあります。
                長期休暇中も継続して活動しています。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">プログラミングの経験がなくても参加できますか？</h3>
              <p className="text-gray-700">
                はい、経験がなくても問題ありません。探査機チームでは、機械設計、電子回路、
                プログラミング、運用計画など様々な役割があります。興味のある分野から始めて、
                活動を通じて徐々にスキルを身につけていくメンバーも多くいます。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">実際に宇宙に行く探査機を作っているのですか？</h3>
              <p className="text-gray-700">
                はい、そのゴールに向けて段階的に開発を進めています。現在は地上試験モデルの段階ですが、
                将来的には実際の宇宙環境で動作できる探査機やCubeSatの開発・打ち上げを
                目指しています。国内外の打ち上げ機会を探索中です。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">月面ローバーはどうやってテストしていますか？</h3>
              <p className="text-gray-700">
                月の環境を模擬するために、専用のテストフィールドを大学内に設置しています。
                月のレゴリス（表面の砂）に似た特性を持つ砂や岩を配置し、実際の月面地形を
                参考にした起伏を作成してテストを行っています。また、真空環境や放射線に関するテストは
                外部の研究機関と連携して実施しています。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 関連プロジェクトセクション */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">関連プロジェクト</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/rocket" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="h-56 relative">
                  <Image
                    src="/images/skyward1.jpg"
                    alt="ロケット開発プロジェクト"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">ロケット開発プロジェクト</h3>
                  <p className="text-gray-700 mb-4">
                    高高度ロケットの開発と打ち上げ。将来的には私たちの衛星を
                    自作ロケットで打ち上げることを目指しています。
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    詳細を見る
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="h-56 relative">
                  <Image
                    src="/images/blog2.jpg"
                    alt="活動ブログ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">活動ブログ</h3>
                  <p className="text-gray-700 mb-4">
                    探査機開発の最新情報や、各種コンテストへの参加レポート、
                    チームメンバーによる技術解説記事などを発信しています。
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    ブログを読む
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* ギャラリーセクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">探査機開発ギャラリー</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-rover1.jpg"
                alt="ローバー試作機の組み立て"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-rover2.jpg"
                alt="テストフィールドでの走行テスト"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-satellite1.jpg"
                alt="衛星のエンジニアリングモデル"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-satellite2.jpg"
                alt="環境試験の様子"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-team1.jpg"
                alt="チーム作業の様子"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-team2.jpg"
                alt="大会参加時の集合写真"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-design1.jpg"
                alt="設計図と3Dモデル"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-design2.jpg"
                alt="回路基板の設計"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              活動見学のお問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}