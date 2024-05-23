import DefaultLayout from 'layouts/DefaultLayout';

export default function DefaultLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
