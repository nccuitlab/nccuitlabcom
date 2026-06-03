// @ts-ignore
import "./styles.css";

export const metadata = {
  title: "ITLab",
  description: "ITLab landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}