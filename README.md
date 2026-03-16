# PUA界隈ヒストリー

https://jim-auto.github.io/kaiwai-history/site/

PUA（Pickup Artist）/ ナンパ / マッチングアプリ界隈で起きた事件・流行・人物・法規制を年ごとに記録するアーカイブです。

## コンテンツ

- **年別ミーム一覧**（2020〜2025年、66件）- 到達度スコア（1-5）とソース付き
- **[界隈の歴史](https://jim-auto.github.io/kaiwai-history/site/history.html)** - 1968年ディスコ文化〜2025年の地下化まで
- **[Timeline](https://jim-auto.github.io/kaiwai-history/site/timeline.html)** - チャート/ヒートマップで可視化

## 到達度スコア（Reach）

| スコア | 基準 |
|---|---|
| 1 | 界隈の一部のみ |
| 2 | 界隈内で広く認知 |
| 3 | 界隈外にも波及 |
| 4 | SNS全体でバズ |
| 5 | 社会現象（テレビ報道/逮捕報道/流行語） |

reach 4-5のミームには実際のニュース記事・調査データ等のソースURLを付与。

## ディレクトリ構成

```
kaiwai-history/
├── README.md
├── data/              # 年ごとのミームデータ (JSON)
│   ├── 2025.json
│   ├── 2024.json
│   ├── 2023.json
│   ├── 2022.json
│   ├── 2021.json
│   └── 2020.json
├── images/            # ミーム画像
└── site/              # GitHub Pages サイト
    ├── index.html     # トップページ
    ├── year.html      # 年別ページ
    ├── history.html   # 界隈の歴史
    ├── timeline.html  # タイムライン可視化
    ├── style.css
    ├── script.js
    └── timeline.js
```

## ミームの追加方法

`data/` フォルダ内の対応する年のJSONファイルを編集します。

```json
{
  "name": "ミーム名",
  "type": "event",
  "description": "説明",
  "origin": "元ネタ・出典",
  "image": "",
  "reach": 3,
  "peak_month": 6,
  "sources": [
    {"type": "news", "url": "https://...", "title": "記事タイトル"}
  ]
}
```

type: `phrase`（流行フレーズ）/ `event`（事件）/ `aruaru`（あるある）/ `term`（用語）

## 技術

- HTML / CSS / Vanilla JavaScript
- 外部ライブラリ不要
- スマホ対応（レスポンシブ）
