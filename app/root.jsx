import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css"

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export const meta = () => ({
  charset: "utf-8",
  title: "Pitang1965 Software Blog",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
