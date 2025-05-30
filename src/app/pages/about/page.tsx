import {
  Code,
  Database,
  Palette,
  Users,
  Award,
  Heart,
  Trophy,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python"],
    },
    {
      category: "Tools",
      items: ["JupyterNotebook", "Git", "VScode", "Vercel"],
    },
    {
      category: "Design",
      items: ["Figma"],
    },
  ];

  const experience = [
    {
      period: "2025/4 - 現在",
      title:
        "和歌山大学大学院 システム工学研究科 コミュニケーション科学クラスタ",
      company: "修士課程",
      description:
        "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
    },
    {
      period: "2021/4 - 2025/3",
      title:
        "和歌山大学 システム工学部 社会情報学メジャー 感性情報デザイン研究室",
      company: "学士課程",
      description:
        "テキストコミュニケーションにおける褒め方の上手さを推定するモデルの精度分析",
    },
    {
      period: "2017/4 - 2020/3",
      title: "清風南海高等学校",
      company: "高等学校",
      description: "まだ情報系に進むかすら決めていなかった時期です。",
    },
  ];

  const awards = [
    {
      title: "ハッカソン最優秀賞",
      project: "Chrome拡張機能「PUMP」",
      description:
        "ユーザーの作業効率を向上させるChrome拡張機能を開発。直感的なUIと実用的な機能が評価され、参加チーム中で最優秀賞を受賞。",
      date: "2024年",
      icon: "🏆",
      color: "from-yellow-100 to-orange-100",
      borderColor: "border-yellow-300",
    },
    {
      title: "和歌山大学学生挑戦コンテスト優秀賞",
      project: "デジタルサイネージ導入提案",
      description:
        "大学内の情報発信を効率化するデジタルサイネージシステムの導入を提案。実現可能性と革新性が評価され、優秀賞を受賞。",
      date: "2023年",
      icon: "🌟",
      color: "from-blue-100 to-purple-100",
      borderColor: "border-blue-300",
    },
  ];

  const organizations = [
    {
      name: "学生団体 add。",
      role: "企画担当",
      description:
        "学生の挑戦を支援する団体として、イベント企画や運営を担当。新しいアイデアを形にする場を提供し、学生同士のネットワーク構築に貢献。",
      image: "/add-logo.png",
      website: "#",
      activities: [
        "イベント企画・運営",
        "学生支援プログラム",
        "ネットワーキング",
      ],
    },
  ];

  const hobbies = [
    {
      name: "格闘ゲーム",
      description:
        "コマンド入力の正確性と戦略的思考を磨く。主にストリートファイターシリーズをプレイ。",
      icon: "🥊",
      color: "from-red-100 to-orange-100",
    },
    {
      name: "漫画",
      description:
        "様々なジャンルの漫画を読み、ストーリーテリングやキャラクター設計を学ぶ。",
      icon: "📚",
      color: "from-blue-100 to-cyan-100",
    },
    {
      name: "サッカー観戦",
      description: "戦術分析や選手の動きを観察し、チームワークの重要性を実感。",
      icon: "⚽",
      color: "from-green-100 to-emerald-100",
    },
    {
      name: "カラオケ",
      description:
        "音楽を通じてストレス発散し、表現力を向上させる。友人との交流の場としても活用。",
      icon: "🎤",
      color: "from-purple-100 to-pink-100",
    },
  ];

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          技術への情熱と創造性を持ち、ユーザーに価値を提供するプロダクト開発に取り組んでいます。
          常に新しい技術を学び、チームと協力して素晴らしいソリューションを創り出すことを目指しています。
        </p>
      </div>

      {/* Awards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-600" />
          受賞実績
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${award.color} p-8 rounded-2xl border-2 ${award.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{award.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">
                      {award.title}
                    </h3>
                    <span className="text-sm font-medium text-slate-600 bg-white/50 px-3 py-1 rounded-full">
                      {award.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">
                    {award.project}
                  </h4>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Award className="h-8 w-8 text-blue-600" />
          学歴
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Code className="h-8 w-8 text-green-600" />
          技術スキル
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                {skillGroup.category === "Frontend" && (
                  <Palette className="h-5 w-5 text-pink-500" />
                )}
                {skillGroup.category === "Backend" && (
                  <Database className="h-5 w-5 text-blue-500" />
                )}
                {skillGroup.category === "Tools" && (
                  <Code className="h-5 w-5 text-green-500" />
                )}
                {skillGroup.category === "Design" && (
                  <Palette className="h-5 w-5 text-purple-500" />
                )}
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-slate-600 text-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Heart className="h-8 w-8 text-red-500" />
          趣味・興味
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${hobby.color} p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{hobby.icon}</span>
                <h3 className="text-xl font-bold text-slate-800">
                  {hobby.name}
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Organizations */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Users className="h-8 w-8 text-purple-600" />
          所属団体・活動
        </h2>
        <div className="grid gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Organization Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center overflow-hidden border-2 border-blue-200">
                    <Image
                      src={org.image || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Organization Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {org.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {org.role}
                      </span>
                    </div>
                    <a
                      href={org.website}
                      className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      詳細を見る
                    </a>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4">
                    {org.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">
                      主な活動
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {org.activities.map((activity, activityIndex) => (
                        <span
                          key={activityIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
