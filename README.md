# shadcn/ui Tutorial

shadcn/ui Tutorialは、shadcn/ui を活用する方法を学ぶためのステップバイステップガイドです。

## はじめに

Next.js プロジェクトに shadcn/ui を導入していきます。

Next.js の Docker コンテナを起動します。

```bash
docker compose up -d
```

以下、Docker コンテナ内での操作になります。

```bash
docker compose exec web sh
```

shadcn/ui をインストールします。

```bash
npx shadcn@latest init
```

localhost:3000 にアクセスすると、サイトの表示を確認できます。

## 使い方

### ボタンを追加する

shadcn/ui のボタンコンポーネントを追加します。

```bash
npx shadcn@latest add button
```

`src/components/ui/button.jsx` が作成されます。

`src/app/page.js` を編集し、ボタンを表示します。

```js
import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button>Button</Button>;
}
```

### カレンダーを追加する

shadcn/ui のカレンダーコンポーネントを追加します。

```bash
npx shadcn@latest add calendar
```

`src/components/ui/calendar.jsx` が作成されます。

`src/app/page.js` を編集し、カレンダーを表示します。

```js
'use client'

import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = useState(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
```

## 初回構築の方法

`Dockerfile` と `docker-compose.yml` だけがある場合、以下のコマンドで Next.js プロジェクトを作成します。

```bash
docker compose build --no-cache
docker compose run --rm web sh -c 'npx create-next-app app'

# 一括削除する場合
docker compose down --rmi all --volumes --remove-orphans
```
