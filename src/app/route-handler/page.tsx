import { Suspense } from 'react';
import { ComponentA } from '@/feature/routeHandler/components/ComponentA';
import { ComponentB } from '@/feature/routeHandler/components/ComponentB';
import { ComponentC } from '@/feature/routeHandler/components/ComponentC';

export default function Page() {
  return (
    <>
      <h2>3. Route Handlers + fetch</h2>
      <Suspense>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </Suspense>
    </>
  );
}
