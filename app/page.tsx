'use client';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Product from '@/app/components/Product/product';

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
              <Product/>
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
