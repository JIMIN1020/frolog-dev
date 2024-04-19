import SearchLayout from '@components/layout/SearchLayout';
import '../global.css';

export default function SearchLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SearchLayout>{children}</SearchLayout>;
}
