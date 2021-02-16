import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    return (
        <>
       
           <HeroSection {...homeObjFour} />
           <HeroSection {...homeObjThree} />

           
        </>
    )
}

export default Home