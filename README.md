# shadcn/ui tutorial

## Install

Docker コンテナを起動する。

```bash
docker compose up -d
```

```bash
docker compose exec web sh -c 'npx shadcn@latest init'
```

## 初回構築時

```bash
docker compose build --no-cache
docker compose run --rm web sh -c 'npx create-next-app app'
# 一括削除する場合
docker compose down --rmi all --volumes --remove-orphans
```
