import '../global.css';
import DefaultLayout from '@components/layout/DefaultLayout';

export default function DefaultLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
