import Carousel from '@/component/Carousel'

import React from 'react'
import 'animate.css';
import HomeFeature from '@/component/HomeFeature';
import Contact from '@/component/Contact';
import Testominal from '@/component/Testominal';
export default function page() {
  return (
    <div className='animate__animated animate__backInUp'>
    
<Carousel></Carousel>
<HomeFeature></HomeFeature>
<Testominal></Testominal>
<Contact></Contact>

    </div>
  )
}
