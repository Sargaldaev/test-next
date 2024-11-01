'use client';
import {useSelector} from 'react-redux';
import {RootState} from '@/lib/store';
import {useEffect} from 'react';
import {useAppDispatch} from '@/lib/hooks';
import {getProducts} from '@/lib/features/products/productThunk';
import Header from '@/app/components/Header/Header';
import Nav from '@/app/components/Nav/Nav';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Products from '@/app/products/products';
import Footer from '@/app/components/Footer/Footer';

export default function Page() {


  return (
    <>
    <div className="container w-10/12  mx-auto ">
      <header>
        <Header/>
      </header>

      <nav>
        <Nav/>
      </nav>


      <main>
        <div className={'flex space-x-20'}>

        <div className={'w-[138px]'}>
          <Sidebar/>
        </div>

        <div className={' w-[750px] '}>
          <Products/>
        </div>

        </div>
      </main>

    </div>
      <footer>
        <Footer/>
      </footer>
    </>

  );
}

// export const metadata: Metadata = {
//   title: 'Redux Toolkit',
// };
