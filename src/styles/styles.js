import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: 1536px) {
    flex-direction: column-reverse;
    display: flex;
    margin: 50px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 2036px) {
    img {
      width: 200px;
    }
  }
`

export const EmblaGridContainer = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 22rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const EmblaGridContainer2 = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 22rem;
  display: flex;
  /* height: 100vh; */
  justify-content: space-between;
  flex-direction: column;
  background-color: #4ae3f6;
  padding-top: 150px; 
  padding-bottom: 150px;
`



export const MarginContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  h5 {
    color: white;
  }
  
`

export const Margin2Container = styled.div`
  margin-top: 15vh;
`


export const Margin3Container = styled.div`
  margin-top: 25vh;
  margin-bottom: 25vh;

  h5 {
    color: white;
  }
  
`
export const Margin4Container = styled.div`
  margin-bottom: 15vh;
`

export const IMGContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1530px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`

export const IMGContainer2 = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1530px) {
    flex-direction: column-reverse;

  }
`

export const Hero1Header = styled.div`
  display: flex;
  align-items: center;
  top: 0.2%;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 214px;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 95px;
  }

  @media only screen and (min-width: 1450px) and (max-width: 1536px) {
    top: 0%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 204px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 95px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1449px) {
    top: -0.5%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 154px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 55px;
    }

  }

  /* Media query for tablets (landscape) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    top: 0%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 94px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 45px;
    }
  }

  /* Media query for mobile devices */
  @media only screen and (max-width: 767px) {
    top: 0%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 64px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 35px;
    }
  }
`


export const IMG2Container = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1530px) {
    flex-direction: column-reverse;
  }
`

export const IMG3Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1530px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: 136rem;
  }
`

export const ModalContainer = styled.div`
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .content {
      width: 80%;
    }
  }

  /* Media query for tablets (landscape) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .content {
      width: 60%;
    }
  }

  /* Media query for mobile devices */
  @media only screen and (max-width: 600px) {
    .content {
      top: 20%;
      width: 90%;
      height: auto; /* Adjust height as needed for mobile */
    }
  }
`

export const ModalContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  width: 100%;


  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-style: italic;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;
    padding-left: 0px;

    h1 {
      margin-bottom: 20px;
    }

    h5 {
      margin-top: -100px;
      margin-bottom: 15px;
    }
  }
`

export const ModalContainer3 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`

export const InnerContainer1 = styled.div`
  padding-left: 30px;
  width: 45%;


  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-style: italic;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 20px;
  }


  @media screen and (max-width: 1530px) {
    width: 100%;
    padding-left: 0px;

    h1 {
      margin-bottom: 20px;
    }

    h3 {
      font-size: 20px;
    }

    h5 {
      margin-bottom: 15px;
      margin-top: 0px;
    }
  }
`

export const InnerContainer2 = styled.div`
  h2 {
    position: fixed;
    font-size: 20px;
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;

    h2 {
      margin-left: 30px;
    }
  }
`

export const InnerContainer3 = styled.div`
  padding-left: 20px;
  width: 64%;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  h6 {
    width: 100%;
    font-size:19px;
  }

  p {
    width: 140%;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;
    padding-left: 0px;
    margin-top: 10px;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`

export const InnerContainer4 = styled.div`
  padding-left: 20px;
  width: 100%;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  p {
    width: 140%;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`

export const InnerContainer5 = styled.div`
  width: 100%;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  p {
    width: 140%;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`

export const InnerContainer6 = styled.div`
  padding-left: 30px;
  width: 45%;


  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-style: italic;
  }

  h5 {
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
  }


  @media screen and (max-width: 1530px) {
    width: 100%;

    h1 {
      margin-bottom: 20px;
    }

    h5 {
      margin-bottom: 15px;
    }
  }
`

export const InnerContainer7 = styled.div`
  padding-left: 30px;
  width: 50%;


  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-style: italic;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 20px;
  }


  @media screen and (max-width: 1530px) {
    padding-left: 0px;
    width: 100%;

    h1 {
      margin-bottom: 20px;
    }
  
    h2 {
      font-size: 20px;
    }

    h5 {
      margin-bottom: 15px;
    }
  }
`

export const InnerContainer8 = styled.div`
  h2 {
    position: fixed;
    font-size: 25px;
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;

    h2 {
      margin-left: 30px;
    }
  }
`

export const InnerContainer9 = styled.div`
  padding-left: 30px;
  width: 116%;


  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-style: italic;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 20px;
  }


  @media screen and (max-width: 1530px) {
    width: 100%;
    padding-left: 0px;

    h1 {
      margin-bottom: 20px;
    }

    h3 {
      font-size: 20px;
    }

    h5 {
      margin-bottom: 15px;
      margin-top: 0px;
    }
  }
