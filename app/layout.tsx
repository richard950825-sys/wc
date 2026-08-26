import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '公共厕所指示牌',
  description: '可调整距离和方向的公共厕所指示牌',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
