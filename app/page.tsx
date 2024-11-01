'use client';
import {useSelector} from 'react-redux';
import {RootState} from '@/lib/store';
import {useEffect} from 'react';
import {useAppDispatch} from '@/lib/hooks';
import {getProducts} from '@/lib/features/products/productThunk';
import Header from '@/app/components/Header/Header';
import Nav from '@/app/components/Nav/Nav';
import Sidebar from '@/app/components/Sidebar/Sidebar';

export default function Page() {
  const {products} = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!products.length) {
  //     dispatch(getProducts());
  //   }
  // }, [dispatch, products]);

  return (
    <div className="container w-10/12  mx-auto ">
      <header>
        <Header/>
      </header>

      <nav>
        <Nav/>
      </nav>


      <main>
        <div>
          <Sidebar/>
        </div>
        main
      </main>
    </div>
  );
}

// export const metadata: Metadata = {
//   title: 'Redux Toolkit',
// };
