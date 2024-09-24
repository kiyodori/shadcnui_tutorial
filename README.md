# shadcn/ui Tutorial

shadcn/ui Tutorialは、shadcn/ui を活用する方法を学ぶためのステップバイステップガイドです。

## はじめに

Docker コンテナを起動します。

```bash
docker compose up -d
```

以下、Docker コンテナ内での操作になります。

```bash
docker compose exec web sh
```

## 使い方

shadcn/ui のコンポーネントを追加します。

```bash
npx shadcn@latest add button
```

app/app/components/ui/button.jsx が作成されます。

app/app/app/page.js を編集します。

```js
import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button>Button</Button>;
}
```

これでボタンが表示されます。

## 初回構築の方法

Docker コンテナに Next.js プロジェクトを作成します。

```bash
docker compose build --no-cache
docker compose run --rm web sh -c 'npx create-next-app app'

# 一括削除する場合
docker compose down --rmi all --volumes --remove-orphans
```

shadcn/ui をインストールします。

```bash
docker compose exec web sh -c 'npx shadcn@latest init'
```
