import MainLayout from 'layouts/MainLayout';

export default function MainLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
