# うんちくエウレーカクイズ作成システム

## システム概要
本システムは、YouTubeチャンネル「ゆる言語学ラジオ」から生まれた、問題と答えがうんちくとしても楽しめるクイズ[うんちくエウレーカクイズ]の作問に役立つためのシステムです。
なお、本システムはYouTubeチャンネル「ゆる言語学ラジオ」、系列チャンネル、株式会社Pedanticには一切関係ございません。

## システム構成
- フロントエンド：React.js+TypeScript
- バックエンド：Node.js(Express)
- DB：PostgreSQL
- 認証：OAuth(GitHub)

## 機能一覧
- ユーザー登録（ユーザーID、メールアドレスで登録）
- ログイン機能（登録したユーザーか、GitHubによるOAuth認証でログイン）
- うんちく機能（登録・検索・作問）

## 画面一覧
- ユーザー登録画面
- ログイン画面
- うんちく登録画面
- うんちく修正画面
- うんちく一覧画面
- クイズ作成画面

## ディレクトリ構成（仮）
EurekaQuiz
 ├frontend/
 |  └src/
 |   ├── app/                # アプリ全体の初期化・設定
 |   │   ├── router.tsx
 |   │   ├── provider.tsx
 |   │   └── index.tsx
 |   ├── features/           # 機能単位
 |   │   ├── api/            # API通信
 |   │   ├── components/     # 機能専用UI
 |   │   ├── hooks/          # 機能専用ロジック
 |   │   ├── types/          # 機能専用型
 |   │   └── index.ts        # 外部公開
 |   ├── components/         # 共通UI
 |   ├── hooks/              # 共通hooks
 |   ├── lib/                # 外部ライブラリ設定
 |   ├── types/              # 共通型
 |   ├── utils/              # 純粋関数
 |   ├── assets/             # 静的ファイル
 |   └--styles/             # グローバルCSS
 |
 └backend/
 　└src/
    ├── app.ts              # Express設定     
    ├── server.ts           # サーバー起動
    ├── routes/             # ルーティング
    ├── controllers/        # HTTP処理
    ├── services/           # ビジネスロジック
    ├── repositories/       # DB操作
    ├── middlewares/        # 共通middleware
    ├── models/             # DBモデル
    ├── types/              # 型定義
    ├── utils/              # helper
    ├── config/             # 設定
    └── index.ts            # エントリーポイント
