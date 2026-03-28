# 3行日記ブログ（Astro）

Astroで作ったシンプルな3行日記ブログです。  
毎日少しずつ積み上げることを目的にしています。

## OGP プレビュー

![アプリのプレビュー](https://diary-blog-sage.vercel.app/ogp.png)

---

## 🔧 技術スタック

- Astro
- Tailwind CSS
- Markdown（記事管理）

## 🚀 セットアップ

```bash
npm install
npm run dev
```
開発サーバー：
http://localhost:4321


## 📝 記事の追加方法
`src/content/diary/` に Markdown ファイルを追加します。
例：
```
---
title: "2026-03-28"
date: "2026-03-28"
---

今日はAstroを始めた。  
環境構築で少し詰まった。  
明日は続きやる。
```

ファイル名がそのままURLになります：
```
/diary/2026-03-28
```

## 📁 ディレクトリ構成
```bash
src/
  content/diary/   # 日記記事
  pages/           # ページ
  layouts/         # レイアウト
```

## 🎯 コンセプト
- 1日3行だけ書く
- 継続しやすさを最優先
- シンプルな構成

## 🌍 今後やること
- 月別アーカイブ
- タイトル改善