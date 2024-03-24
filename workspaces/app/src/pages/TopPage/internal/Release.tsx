import { Suspense } from 'react';

import { BookCard } from '../../../features/book/components/BookCard';
import { useRelease } from '../../../features/release/hooks/useRelease';
import { getDayOfWeekStr } from '../../../lib/date/getDayOfWeekStr';

const Release = () => {
  const todayStr = getDayOfWeekStr(new Date());
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });
  return (
    <Suspense fallback={null}>
      {release.books.map((book) => (
        <BookCard key={book.id} bookId={book.id} />
      ))}
    </Suspense>
  );
};
export default Release;
