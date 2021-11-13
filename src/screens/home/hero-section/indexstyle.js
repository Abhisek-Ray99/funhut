import styled from 'styled-components';

export const Div1 = styled.div`
    width: 100%;
    height: 140vh;
    position: relative;
    z-index: 2;
    margin-bottom: -15em;
    padding-top: 25em;
    padding-bottom: 5em;
    border-radius: 0em 0em 15em 15em;
    background-color: #ffec06;
    .hero-heading{
        font-size: 15em;
        text-align: center;
    }
`

export const Div2 = styled.div`
    width: 100%;
    height:100vh;
    background-color: #7950f2;
`

export const MainImg = styled.img`
    position: absolute;
    display: block;
    margin: auto;
    top: 10px;
    width: 40%;
    height: 60%;
    left: 0;
    right: 0;
    z-index:4;
`

export const Img = styled.img`
    width: 100px;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
`

export const ImgFlex = styled.div`
    position: absolute;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center
` 

