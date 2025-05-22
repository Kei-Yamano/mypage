import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">自己紹介</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="relative w-40 h-40 overflow-hidden rounded-full">
            {/* プロフィール画像（必要に応じて差し替え可能） */}
            <Image
              src="/addicon.png"
              alt="プロフィール画像"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">山野 夏</h2>
            <p className="text-gray-600 mb-4">格ゲーマ</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Kei-Yamano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">自己紹介</h3>
          <p className="mb-4">
            こんにちは、山野夏です。コマンドを覚えることに情熱を持つエンジニアです。
            Next.jsやReactを使ったウェブアプリケーション開発を始めてみようかと思いかけています。
          </p>
          <p>
            このポートフォリオサイトでは、私の経歴やスキル、制作物などを紹介しようと思っています。
            お気軽にご連絡ください！
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">スキル</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="font-medium">フロントエンド:</span> HTML, CSS,
              JavaScript, React, Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">バックエンド:</span> Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">その他:</span> Git, GitHub, Vercel
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">言語:</span> TypeScript, JavaScript,
              Python
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">経歴</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">和歌山大学 システム工学部</h4>
              <p className="text-gray-600">2021年4月 - 2025年3月卒業</p>
            </div>
            <div>
              <h4 className="font-medium">
                和歌山大学 大学院 システム工学研究科
                コミュニケーション科学クラスタ
              </h4>
              <p className="text-gray-600">2025年4月 - 2027年3月修了見込み</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">開発実績</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">ヒッタンセーブ</h4>
              <div>開発期間</div>
              <p>2か月</p>
              <div>概要</div>
            </div>
            <div>
              <h4 className="font-medium">てるてる~Tell Your Tale~</h4>
              <div>開発期間</div>
              <p>2か月</p>
              <div>概要</div>
            </div>
            <div>
              <h4 className="font-medium">PUMP~Pop Up Memo Pad~</h4>
              <div>開発期間</div>
              <p>2日</p>
              <div>概要</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            お問い合わせ
          </h3>
          <p>
            お仕事のご依頼やご質問は、
            <a
              href="mailto:your-email@example.com"
              className="text-blue-500 hover:text-blue-700"
            >
              your-email@example.com
            </a>
            までお気軽にご連絡ください。
          </p>
        </section>
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">便利機能</h3>
          <p className="mb-4">
            レポートや卒論に役立つ3つのツールをご利用いただけます。
          </p>
          <a
            href="/tools"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            便利機能ページへ
          </a>
        </section>
        <Link href="/timekillers">
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full text-lg">
            🎮 暇つぶしゲーム
          </button>
        </Link>
      </div>
    </main>
  );
}
