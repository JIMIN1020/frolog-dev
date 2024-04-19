import TitleLayout from '@components/layout/TitleLayout';
import '../global.css';

export default function TitleLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TitleLayout>{children}</TitleLayout>;
}
