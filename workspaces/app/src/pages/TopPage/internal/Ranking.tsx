import { Suspense } from 'react';

import { RankingCard } from '../../../features/ranking/components/RankingCard';
import { useRankingList } from '../../../features/ranking/hooks/useRankingList';

const Ranking = () => {
  const { data: rankingList } = useRankingList({ query: { limit: 10 } });
  return (
    <Suspense fallback={null}>
      {rankingList.map((ranking) => (
        <RankingCard key={ranking.id} bookId={ranking.book.id} />
      ))}
    </Suspense>
  );
};

export default Ranking;
