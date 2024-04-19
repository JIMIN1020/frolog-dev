import NavBarLayout from '@components/layout/NavBarLayout';
import '../global.css';

export default function NavBarLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavBarLayout>{children}</NavBarLayout>;
}