`


export const InnerContainer10 = styled.div`
  padding-left: 20px;
  width: 58%;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  h6 {
    width: 100%;
    font-size:19px;
  }

  p {
    width: 140%;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;
    padding-left: 0px;
    margin-top: 10px;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`


export const InnerIMGContainer = styled.div`
  justify-items: center;
  margin-top: 131px;
  display: flex;
  grid-gap: 25px;
  justify-content: center;
  flex-wrap: wrap;

  img {
    display: flex;
    object-fit: cover;
  }

  @media screen and (max-width: 1530px) {
    margin-top: 10px;
  }
`

export const InnerIMG2Container = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 60px;
`

export const InnerIMG3Container = styled.div`
  justify-items: center;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  justify-content: center;
  /* flex-wrap: wrap; */

  img {
    display: flex;
    object-fit: cover;
    height: 50px;
  }

  h3 {
    font-weight: 500;
  }
`

export const InnerIMG4Container = styled.div`
  justify-items: center;
  margin-top: -1px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  grid-gap: 15px;
  justify-content: center;
  /* flex-wrap: wrap; */

  img {
    display: flex;
    object-fit: cover;
    height: 50px;
  }


  #kateSpade {
    margin-top:-27px;
    margin-left: -31px;
    height: 94px;
  }

  #WGACA {
    height: 127px;
    margin-top: -36px;
  }

  #MJ {
    height: 17px;
    margin-top: 18px;
  }

  #MF {
    height: 54px;
  }

  #Coach {
    margin-top:-52px;
    height: 90px;
  }

  #KL {
    height: 25px;
    margin-top: -20px;
  }

  #Guess {
    height: 40px;
    margin-top: -29px;
  }

  #Swarovski {
    height: 20px;
    margin-top: -20px;
  }

  #KS {
    height: 81px;
    margin-top: -25px;
  }

  #CDL {
    height: 75px;
    margin-top: -23px;
  }
`

export const InnerIMG5Container = styled.div`
  justify-items: space-between;
  margin-top: 131px;
  display: flex;
  grid-gap: 25px;
  justify-content: center;
  flex-wrap: wrap;


  #Dior {
    height: 50px;
    margin-top: 30px;
  }

  #Chanel {
    height: 200px;
    margin-top: -45px;
  }

  #Lancome {
    height: 60px;
    margin-top: 23px;
  }
`


export const InnerCenterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`


export const CarouselContainer = styled.div`
  h2 {
    position: fixed;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 10px;
    width: 100%;
    color: #536fb2;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;

    h2 {
      margin-left: 30px;
    }
  }
`

export const Carousel2Container = styled.div`
  h2 {
    position: fixed;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 10px;
    width: 100%;
    color: white;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;

    h2 {
      margin-left: 30px;
    }
  }
`

export const CaptionContainer = styled.div`
  position: absolute;

  h2 {
    color: #536fb2;
    font-size: 25px;
  }
`

export const Caption2Container = styled.div`
  position: absolute;
  right: 0;
  margin-right: 160px;

  h2 {
    font-size: 25px;
    color: white;
  }
`

export const Caption3Container = styled.div`
  position: absolute;
  right: 0;
  margin-top: -30px;
  margin-right: 280px;

  h2 {
    font-size: 20px;
    color: #536fb2;
  }
`

export const Caption4Container = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  h2 {
    font-size: 15px;
    color: #536fb2;
  }
`

export const Caption5Container = styled.div`
  position: absolute;
  right: 0;
  margin-right: 424px;

  h2 {
    font-size: 25px;
    color: white;
  }
`

export const Caption6Container = styled.div`
  position: absolute;
  margin-right: 160px;

  h2 {
    font-size: 25px;
    color: white;
  }
`

export const Caption7Container = styled.div`
  position: absolute;
  margin-right: -16px;
  margin-top: 5px;
  right: 0;

  h2 {
    font-size: 15px;
    color: white;
  }
`

export const Caption8Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 68px;
  width: 381px;
  display: flex;

  h2 {
    color: white;
    font-size: 15px;
    margin-left: -59px;
  }

  h3 {
    color: white;
    font-size: 15px;
    margin-right: 39x;
  }
`

export const Caption9Container = styled.div`
  position: absolute;
  margin-right: 76px;
  margin-top: 5px;
  right: 0;

  h2 {
    font-size: 15px;
    color: white;
  }
`

export const Caption10Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 55px;
  width: 381px;
  display: flex;

  h2 {
    color: white;
    font-size: 15px;
    margin-left: -35px;
  }

  h3 {
    color: white;
    font-size: 15px;
    margin-right: 39x;
  }
`
export const Caption11Container = styled.div`
  position: absolute;

  h2 {
    font-size: 19px;
  }
`

export const MockShopContainer = styled.div`
  width: 40%;
  padding-bottom: 50px;
  margin-right: 50px;

  h2 {
    position: fixed;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 30px;
  }
`

export const BlueBulletContainer = styled.div`
  padding-left: 20px;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  p {
    width: 140%;
  }

  h1 {
    color: #3663ae;
    margin-top: 68px;
  }

  h5 {
    color: #3663ae;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`


