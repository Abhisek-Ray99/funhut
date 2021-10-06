import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GamePreview from '../../../components/GCard'

import { Div1, Div2, G1} from './indexstyle'

const Gamesec = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        centerPadding: "60px",
    };
    return (
        <Div1>
            <Div2>
                <Slider {...settings}>
                    <G1>
                        <GamePreview>
                            <p>1</p>
                        </GamePreview>
                    </G1>
                    <G1>
                        <GamePreview>
                            <p>2</p>
                        </GamePreview>
                    </G1>
                    <G1>
                        <GamePreview>
                            <p>3</p>
                        </GamePreview>
                    </G1>
                    <G1>
                        <GamePreview>
                            <p>4</p>
                        </GamePreview>
                    </G1>
                    <G1>
                        <GamePreview>
                            <p>5</p>
                        </GamePreview>
                    </G1>
                    <G1>
                        <GamePreview>
                            <p>6</p>
                        </GamePreview>
                    </G1>
                </Slider>
            </Div2>
        </Div1>


    )
}

export default Gamesec
