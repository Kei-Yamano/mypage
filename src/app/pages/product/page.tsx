import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from "next/image";

export default function Product() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "モダンな技術スタックを使用したフルスタック EC サイト。ユーザー認証、決済機能、管理画面を含む包括的なソリューション。",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024年1月",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "チーム向けのタスク管理アプリケーション。リアルタイム同期、ドラッグ&ドロップ、進捗追跡機能を実装。",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023年11月",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "美しい UI を持つ天気予報ダッシュボード。複数都市の天気情報、グラフ表示、レスポンシブデザイン。",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023年9月",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "アニメーションとインタラクティブな要素を含むポートフォリオサイト。パフォーマンス最適化とSEO対応。",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023年7月",
      featured: false,
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "マークダウンエディター付きのブログプラットフォーム。記事管理、コメント機能、検索機能を実装。",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Express", "MySQL", "Markdown"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023年5月",
      featured: false,
    },
    {
      id: 6,
      title: "Mobile Game",
      description:
        "React Native で開発したモバイルゲーム。物理エンジン、スコアシステム、ソーシャル機能を含む。",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Expo", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023年3月",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Products
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          これまでに開発した制作物をご紹介します。各プロジェクトは異なる技術スタックと課題解決アプローチを採用しています。
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          注目のプロジェクト
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          その他のプロジェクト
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 px-4 py-2 border border-slate-300 text-slate-700 rounded text-sm hover:bg-slate-50 transition-colors duration-300"
                  >
                    <Github className="h-3 w-3" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
