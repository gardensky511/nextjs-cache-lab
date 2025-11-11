import { Suspense } from 'react';
import { ComponentA } from '@/feature/useCache/components/ComponentA';
import { ComponentB } from '@/feature/useCache/components/ComponentB';
import { ComponentC } from '@/feature/useCache/components/ComponentC';

export default function Page() {
  return (
    <>
      <h2>2. &#39;use cache&#39;</h2>
      <Suspense>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </Suspense>
    </>
  );
}
