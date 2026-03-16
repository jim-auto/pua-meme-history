# PUA Meme History

https://jim-auto.github.io/pua-meme-history/site/

PUA（Pickup Artist）/ ナンパ / マッチングアプリ界隈で流行したミームやネタを年ごとに整理する文化アーカイブです。

## ディレクトリ構成

```
pua-meme-history/
├── README.md
├── data/           # 年ごとのミームデータ (JSON)
│   ├── 2025.json
│   ├── 2024.json
│   ├── 2023.json
│   ├── 2022.json
│   ├── 2021.json
│   └── 2020.json
├── images/         # ミーム画像
└── site/           # GitHub Pages サイト
    ├── index.html  # トップページ
    ├── year.html   # 年別ページ
    ├── style.css
    └── script.js
```

## ミームの追加方法

`data/` フォルダ内の対応する年のJSONファイルを編集します。

```json
[
  {
    "name": "ミーム名",
    "description": "ミームの説明",
    "origin": "元ネタ（Twitterアカウント、スレッドなど）",
    "image": "../images/example.jpg"
  }
]
```

画像は `images/` フォルダに配置し、`image` フィールドに相対パスを指定してください。

## GitHub Pages の設定

1. リポジトリの Settings → Pages を開く
2. Source を `Deploy from a branch` にする
3. Branch を `main`、フォルダを `/ (root)` にする
4. `https://<username>.github.io/pua-meme-history/site/` でアクセス可能

## 技術

- HTML / CSS / Vanilla JavaScript
- 外部ライブラリ不要
- スマホ対応（レスポンシブ）
- 画像クリックで拡大表示（ライトボックス）
