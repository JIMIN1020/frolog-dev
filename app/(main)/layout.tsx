import MainLayout from '@components/layout/MainLayout';

export default function MainLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
