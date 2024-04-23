import SearchLayout from '@components/layout/SearchLayout';

export default function SearchLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SearchLayout>{children}</SearchLayout>;
}
