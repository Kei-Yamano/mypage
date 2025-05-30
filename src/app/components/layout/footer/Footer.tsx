import Link from "next/link";
import { Github, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-700">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-semibold text-white">Logo</span>
            </div>
            <p className="text-sm text-slate-400">
              素晴らしいプロダクトとサービスを提供し、技術を通じて世界をより良い場所にします。
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              ナビゲーション
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/about"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/product"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/article"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links and secret pages */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              フォローする
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/Kei-Yamano"
                className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            {/* Secret playful links */}
            <div className="space-y-2 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500 mb-2">🎮 隠れた楽しみ</p>
              <div className="flex flex-col space-y-1">
                <Link
                  href="/pages/timekillers"
                  className="text-xs text-slate-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-1 group"
                >
                  暇つぶしゲーム
                </Link>
                <Link
                  href="/pages/tools"
                  className="text-xs text-slate-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-1 group"
                >
                  便利機能ページ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © To infinity and beyond! All rights reserved.
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-400" /> in Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
