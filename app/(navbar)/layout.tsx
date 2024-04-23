import NavBarLayout from '@components/layout/NavBarLayout';

export default function NavBarLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavBarLayout>{children}</NavBarLayout>;
}
