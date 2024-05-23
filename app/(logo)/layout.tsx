import LogoLayout from 'layouts/LogoLayout';

export default function LogoLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LogoLayout>{children}</LogoLayout>;
}
