'use client';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { lazy, Suspense } from 'react';

const Products = lazy(() => import('@/app/components/Products/Products'));

export default function Page() {

  return (
    <>
      <div className="container w-10/12  mx-auto ">
        <main>
          <div className={'flex space-x-20'}>
            <div>
              <Sidebar/>
            </div>
            <div className={' w-[750px] '}>
              <Suspense fallback={<div>loading...</div>}>
                <Products/>
              </Suspense>
            </div>
          </div>
        </main>

      </div>
    </>

  );
}

// export const metadata: Metadata = {
//   title: 'Redux Toolkit',
// };
