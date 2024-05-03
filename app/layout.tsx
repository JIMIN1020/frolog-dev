import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './global.css';
import { ContextProvider } from 'mock/MockData';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Frolog',
  description: 'Web site created with Next.js.',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={notoSansKR.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
