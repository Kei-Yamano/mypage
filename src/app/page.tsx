"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Hero Image Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-indigo-600/80"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
              面白いことを探したい。
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 drop-shadow-md leading-relaxed">
              自分事として捉えられ、共感できることを大切にしながら。
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="min-h-screen flex items-center justify-center py-16 md:py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          {/* Floating background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-4 h-4 bg-blue-200 rounded-full opacity-30 transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x * 0.02 + "px",
                top: mousePosition.y * 0.02 + "px",
              }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-purple-200 rounded-full opacity-40 transition-all duration-700 ease-out"
              style={{
                left: mousePosition.x * 0.05 + 100 + "px",
                top: mousePosition.y * 0.03 + 50 + "px",
              }}
            ></div>
          </div>

          <div className="text-center space-y-6 md:space-y-8 relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-yellow-500 animate-spin" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 relative leading-tight">
              ようこそ Natscape へ
              <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-xl md:text-2xl animate-bounce">
                ✨
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                山野 夏です。格ゲーマです。
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                コマンドを覚えることに情熱を持つエンジニア志望の大学生です。
                Next.jsやReactを使ったウェブアプリケーション開発を始めてみようかと思いかけています。
                このポートフォリオサイトでは、私の経歴やスキル、制作物などを紹介しようと思っています。
                お気軽にご連絡ください！
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12">
              <a
                href="/pages/about"
                className="group px-6 md:px-8 py-3 md:py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
              >
                私について詳しく
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/pages/product"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-slate-300 text-slate-800 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
              >
                制作物を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Career Vision Section */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              キャリアビジョン
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800">
                革新的な技術
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                最新技術を活用し、常に進化し続けるソリューションを提供
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800">
                デザイン思考
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                ユーザー中心のデザインで、直感的で美しいインターフェースを創造
              </p>
            </div>
            <div className="space-y-4 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800">
                持続的成長
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                継続的な学習と改善により、長期的な価値を創出
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun easter egg */}
      <section className="container px-4 py-8 md:px-6 text-center">
        <p className="text-sm text-slate-400 mb-2">
          🎯 何か楽しいことを探していますか？
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/pages/timekillers"
            className="text-sm text-blue-500 hover:text-blue-700 transition-colors duration-300 hover:underline"
          >
            時間つぶし
          </a>
          <span className="text-slate-300">|</span>
          <a
            href="/pages/tools"
            className="text-sm text-green-500 hover:text-green-700 transition-colors duration-300 hover:underline"
          >
            便利ツール
          </a>
        </div>
      </section>
    </div>
  );
}
