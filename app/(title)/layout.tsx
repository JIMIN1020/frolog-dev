import TitleLayout from '@components/layout/TitleLayout';

export default function TitleLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TitleLayout>{children}</TitleLayout>;
}
