import Link from "next/link";
import {
  Github,
  Twitter,
  Mail,
  Heart,
  Coffee,
  Gamepad2,
  Waves,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-cyan-100 relative overflow-hidden">
      {/* Ocean wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-4">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-cyan-400/20"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-cyan-400/30"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-cyan-400/40"
          ></path>
        </svg>
      </div>

      {/* Floating ocean elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-8 left-10 w-2 h-2 bg-cyan-300/40 rounded-full animate-bounce"></div>
        <div className="absolute top-12 right-20 w-1 h-1 bg-blue-300/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 left-1/4 w-1.5 h-1.5 bg-teal-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-24 right-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container px-4 py-12 md:px-6 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enhanced Ocean-themed Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Main logo container with ocean gradient */}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden border-2 border-cyan-300/30">
                  {/* Animated wave pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-pulse"></div>

                  {/* Logo Image */}
                  <Image
                    src="/logo.png"
                    alt="Natscape Logo"
                    width={40}
                    height={40}
                    className="rounded-xl object-cover"
                  />

                  {/* Ocean decorative elements */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-60 animate-bounce"></div>
                </div>

                {/* Floating bubble accent */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full animate-bounce opacity-80"></div>
              </div>

              {/* Logo text with ocean styling */}
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-sm">
                  Natscape
                </span>
                <span className="text-xs text-cyan-300 -mt-1 tracking-wider drop-shadow-sm">
                  OCEAN STUDIO
                </span>
              </div>
            </div>
            <p className="text-sm text-cyan-200/80">
              海のように深く、波のように自由な発想で、素晴らしいプロダクトとサービスを提供します。
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Waves className="h-4 w-4 text-cyan-300" />
              ナビゲーション
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/about"
                  className="text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-cyan-200/80 hover:drop-shadow-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/product"
                  className="text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-cyan-200/80 hover:drop-shadow-sm"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/article"
                  className="text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-cyan-200/80 hover:drop-shadow-sm"
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block text-cyan-200/80 hover:drop-shadow-sm"
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
                href="#"
                className="text-cyan-200/80 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-sm"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-cyan-200/80 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-sm"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-cyan-200/80 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-sm"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            {/* Secret playful links */}
            <div className="space-y-2 pt-4 border-t border-cyan-400/20">
              <p className="text-xs text-cyan-300/60 mb-2">🌊 隠れた楽しみ</p>
              <div className="flex flex-col space-y-1">
                <Link
                  href="/pages/timekillers"
                  className="text-xs text-cyan-200/70 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-1 group"
                >
                  <Coffee className="h-3 w-3 group-hover:animate-bounce" />
                  Time Killers
                </Link>
                <Link
                  href="/pages/tools"
                  className="text-xs text-cyan-200/70 hover:text-cyan-100 transition-colors duration-300 flex items-center gap-1 group"
                >
                  <Gamepad2 className="h-3 w-3 group-hover:animate-pulse" />
                  Fun Tools
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-cyan-400/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cyan-200/70">
            © 2024 Natscape. All rights reserved.
          </p>
          <p className="text-sm text-cyan-200/70 flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-400 animate-pulse" />{" "}
            by the Ocean in Japan 🌊
          </p>
        </div>
      </div>
    </footer>
  );
}
