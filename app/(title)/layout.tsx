import TitleLayout from 'layouts/TitleLayout';

export default function TitleLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TitleLayout>{children}</TitleLayout>;
}
