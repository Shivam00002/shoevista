import { PlatformBox } from '@/components/home/PlatformBox';
import { PlateformImages } from '@/components/home/data/ImgData';
import { ShoeBox } from '@/components/shoes/shoebox';
import { Linden_Hill } from 'next/font/google';
import {ShoeData} from "../components/home/shoe"
import Link from 'next/link';

import React from 'react'

const shoe = () => {
  return (
  <div className='md:w-[80%] flex relative  gap-2 w-full mx-auto '>
    <div className="w-[20%] sticky top-0 h-screen border">
      <h3>filter</h3>
      <h3>filter</h3>
      <h3>filter</h3>
      <h3>filter</h3>

    </div>
  
  <div className=" w-full grid md:grid-cols-4 grid-cols-2 mt-5 gap-3">
          {ShoeData?.map((el, index) => {
            return (
              <div >
                <ShoeBox
                  key={index}
                  img={el.images.portraitURL  }
                  name={el.title}
                  toptext="Saved upto 2k"
                  price={el.price.currentPrice}
                />
              </div>
            );
          })}
        </div>
  </div>
  )
}

export default shoe