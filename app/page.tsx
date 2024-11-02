'use client';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { lazy, Suspense } from 'react';

const Products = lazy(() => import('@/app/components/Products/Products'));

export default function Page() {
  return (
    <main className="flex justify-between mx-[15%]">
      <div>
        <Sidebar />
      </div>
      <div className={' w-[750px] '}>
        <Suspense fallback={<div>loading...</div>}>
          <Products />
        </Suspense>
      </div>
    </main>
  );
}

// export const metadata: Metadata = {
//   title: 'Redux Toolkit',
// };
