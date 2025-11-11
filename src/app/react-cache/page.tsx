import { ComponentA } from '@/feature/reactCache/components/ComponentA';
import { ComponentB } from '@/feature/reactCache/components/ComponentB';
import { ComponentC } from '@/feature/reactCache/components/ComponentC';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <h2>1. react cache</h2>
      <Suspense>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </Suspense>
    </>
  );
}
