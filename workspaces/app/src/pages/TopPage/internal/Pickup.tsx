import { Suspense } from 'react';

import { FeatureCard } from '../../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../../features/feature/hooks/useFeatureList';

const Pickup = () => {
  const { data: featureList } = useFeatureList({ query: { limit: 5 } });
  return (
    <Suspense fallback={null}>
      {featureList.map((feature) => (
        <FeatureCard key={feature.id} bookId={feature.book.id} />
      ))}
    </Suspense>
  );
};

export default Pickup;
