import LogoLayout from '@components/layout/LogoLayout';

export default function LogoLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LogoLayout>{children}</LogoLayout>;
}
