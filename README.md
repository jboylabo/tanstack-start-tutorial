# TanStack Start 練習用

白い背景の Home と About だけの最小構成です。レイアウトは Next.js の一般的なページに近づけてあり、見た目は Tailwind CSS のユーティリティクラスで足していきます。

## 使い方

```bash
npm install
npm run dev
```

http://localhost:3000 を開きます。

| パス | ファイル |
| --- | --- |
| `/` | `src/routes/index.tsx` |
| `/about` | `src/routes/about.tsx` |

全ページ共通のヘッダーとフッターは `src/routes/__root.tsx` です。ページの中身は、その中の `{children}` の位置に入ります。

## プロジェクトごとに使い回す

このフォルダをそのまま編集し続けると、次のプロジェクトの出発点が重くなります。練習や本番用のアプリは、コピーした側で始めます。

GitHub では、1つのリポジトリを同じアカウントから fork できるのは1回だけです。プロジェクトごとに新しいリポジトリが欲しいときは、Template repository を使います。

### Fork する

元リポジトリを1つ、自分のアカウントへコピーする手順です。

1. https://github.com/jboylabo/tanstack-start-tutorial を開く
2. 右上の **Fork** を押す
3. オーナーとリポジトリ名を確認して **Create fork** を押す
4. できたリポジトリを clone する

```bash
git clone https://github.com/<あなたのアカウント>/tanstack-start-tutorial.git
cd tanstack-start-tutorial
npm install
npm run dev
```

### プロジェクトごとに新しく作る

GitHub の元リポジトリで **Settings → General → Template repository** にチェックを入れます。その後、リポジトリ画面の **Use this template → Create a new repository** から、アプリごとに別リポジトリを作ります。履歴は引き継がれず、各プロジェクトは独立します。

手元だけで複製するときは、フォルダをコピーして Git をやり直します。

```bash
cp -R tanstack-start-tutorial my-next-app
cd my-next-app
rm -rf .git
git init
npm install
npm run dev
```

## 練習する

右下の丸いアイコンは TanStack の開発ツールです。Home と About を行き来して、今どのルートが選ばれているかを確認します。

最初に読むファイルは次の4つです。

1. `src/routes/__root.tsx` — HTML 全体と共通レイアウト
2. `src/router.tsx` — ルーターの作成
3. `src/routes/index.tsx` — `/`
4. `src/components/Header.tsx` — `Link` による遷移

`src/routeTree.gen.ts` はルートファイルから自動生成されます。手で編集しません。開発サーバーが止まっているときにルートを足したら、`npm run generate-routes` を実行します。

練習は、この順で1つずつ足します。

1. `src/routes/contact.tsx` を作り、`createFileRoute('/contact')` で `/contact` を増やす
2. `src/components/Header.tsx` に、About と同じ書き方で `Link` を足す
3. `src/routes/posts/$postId.tsx` のように、`$` 付きのファイルで `/posts/123` を受け取る
4. ルートの `loader` で表示前にデータを取り、`Route.useLoaderData()` で描画する
5. `createServerFn` で、画面からサーバー側の関数を呼ぶ

公式ドキュメントは [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview) と [TanStack Start](https://tanstack.com/start/latest/docs/framework/react/overview) です。ファイルルートとデータ読み込みは Router、サーバー関数に入ってから Start を読むと迷いにくいです。

## スタイリング

スタイリングの土台は [Tailwind CSS](https://tailwindcss.com/) です。色、余白、文字サイズはコンポーネントの `className` に直接書きます。

入口は `src/styles.css` の次の1行です。

```css
@import 'tailwindcss';
```

このファイルでは、全ページ共通の下地だけを置いています。背景は白、文字色は `#111`、フォントはシステムフォントです。コンポーネント側のクラスが、この下地の上に乗ります。

```tsx
<main className="mx-auto max-w-3xl px-6 py-10">
  <h1 className="mb-4 text-3xl font-semibold tracking-tight">Home</h1>
  <p className="text-neutral-600">本文</p>
</main>
```

Tailwind は `vite.config.ts` の `tailwindcss()` プラグインで有効になっています。別の CSS フレームワークは入っていません。
