import SearchLayout from 'layouts/SearchLayout';

export default function SearchLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SearchLayout>{children}</SearchLayout>;
}
