import MainLayout from '@components/layout/MainLayout';
import '../global.css';

export default function MainLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
