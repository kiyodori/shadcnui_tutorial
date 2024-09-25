# shadcn/ui Tutorial

shadcn/ui Tutorialは、shadcn/ui を活用する方法を学ぶためのステップバイステップガイドです。

## はじめに

Next.js プロジェクトに shadcn/ui を導入していきます。なお、本 Next.js プロジェクトでは学習コストを下げるために TypeScript は使用しません。

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

localhost:3000/index にアクセスすると、サイトの表示を確認できます。

## 使い方

### 1.ボタンを追加する

shadcn/ui のボタンコンポーネントを追加します。

```bash
npx shadcn@latest add button
```

`src/components/ui/button.jsx` が作成されます。

`src/pages/index/index.js` を編集し、ボタンを表示します。

```js
import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button>Button</Button>;
}
```

### 2.カレンダーを追加する

shadcn/ui のカレンダーコンポーネントを追加します。

```bash
npx shadcn@latest add calendar
```

`src/components/ui/calendar.jsx` が作成されます。

`src/pages/index/index.js` を編集し、カレンダーを表示します。

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

### 3.独自のコンポーネントを追加する (v0)

TODO リストのコンポーネントを v0 で作成します。v0 で以下のプロンプトを入力します。

```bash
Make a Todo list using JSX in Next.js.
```

もし tsx で表示された場合は、jsx に変換するようプロンプトに指示します。

```bash
Convert the code to JSX.
```

v0 が作成したコンポーネントをコードに追加します。「Add to Codebase」をクリックします。

```bash
npx shadcn@latest add "https://v0.dev/chat/b/b_OImbo1Y?token=xxxxx"
```

`src/pages/index/index.js` を編集し、TODO リストを表示します。

```js
import React from 'react';
import { TodoList } from '../../components/todo-list';

const IndexPage = () => {
  return (
    <main>
      <TodoList />
    </main>
  );
};

export default IndexPage;
```

## 初回構築の方法

`Dockerfile` と `docker-compose.yml` だけがある場合、以下のコマンドで Next.js プロジェクトを作成します。

```bash
docker compose build --no-cache
docker compose run --rm web sh -c 'npx create-next-app app'

# 一括削除する場合
docker compose down --rmi all --volumes --remove-orphans
```
