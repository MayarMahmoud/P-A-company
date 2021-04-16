import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    return (
        <>
        <meta name="google-site-verification" content="u-L9_s8yEL_KAMqAgQzwZbPxSv2BMYOVilaqO3ZceWM" />
           <HeroSection {...homeObjOne} />
           <HeroSection {...homeObjThree} />
           {/* <HeroSection {...homeObjTwo} /> */}
        </>
    )
}

export default Home
