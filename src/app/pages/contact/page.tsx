"use client";

import type React from "react";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Contact
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          プロジェクトのご相談、技術的な質問、お仕事のご依頼など、
          お気軽にお問い合わせください。できる限り迅速にご返信いたします。
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              お問い合わせ情報
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    メールアドレス
                  </h3>
                  <p className="text-slate-600 mb-2">
                    お仕事のご依頼やご質問はこちらまで
                  </p>
                  <a
                    href="mailto:contact@natscape.dev"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    contact@natscape.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    レスポンス時間
                  </h3>
                  <p className="text-slate-600 mb-2">
                    通常24時間以内にご返信いたします
                  </p>
                  <p className="text-sm text-slate-500">
                    営業時間: 平日 9:00 - 18:00 (JST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    所在地
                  </h3>
                  <p className="text-slate-600">東京都, 日本</p>
                  <p className="text-sm text-slate-500 mt-1">
                    リモートワーク対応可能
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              よくある質問
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  プロジェクトの期間はどのくらいですか？
                </h4>
                <p className="text-slate-600 text-sm">
                  プロジェクトの規模により異なりますが、小規模なものは1-2週間、大規模なものは2-3ヶ月程度です。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  リモートでの作業は可能ですか？
                </h4>
                <p className="text-slate-600 text-sm">
                  はい、リモートワークに対応しています。オンラインでのコミュニケーションツールを活用します。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  技術スタックの相談は可能ですか？
                </h4>
                <p className="text-slate-600 text-sm">
                  もちろんです。プロジェクトの要件に最適な技術スタックをご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            お問い合わせフォーム
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-200"
          >
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-800">
                  メッセージが正常に送信されました。ありがとうございます！
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800">
                  送信中にエラーが発生しました。もう一度お試しください。
                </p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  件名 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                >
                  <option value="">件名を選択してください</option>
                  <option value="project">プロジェクトのご相談</option>
                  <option value="collaboration">
                    コラボレーションのご提案
                  </option>
                  <option value="technical">技術的なご質問</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical"
                  placeholder="プロジェクトの詳細、ご質問、ご要望などをお聞かせください..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    メッセージを送信
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              *
              必須項目です。お送りいただいた情報は、お問い合わせ対応のみに使用いたします。
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
