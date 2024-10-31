'use client';
import {useSelector} from 'react-redux';
import {RootState} from '@/lib/store';
import {useEffect} from 'react';
import {useAppDispatch} from '@/lib/hooks';
import {getProducts} from '@/lib/features/products/productThunk';

export default function Page() {

  const {products} = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {

    if (!products.length) {
      dispatch(getProducts());
    }

  }, [dispatch, products]);
  return (
    <>
      Hello


      {
        JSON.stringify(products)
      }
    </>
  );
}

// export const metadata: Metadata = {
//   title: 'Redux Toolkit',
// };
