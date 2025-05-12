import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'ロケット開発 | Nociws',
  description: 'Nociwsのロケット開発プロジェクトについてご紹介します。これまでの開発実績や現在進行中のプロジェクトなどを掲載しています。',
};

export default function RocketPage() {
  return (
    <div className="bg-gray-50">
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="h-80 w-full relative">
          <Image
            src="/images/rocket-hero.jpg"
            alt="ロケット打ち上げの様子"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ロケット開発
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
                  <a href="#current" className="block text-blue-600 hover:text-blue-800">現行機体：Skyward-1</a>
                  <a href="#past" className="block text-blue-600 hover:text-blue-800">過去の開発機体</a>
                  <a href="#technology" className="block text-blue-600 hover:text-blue-800">主要技術</a>
                  <a href="#achievements" className="block text-blue-600 hover:text-blue-800">開発実績</a>
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
                    Nociwsのロケット開発プロジェクトは、サークル設立当初から続く中核活動です。
                    私たちは「自分たちの手で宇宙へ」をスローガンに、すべての工程を学生メンバーの手で行っています。
                  </p>
                  <p>
                    設計から部品加工、電子回路製作、プログラミング、そして最終的な機体組み立てと打ち上げまで、
                    一貫して自分たちで行うことで、実践的な工学知識と問題解決能力を培っています。
                  </p>
                  <p>
                    現在は高度3,000m以上を目指す「Skyward」シリーズの開発を進めており、
                    最終的には小型衛星の打ち上げが可能な機体の開発を目指しています。
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-3">目標到達高度</h3>
                    <p className="text-4xl font-bold text-blue-600">5,000m+</p>
                    <p className="text-gray-600 mt-2">2025年までの目標</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-3">これまでの打ち上げ回数</h3>
                    <p className="text-4xl font-bold text-blue-600">27回</p>
                    <p className="text-gray-600 mt-2">2010年の設立以降</p>
                  </div>
                </div>
              </section>

              {/* 現行機体：Skyward-1 */}
              <section id="current" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">現行機体：Skyward-1</h2>
                
                <div className="mb-8 aspect-w-16 aspect-h-9 relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyward1.jpg"
                    alt="Skyward-1ロケット"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    Skyward-1は2023年に開発された最新の高高度ロケットです。
                    全長2.5m、直径15cm、重量12kgの機体で、自作のハイブリッドエンジンを搭載しています。
                  </p>
                  <p>
                    2023年10月に初打ち上げを行い、高度3,050mを達成しました。
                    機体回収システムも正常に機能し、データロガーからすべての飛行データを回収することに成功しています。
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">主要スペック</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-500">全長</h4>
                      <p className="font-bold">2.5 m</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">直径</h4>
                      <p className="font-bold">15 cm</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">重量</h4>
                      <p className="font-bold">12 kg</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">エンジン</h4>
                      <p className="font-bold">ハイブリッド式</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">推力</h4>
                      <p className="font-bold">750 N</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">到達高度</h4>
                      <p className="font-bold">3,050 m</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">最大速度</h4>
                      <p className="font-bold">320 km/h</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">飛行時間</h4>
                      <p className="font-bold">193 秒</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">回収方式</h4>
                      <p className="font-bold">二段式パラシュート</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 過去の開発機体 */}
              <section id="past" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">過去の開発機体</h2>
                
                <div className="space-y-8">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-64 h-48 relative">
                        <Image
                          src="/images/skyward-proto.jpg"
                          alt="Skyward-Prototype"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Skyward-Prototype (2022)</h3>
                        <p className="text-gray-700 mb-4">
                          Skyward-1の前身機体。全長2.3m、直径12cm、重量10kg。
                          高度2,500mを達成し、現行機体の設計基盤となりました。
                        </p>
                        <div className="flex space-x-4">
                          <div>
                            <span className="text-gray-500 text-sm">到達高度</span>
                            <p className="font-bold">2,500 m</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm">打ち上げ回数</span>
                            <p className="font-bold">3 回</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-64 h-48 relative">
                        <Image
                          src="/images/horizon-2.jpg"
                          alt="Horizon-2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Horizon-2 (2020)</h3>
                        <p className="text-gray-700 mb-4">
                          全長1.8m、直径10cm、重量8kg。固体燃料エンジンを搭載し、
                          高度1,500mを達成しました。姿勢制御システムの実証機として開発。
                        </p>
                        <div className="flex space-x-4">
                          <div>
                            <span className="text-gray-500 text-sm">到達高度</span>
                            <p className="font-bold">1,500 m</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm">打ち上げ回数</span>
                            <p className="font-bold">5 回</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-64 h-48 relative">
                        <Image
                          src="/images/horizon-1.jpg"
                          alt="Horizon-1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Horizon-1 (2018)</h3>
                        <p className="text-gray-700 mb-4">
                          初の本格的な高高度ロケット。全長1.5m、直径8cm、重量5kg。
                          高度1,000mを突破し、データロガーの実証に成功。
                        </p>
                        <div className="flex space-x-4">
                          <div>
                            <span className="text-gray-500 text-sm">到達高度</span>
                            <p className="font-bold">1,050 m</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm">打ち上げ回数</span>
                            <p className="font-bold">7 回</p>
                          </div>
                        </div>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">ハイブリッドエンジン</h3>
                    <p className="text-gray-700">
                      固体燃料と液体酸化剤を組み合わせたハイブリッドエンジンを独自開発。
                      安全性と高推力を両立し、複数回の燃焼実験を経て性能を最適化しています。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">飛行制御システム</h3>
                    <p className="text-gray-700">
                      自作の飛行制御コンピュータを搭載し、9軸IMUと気圧センサーによる姿勢制御と
                      高度計測を実現。リアルタイムでのデータ収集と制御を行います。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">空力設計</h3>
                    <p className="text-gray-700">
                      CFD解析と風洞実験を組み合わせた空力設計により、安定した飛行と
                      最小限の抗力を実現。カーボンファイバー製のノーズコーンと翼で軽量化と剛性を両立。
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">回収システム</h3>
                    <p className="text-gray-700">
                      二段式パラシュートにより、安全かつ確実な機体回収を実現。
                      高度計測に基づいた自動展開システムで適切なタイミングでの開傘を制御します。
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">技術開発プロセス</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><span className="font-medium">概念設計</span>: シミュレーションに基づく基本パラメータの決定</li>
                    <li><span className="font-medium">詳細設計</span>: CADを用いた3Dモデリングと設計レビュー</li>
                    <li><span className="font-medium">プロトタイピング</span>: 3Dプリンターと機械加工による部品製作</li>
                    <li><span className="font-medium">地上検証</span>: 各サブシステムの動作確認と改良</li>
                    <li><span className="font-medium">統合試験</span>: 機体全体の組み立てと機能試験</li>
                    <li><span className="font-medium">打ち上げ</span>: 実際の飛行と性能評価</li>
                    <li><span className="font-medium">分析改良</span>: 飛行データの分析と次世代機への改良点抽出</li>
                  </ol>
                </div>
              </section>

              {/* 開発実績 */}
              <section id="achievements" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">開発実績</h2>
                
                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-500">
                    <div className="absolute left-[-8px] top-0 bg-blue-500 rounded-full w-4 h-4"></div>
                    <div className="font-bold text-lg">2023年10月</div>
                    <div className="text-gray-700">Skyward-1 初打ち上げ成功、高度3,050m達成</div>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-500">
                    <div className="absolute left-[-8px] top-0 bg-blue-500 rounded-full w-4 h-4"></div>
                    <div className="font-bold text-lg">2023年4月</div>
                    <div className="text-gray-700">自作ハイブリッドエンジン地上燃焼試験成功</div>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-500">
                    <div className="absolute left-[-8px] top-0 bg-blue-500 rounded-full w-4 h-4"></div>
                    <div className="font-bold text-lg">2022年11月</div>
                    <div className="text-gray-700">Skyward-Prototype 高度2,500m達成</div>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-500">
                    <div className="absolute left-[-8px] top-0 bg-blue-500 rounded-full w-4 h-4"></div>
                    <div className="font-bold text-lg">2022年6月</div>
                    <div className="text-gray-700">全国学生宇宙開発コンテスト技術賞受賞</div>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-500">
                    <div className="absolute left-[-8px] top-0 bg-blue-500 rounded-full w-4 h-4"></div>
                    <div className="font-bold text-lg">2020年8月</div>
                    <div className="text-gray-700">Horizon-2 シリーズ開発完了、高度1,500m達成</div>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-[-8px] top-0 bg-blue-500 rounded-full w-4 h-4"></div>
                    <div className="font-bold text-lg">2018年5月</div>
                    <div className="text-gray-700">Horizon-1 初の高度1,000m突破</div>
                  </div>
                </div>
              </section>

              {/* 今後の展望 */}
              <section id="future" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">今後の展望</h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p>
                    Nociwsロケットチームは、以下の目標に向けて活動を続けています：
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">Skyward-2の開発</h3>
                    <p className="text-gray-700 mb-2">
                      より大型で高性能なエンジンを搭載し、高度5,000mを目指す次世代機の開発。
                      2024年中の初打ち上げを計画しています。
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">開発進捗: 60%</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">カーマンライン到達プロジェクト</h3>
                    <p className="text-gray-700 mb-2">
                      宇宙空間の境界とされる高度100kmのカーマンラインを目指す長期プロジェクト。
                      2030年までの到達を目標に、基礎研究を進めています。
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">開発進捗: 15%</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3">キューブサット打ち上げ能力の獲得</h3>
                    <p className="text-gray-700 mb-2">
                      小型衛星（キューブサット）の打ち上げができるロケットの開発を目指しています。
                      まずは成層圏からの衛星放出実験を計画中です。
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">開発進捗: 30%</div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                  >
                    ロケットチームへの参加を問い合わせる
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
              <h3 className="text-xl font-bold mb-3">ロケットの打ち上げ場所はどこですか？</h3>
              <p className="text-gray-700">
                ロケットの打ち上げは、安全性を考慮して主に○○県の△△実験場で行っています。
                この場所は学生ロケットの打ち上げに適した環境で、必要な許可を取得した上で実施しています。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">ロケットチームに参加するには特別な知識が必要ですか？</h3>
              <p className="text-gray-700">
                特別な予備知識は必要ありません。興味と熱意があれば、基礎から一緒に学んでいくことができます。
                チーム内でのトレーニングや先輩からの指導により、徐々に専門知識を身につけていくことができます。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">ロケット開発の費用はどのように賄っていますか？</h3>
              <p className="text-gray-700">
                開発費用は主に大学からの活動補助金、企業スポンサーシップ、クラウドファンディング、
                そして各種コンテストでの賞金などで賄っています。また、部品の一部は企業からの現物支給も受けています。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">ロケットの最終目標は何ですか？</h3>
              <p className="text-gray-700">
                私たちの最終目標は、独自開発のロケットで小型衛星を軌道に投入することです。
                段階的に高度を上げながら技術を蓄積し、最終的には「カーマンライン」と呼ばれる宇宙空間の境界（高度100km）を
                超えることを目指しています。
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
            <Link href="/spacecraft" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="h-56 relative">
                  <Image
                    src="/images/lunawalker.jpg"
                    alt="探査機プロジェクト"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">探査機開発プロジェクト</h3>
                  <p className="text-gray-700 mb-4">
                    月面探査ローバーや超小型衛星の開発。ロケットプロジェクトと連携して、
                    将来的には自作ロケットでの衛星打ち上げを目指しています。
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
                    src="/images/blog1.jpg"
                    alt="活動ブログ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">活動ブログ</h3>
                  <p className="text-gray-700 mb-4">
                    ロケット開発の進捗状況や打ち上げレポート、チームメンバーの体験談など、
                    プロジェクトの最新情報を発信しています。
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
    </div>
  );
}
