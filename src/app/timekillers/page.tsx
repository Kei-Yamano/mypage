// /app/timekillers/page.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function TimekillersPage() {
  // クリック数ゲームの状態
  const [clickCount, setClickCount] = useState(0);
  const [clickGameTime, setClickGameTime] = useState(10); // デフォルト10秒
  const [clickGameRunning, setClickGameRunning] = useState(false);
  const [clickTimeLeft, setClickTimeLeft] = useState(0);
  const [clickGameFinished, setClickGameFinished] = useState(false);

  // 反射神経ゲームの状態
  const [reactionGameState, setReactionGameState] = useState<
    "ready" | "waiting" | "click" | "result"
  >("ready");
  const [reactionStartTime, setReactionStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [reactionHistory, setReactionHistory] = useState<number[]>([]);

  const reactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // クリック数ゲームのタイマー
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (clickGameRunning && clickTimeLeft > 0) {
      timer = setInterval(() => {
        setClickTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (clickGameRunning && clickTimeLeft === 0) {
      setClickGameRunning(false);
      setClickGameFinished(true);
    }

    return () => clearInterval(timer);
  }, [clickGameRunning, clickTimeLeft]);

  // クリック数ゲーム開始
  const startClickGame = () => {
    setClickCount(0);
    setClickTimeLeft(clickGameTime);
    setClickGameRunning(true);
    setClickGameFinished(false);
  };

  // クリック数ゲームリセット
  const resetClickGame = () => {
    setClickCount(0);
    setClickGameRunning(false);
    setClickTimeLeft(0);
    setClickGameFinished(false);
  };

  // ボタンクリック処理
  const handleButtonClick = () => {
    if (clickGameRunning) {
      setClickCount((prev) => prev + 1);
    }
  };

  // 反射神経ゲーム開始
  const startReactionGame = () => {
    setReactionGameState("waiting");
    const randomDelay = Math.random() * 5000 + 1000; // 1-6秒のランダム待機

    reactionTimeoutRef.current = setTimeout(() => {
      setReactionGameState("click");
      setReactionStartTime(Date.now());
    }, randomDelay);
  };

  // 反射神経ゲームのクリック処理
  const handleReactionClick = () => {
    if (reactionGameState === "click") {
      const endTime = Date.now();
      const timeTaken = endTime - reactionStartTime;
      setReactionTime(timeTaken);
      setReactionHistory((prev) => [...prev, timeTaken].slice(-5)); // 最新5回分保持
      setReactionGameState("result");
    } else if (reactionGameState === "waiting") {
      // フライング
      if (reactionTimeoutRef.current) {
        clearTimeout(reactionTimeoutRef.current);
      }
      setReactionTime(-1); // フライングを表す
      setReactionGameState("result");
    }
  };

  // 反射神経ゲームリセット
  const resetReactionGame = () => {
    if (reactionTimeoutRef.current) {
      clearTimeout(reactionTimeoutRef.current);
    }
    setReactionGameState("ready");
    setReactionTime(0);
  };

  // 平均反応時間計算
  const averageReactionTime =
    reactionHistory.length > 0
      ? Math.round(
          reactionHistory.reduce((a, b) => a + b, 0) / reactionHistory.length
        )
      : 0;

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      {/* トップページに戻るボタン */}
      <div className="flex justify-center">
        <Link href="/">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
            ← トップページに戻る
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">🎮 暇つぶしゲーム</h1>

      {/* クリック数ゲーム */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          ⚡ クリック数チャレンジ
        </h2>

        <div className="text-center space-y-6">
          {/* 設定 */}
          <div className="flex justify-center items-center gap-4">
            <label className="text-lg">制限時間:</label>
            <select
              value={clickGameTime}
              onChange={(e) => setClickGameTime(Number(e.target.value))}
              disabled={clickGameRunning}
              className="p-2 border rounded text-lg"
            >
              <option value={5}>5秒</option>
              <option value={10}>10秒</option>
              <option value={15}>15秒</option>
              <option value={30}>30秒</option>
            </select>
          </div>

          {/* カウンター */}
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {clickCount}
          </div>

          {/* タイマー */}
          {clickGameRunning && (
            <div className="text-2xl font-mono text-red-500">
              残り時間: {clickTimeLeft}秒
            </div>
          )}

          {/* 結果表示 */}
          {clickGameFinished && (
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-xl">
                結果: <span className="font-bold text-2xl">{clickCount}</span>{" "}
                クリック!
              </p>
              <p className="text-sm text-gray-600">
                1秒あたり {(clickCount / clickGameTime).toFixed(1)} クリック
              </p>
            </div>
          )}

          {/* クリックボタン */}
          <button
            onClick={handleButtonClick}
            disabled={!clickGameRunning}
            className={`w-64 h-64 text-2xl font-bold rounded-full transition-all ${
              clickGameRunning
                ? "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl active:scale-95"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {clickGameRunning ? "クリック!" : "ゲーム停止中"}
          </button>

          {/* コントロールボタン */}
          <div className="flex justify-center gap-4">
            <button
              onClick={startClickGame}
              disabled={clickGameRunning}
              className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform ${
                clickGameRunning
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-400 to-lime-500 hover:from-green-500 hover:to-lime-600 text-white shadow-md hover:shadow-lg hover:scale-105"
              }`}
            >
              🚀 スタート
            </button>
            <button
              onClick={resetClickGame}
              className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              🔄 リセット
            </button>
          </div>
        </div>
      </section>

      {/* 反射神経ゲーム */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          ⚡ 反射神経テスト
        </h2>

        <div className="text-center space-y-6">
          {/* 状態表示 */}
          <div className="h-20 flex items-center justify-center">
            {reactionGameState === "ready" && (
              <p className="text-xl text-gray-600">
                スタートボタンを押してください
              </p>
            )}
            {reactionGameState === "waiting" && (
              <p className="text-xl text-orange-500 animate-pulse">
                待機中... 緑色になったらすぐにクリック!
              </p>
            )}
            {reactionGameState === "click" && (
              <p className="text-2xl text-green-500 font-bold animate-bounce">
                今だ! クリック!
              </p>
            )}
            {reactionGameState === "result" && (
              <div className="space-y-2">
                {reactionTime === -1 ? (
                  <p className="text-xl text-red-500">
                    フライング! 早すぎました
                  </p>
                ) : (
                  <div>
                    <p className="text-xl">
                      反応時間:{" "}
                      <span className="font-bold text-2xl text-blue-600">
                        {reactionTime}ms
                      </span>
                    </p>
                    {reactionTime < 200 && (
                      <p className="text-green-500">素晴らしい!</p>
                    )}
                    {reactionTime >= 200 && reactionTime < 300 && (
                      <p className="text-yellow-500">良い!</p>
                    )}
                    {reactionTime >= 300 && (
                      <p className="text-orange-500">練習しましょう!</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 反応時間履歴 */}
          {reactionHistory.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">最近の記録:</p>
              <div className="flex justify-center gap-2 mb-2">
                {reactionHistory.slice(-5).map((time, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 px-2 py-1 rounded text-sm"
                  >
                    {time}ms
                  </span>
                ))}
              </div>
              <p className="text-sm">
                平均: <span className="font-bold">{averageReactionTime}ms</span>
              </p>
            </div>
          )}

          {/* クリックボタン */}
          <button
            onClick={handleReactionClick}
            disabled={reactionGameState === "ready"}
            className={`w-64 h-64 text-2xl font-bold rounded-full transition-all ${
              reactionGameState === "ready"
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : reactionGameState === "waiting"
                ? "bg-red-500 text-white"
                : reactionGameState === "click"
                ? "bg-green-500 text-white animate-pulse"
                : "bg-blue-500 text-white"
            }`}
          >
            {reactionGameState === "ready" && "ゲーム停止中"}
            {reactionGameState === "waiting" && "待機中..."}
            {reactionGameState === "click" && "クリック!"}
            {reactionGameState === "result" && "もう一度"}
          </button>

          {/* コントロールボタン */}
          <div className="flex justify-center gap-4">
            <button
              onClick={startReactionGame}
              disabled={
                reactionGameState === "waiting" || reactionGameState === "click"
              }
              className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform ${
                reactionGameState === "waiting" || reactionGameState === "click"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white shadow-md hover:shadow-lg hover:scale-105"
              }`}
            >
              🚀 スタート
            </button>
            <button
              onClick={resetReactionGame}
              className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              🔄 リセット
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
