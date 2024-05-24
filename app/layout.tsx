import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './global.css';
import { ContextProvider } from 'mock/MockData';
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader
          color='#2ba830'
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          showSpinner={false}
          easing='ease'
          speed={200}
          shadow='0 0 10px #2ba830,0 0 5px #2ba830'
          zIndex={1600}
        />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
