# shadcn/ui Tutorial

shadcn/ui Tutorialは、shadcn/ui を活用する方法を学ぶためのステップバイステップガイドです。

## はじめに

Next.js プロジェクトに shadcn/ui を導入していきます。

Next.js の Docker コンテナを起動します。

```bash
docker compose build --no-cache
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

localhost:3000/test にアクセスすると、サイトの表示を確認できます。

## 使い方

### 1.ボタンを追加する

shadcn/ui のボタンコンポーネントを追加します。

```bash
npx shadcn@latest add button
```

`app/components/ui/button.tsx` が作成されます。

`app/test/page.tsx` を編集し、ボタンを表示します。

```js
import { Button } from "@/components/ui/button";

export default function TestPage() {
  return <Button>Button</Button>;
}
```

### 2.カレンダーを追加する

shadcn/ui のカレンダーコンポーネントを追加します。

```bash
npx shadcn@latest add calendar
```

`app/components/ui/calendar.tsx` が作成されます。

`app/test/page.tsx` を編集し、カレンダーを表示します。

```js
"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

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
Make a Todo list using tsx in Next.js.
```

v0 が作成したコンポーネントをコードに追加します。「Add to Codebase」をクリックします。

```bash
npx shadcn@latest add [v0 の URL]
```

`app/test/page.tsx` を編集し、TODO リストを表示します。

```js
import { TodoListComponent } from '../../components/todo-list'

export default function TestPage() {
  return (
    <main>
      <TodoListComponent />
    </main>
  )
}
```

## 本リポジトリを一から作成する手順

`Dockerfile` を作成します。

```docker
FROM node:22

WORKDIR /app

CMD ["npm", "run", "dev"]
```

`docker-compose.yml` を作成します。

```yaml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - node_modules:/app/node_modules

volumes:
  node_modules:
```

Next.js プロジェクトを作成します。

```bash
docker compose build --no-cache
docker compose run --rm web sh -c 'npx create-next-app app'
```

app ディレクトリ以下を同期し、サーバーを起動するように `Dockerfile` を編集します。

```docker
FROM node:22

WORKDIR /app

COPY ./app /app

RUN npm install

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
```

`docker-compose.yml` を編集します。

```yaml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./app:/app
      - node_modules:/app/node_modules

volumes:
  node_modules:
```

コンテナを起動します。

```bash
docker compose build --no-cache
docker compose up -d
```

localhost:3000 にアクセスすると、サイトの表示を確認できます。

その他、補足コマンドを以下に記載します。

```bash
# コンテナを削除
docker compose down --rmi all --volumes --remove-orphans

# コンテナを再起動
docker compose restart
```
