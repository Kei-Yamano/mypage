// /app/tools/page.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ToolsPage() {
  const [text, setText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25分
  const [isBreak, setIsBreak] = useState(false);

  // ポモドーロタイマー用の処理
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      // タイマー終了時の処理
      const notification = new Audio("/notification.mp3");
      try {
        notification.play();
      } catch (error) {
        console.log("Audio playback failed:", error);
      }

      if (isBreak) {
        // 休憩終了後、作業モードに戻る
        setTimeLeft(25 * 60);
        setIsBreak(false);
      } else {
        // 作業終了後、休憩モードに入る
        setTimeLeft(5 * 60);
        setIsBreak(true);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
  };

  // 文字数カウント
  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-12">
      {/* トップページに戻るボタン */}
      <div className="flex justify-center">
        <Link href="/">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
            ← トップページに戻る
          </button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">便利ツール集</h1>

      {/* 文字数カウント */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">✏️ 文字数カウント</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-40 p-4 border rounded"
          placeholder="ここに文章を入力してください..."
        />
        <p className="mt-2">
          文字数: {charCount} / 単語数: {wordCount}
        </p>
      </section>

      {/* ポモドーロタイマー */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">⏱ ポモドーロタイマー</h2>
        <div className="text-center">
          <div className="mb-2">
            {isBreak ? (
              <span className="text-blue-500">休憩モード</span>
            ) : (
              <span className="text-green-500">作業モード</span>
            )}
          </div>
          <div className="text-6xl font-mono my-4">
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
            {String(timeLeft % 60).padStart(2, "0")}
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleTimer}
              className={`px-6 py-2 rounded-full ${
                isRunning
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white`}
            >
              {isRunning ? "停止" : "スタート"}
            </button>
            <button
              onClick={resetTimer}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-full text-gray-800"
            >
              リセット
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
