// /app/tools/page.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ToolsPage() {
  const [text, setText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25分
  const [isBreak, setIsBreak] = useState(false);
  type Assignment = { id: number; name: string; dueDate: string };
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [newAssignment, setNewAssignment] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

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

  // レポート提出カレンダー
  const addAssignment = () => {
    if (newAssignment && newDueDate) {
      setAssignments([
        ...assignments,
        {
          id: Date.now(), // 一意のIDを生成
          name: newAssignment,
          dueDate: newDueDate,
        },
      ]);
      setNewAssignment("");
      setNewDueDate("");
    }
  };

  const removeAssignment = (id: number) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  // 日付でソート
  const sortedAssignments = [...assignments].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

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

      {/* 提出期限カレンダー */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          📅 レポート提出カレンダー
        </h2>

        {/* 新規課題入力フォーム */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                課題名
              </label>
              <input
                type="text"
                value={newAssignment}
                onChange={(e) => setNewAssignment(e.target.value)}
                placeholder="課題名を入力"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="md:w-40">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                提出期限
              </label>
              <input
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                className="w-full border rounded p-2"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div>
            <button
              onClick={addAssignment}
              disabled={!newAssignment || !newDueDate}
              className={`px-4 py-2 rounded ${
                newAssignment && newDueDate
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              課題を追加
            </button>
          </div>
        </div>

        {/* 課題リスト */}
        {sortedAssignments.length > 0 ? (
          <div className="border rounded divide-y">
            {sortedAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex justify-between items-center p-3 hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">{assignment.name}</p>
                  <p className="text-sm text-gray-500">
                    提出期限:{" "}
                    {new Date(assignment.dueDate).toLocaleDateString("ja-JP")}
                  </p>
                </div>
                <button
                  onClick={() => removeAssignment(assignment.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  削除
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">課題はまだ登録されていません</p>
        )}
      </section>
    </main>
  );
}
