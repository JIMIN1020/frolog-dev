import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import SearchLayout from '@components/layout/SearchLayout';
import '../global.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'], // preload에 사용할 subsets
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frolog',
  description: 'Web site created with Next.js.',
  viewport: 'width=device-width, initial-scale=1, user-scalable=no',
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
        <SearchLayout>{children}</SearchLayout>
      </body>
    </html>
  );
}
