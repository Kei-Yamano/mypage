import { Calendar, Clock, Tag, ExternalLink, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Article() {
  const articles = [
    {
      id: 1,
      title: "Next.js 14 の新機能とパフォーマンス最適化",
      excerpt:
        "Next.js 14 で導入された新機能と、実際のプロジェクトでのパフォーマンス最適化手法について詳しく解説します。",
      date: "2024年2月15日",
      readTime: "8分",
      tags: ["Next.js", "React", "パフォーマンス"],
      platform: "Qiita",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
      category: "技術",
    },
    {
      id: 2,
      title: "格闘ゲームから学ぶプログラミングの思考法",
      excerpt:
        "格闘ゲームのコマンド入力や戦略的思考が、プログラミングスキルの向上にどのように役立つかを考察します。",
      date: "2024年2月10日",
      readTime: "6分",
      tags: ["格闘ゲーム", "思考法", "プログラミング"],
      platform: "個人ブログ",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
      category: "趣味",
    },
    {
      id: 3,
      title: "TypeScript で型安全な React アプリケーション開発",
      excerpt:
        "TypeScript を使用した React アプリケーション開発のベストプラクティスと、型安全性を保つためのテクニックを紹介。",
      date: "2024年1月28日",
      readTime: "12分",
      tags: ["TypeScript", "React", "型安全性"],
      platform: "Zenn",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "技術",
    },
    {
      id: 4,
      title: "漫画から学ぶストーリーテリングとUI設計",
      excerpt:
        "漫画の構成やキャラクター設計から、ユーザーインターフェース設計に活かせる要素を探ります。",
      date: "2024年1月20日",
      readTime: "7分",
      tags: ["漫画", "UI設計", "ストーリーテリング"],
      platform: "個人ブログ",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "趣味",
    },
    {
      id: 5,
      title: "CSS Grid と Flexbox の使い分けガイド",
      excerpt:
        "CSS Grid と Flexbox の特徴を理解し、適切な場面での使い分け方法を実例とともに解説します。",
      date: "2024年1月10日",
      readTime: "6分",
      tags: ["CSS", "レイアウト", "フロントエンド"],
      platform: "Qiita",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "技術",
    },
    {
      id: 6,
      title: "サッカー観戦で身につくチーム開発の視点",
      excerpt:
        "サッカーの戦術分析から学ぶ、効果的なチーム開発とコミュニケーションの手法について。",
      date: "2024年1月5日",
      readTime: "5分",
      tags: ["サッカー", "チーム開発", "コミュニケーション"],
      platform: "個人ブログ",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "趣味",
    },
    {
      id: 7,
      title: "React Hooks の効果的な使い方",
      excerpt:
        "useState、useEffect を始めとする React Hooks の効果的な使い方と、カスタムフックの作成方法について。",
      date: "2023年12月20日",
      readTime: "10分",
      tags: ["React", "Hooks", "JavaScript"],
      platform: "Zenn",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "技術",
    },
    {
      id: 8,
      title: "カラオケで鍛える表現力とプレゼンテーション",
      excerpt:
        "カラオケでの歌唱体験が、技術プレゼンテーションや表現力向上にどう活かせるかを考察。",
      date: "2023年12月15日",
      readTime: "4分",
      tags: ["カラオケ", "プレゼンテーション", "表現力"],
      platform: "個人ブログ",
      url: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      category: "趣味",
    },
  ];

  const featuredArticles = articles.filter((article) => article.featured);
  const techArticles = articles.filter(
    (article) => article.category === "技術" && !article.featured
  );
  const hobbyArticles = articles.filter(
    (article) => article.category === "趣味" && !article.featured
  );

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Qiita":
        return "bg-green-100 text-green-800";
      case "Zenn":
        return "bg-blue-100 text-blue-800";
      case "個人ブログ":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    return category === "技術" ? "bg-blue-500" : "bg-pink-500";
  };

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Articles
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          技術記事やブログ投稿を通じて、学んだ知識や経験を共有しています。
          技術的な内容から趣味に関する考察まで、幅広いトピックをお届けします。
        </p>
      </div>

      {/* Featured Articles */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          注目の記事
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getPlatformColor(
                    article.platform
                  )}`}
                >
                  {article.platform}
                </div>
                <div
                  className={`absolute bottom-4 left-4 ${getCategoryColor(
                    article.category
                  )} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {article.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={article.url}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  記事を読む
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Articles */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">技術記事</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${getPlatformColor(
                    article.platform
                  )}`}
                >
                  {article.platform}
                </div>
                <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                  技術
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>

                <a
                  href={article.url}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors duration-300"
                >
                  読む
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hobby Articles */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          趣味・ライフスタイル記事
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbyArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${getPlatformColor(
                    article.platform
                  )}`}
                >
                  {article.platform}
                </div>
                <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                  趣味
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>

                <a
                  href={article.url}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-pink-600 text-white rounded text-sm hover:bg-pink-700 transition-colors duration-300"
                >
                  読む
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          もっと記事を読みたい方へ
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          各プラットフォームで定期的に技術記事や趣味に関する記事を投稿しています。
          最新の記事や詳細な解説は、各プラットフォームをご覧ください。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Qiita をフォロー
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Zenn をフォロー
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-300"
          >
            個人ブログ
          </a>
        </div>
      </section>
    </div>
  );
}
