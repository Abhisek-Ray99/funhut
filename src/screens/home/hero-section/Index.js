import React from 'react'
import Parallax from 'react-rellax'
import { Parallax as ImageParallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Div1, Div2, MainImg, Img, ImgFlex } from './indexstyle'
import HeroImg from '../../../img/Oliver - free sample.png'
import Hero1 from '../../../img/01.products_01.tomatoes_Home_Tomatoes_02x2_govuaw.png'
import Hero2 from '../../../img/03.grapes_Home_Grapes_01x2_anh4wc.png'
import Hero3 from '../../../img/03.r_d_Menu_R_D_02x2_eowivl.png'
import Hero4 from '../../../img/03.r_d_Menu_R_D_03x2_bt9pax.png'
import Hero5 from '../../../img/01.products_Menu_Products_03x2_iog5ew.png'
import Hero6 from '../../../img/03.grapes_Home_Grapes_04x2_dxbzat.png'

import '../../../styles/font.css'

const Hero = () => {

    return (
        <ParallaxProvider>
            <Div1>
                <MainImg src={HeroImg} alt="hero" />
                <Parallax speed={6} className="hero-heading hero-font">
                    FunHut
                </Parallax>
                {/* <ImgFlex>
                    <ImageParallax speed={5} className="custom-class" y={[-20, 20]} tagOuter="figure">
                        <Img src={Hero1} alt="hero" />
                    </ImageParallax>
                    <ImageParallax className="custom-class" y={[20, -20]} tagOuter="figure">
                        <Img src={Hero2} />
                    </ImageParallax>
                    <ImageParallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                        <Img src={Hero3} />
                    </ImageParallax>
                    <ImageParallax className="custom-class" y={[20, -20]} tagOuter="figure">
                        <Img src={Hero4} />
                    </ImageParallax>
                    <ImageParallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                        <Img src={Hero5} />
                    </ImageParallax>
                    <ImageParallax className="custom-class" y={[20, -30]} tagOuter="figure">
                        <Img src={Hero6} />
                    </ImageParallax>
                </ImgFlex> */}

            </Div1>
            <Div2 />
        </ParallaxProvider>

    )
}

export default Hero
