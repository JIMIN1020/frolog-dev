import NavBarLayout from 'layouts/NavBarLayout';

export default function NavBarLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavBarLayout>{children}</NavBarLayout>;
}
