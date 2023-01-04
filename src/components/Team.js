import React, {useState} from 'react'
import styled from "styled-components";
import Popup from './Popup';
import { Fade, Zoom } from "react-awesome-reveal";

function Team(props) {
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);

  return (
    <Container id='Team'>

        <Zoom triggerOnce="true">
        <NoblesName>
          <span>Nobles Team</span>
        </NoblesName>
        </Zoom>

        <NobleText>
          <p>A guided tour of the nobles of the castle!</p>
        </NobleText>

        <TeamButton>
        <Fade triggerOnce="true">
        <FounderButton onClick={() => setButtonPopup1(true)}>
          <span>Founder</span>
        </FounderButton>
        </Fade>

        <Fade triggerOnce="true">
        <CoFounderButton onClick={() => setButtonPopup2(true)}>
          <span>Co-Founder</span>
        </CoFounderButton>
        </Fade>

        <Fade triggerOnce="true">
        <DevButton onClick={() => setButtonPopup3(true)}>
          <span>Developer</span>
        </DevButton>
        </Fade>

        <Fade triggerOnce="true">
        <ArtistButton onClick={() => setButtonPopup4(true)}>
          <span>Artist</span>
        </ArtistButton>
        </Fade>
        </TeamButton>
        

      <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <Header>
           <p>{props.titleWolf}</p>
        </Header>
        <PopupText>
          <Content>
            <img src={props.pfpWolf} alt="" />
          <Handle>
            <p>{props.NameWolf}</p>
            <a href={props.TwitterWolf} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </Handle>
          </Content>
          <Text>
            {props.Description1Wolf}<br/>
            <br/>
            {props.Description2Wolf}<br/>
            <br/>
            {props.Description3Wolf}
          </Text>
        </PopupText>
      </Popup>


      <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
        <HeaderDom>
           <p>{props.titleDom}</p>
        </HeaderDom>
        <PopupTextDom>
          <ContentDom>
            <img src={props.pfpDom} alt="" />
          <HandleDom>
            <p>{props.NameDom}</p>
            <a href={props.TwitterDom} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </HandleDom>
          </ContentDom>
          <TextDom>
            {props.Description1Dom}<br/>
            <br/>
            {props.Description2Dom}<br/>
            <br/>
            {props.Description3Dom}
          </TextDom>
        </PopupTextDom>
      </Popup>


      <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
        <HeaderDigi>
           <p>{props.titleDigi}</p>
        </HeaderDigi>
        <PopupTextDigi>
          <ContentDigi>
            <img src={props.pfpDigi} alt="" />
          <HandleDigi>
            <p>{props.NameDigi}</p>
            <a href={props.TwitterDigi} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </HandleDigi>
          </ContentDigi>
          <TextDigi>
          <br/>
            {props.Description1Digi}<br/>
            <br/>
            {props.Description2Digi}
          </TextDigi>
        </PopupTextDigi>

        <HeaderAlpha>
           <p>{props.titleAlpha}</p>
        </HeaderAlpha>
        <PopupTextAlpha>
          <ContentAlpha>
            <img src={props.pfpAlpha} alt="" />
          <HandleAlpha>
            <p>{props.NameAlpha}</p>
            <a href={props.TwitterAlpha} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </HandleAlpha>
          </ContentAlpha>
          <TextAlpha>
          <br/>
            {props.Description1Alpha}<br/>
            <br/>
            {props.Description2Alpha}<br/>
            <br/>
            {props.Description3Alpha}<br/>
            <br/>
            {props.Description4Alpha}
          </TextAlpha>
        </PopupTextAlpha>
      </Popup>

        <Splash3>
          <img src="/images/splash/splash 3.png" alt="" />
        </Splash3>

      <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
        <HeaderLinh>
           <p>{props.titleLinh}</p>
        </HeaderLinh>
        <PopupTextLinh>
          <ContentLinh>
            <img src={props.pfpLinh} alt="" />
          <HandleLinh>
            <p>{props.NameLinh}</p>
            <a href={props.TwitterLinh} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </HandleLinh>
          </ContentLinh>
          <TextLinh>
          <br/>
            {props.Description1Linh}<br/>
            <br/>
            {props.Description2Linh}<br/>
            <br/>
            {props.Description3Linh}
          </TextLinh>
        </PopupTextLinh>

        <HeaderFunky>
           <p>{props.titleFunky}</p>
        </HeaderFunky>
        <PopupTextFunky>
          <ContentFunky>
            <img src={props.pfpFunky} alt="" />
          <HandleFunky>
            <p>{props.NameFunky}</p>
            <a href={props.TwitterFunky} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </HandleFunky>
          </ContentFunky>
          <TextFunky>
          <br/>
            {props.Description1Funky}<br/>
            <br/>
            {props.Description2Funky}<br/>
            <br/>
            {props.Description3Funky}
          </TextFunky>
        </PopupTextFunky>

        <HeaderAreum>
           <p>{props.titleAreum}</p>
        </HeaderAreum>
        <PopupTextAreum>
          <ContentAreum>
            <img src={props.pfpAreum} alt="" />
          <HandleAreum>
            <p>{props.NameAreum}</p>
            <a href={props.TwitterAreum} rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="" /></a>
          </HandleAreum>
          </ContentAreum>
          <TextAreum>
          <br/>
            {props.DescriptionAreum}
          </TextAreum>
 
        </PopupTextAreum>
      </Popup>

    </Container>
  )
}

export default Team

const Container = styled.div`
  margin-top: 5px;
  background-color: rgb(234, 189, 252);
  padding-bottom: 100px;

  @media (max-width: 1040px) {
    padding-bottom: 50px;
  }
`

const NoblesName = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-family: Morris Roman;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    text-align: center;
    justify-content: center;
    border: 5px solid black;
    padding: 6px;
    border-radius: 15px;
    color: green;

    @media (max-width: 1040px) {
      margin-top: 40px;
    }
  }
`

const NobleText = styled.div`
  font-style: italic;
  text-align: center;
  margin-top: 50px;

  p {
    margin-bottom: 0px;
    font-family: BlackChancery;
    font-size: 30px;
  }
`

const TeamButton = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1040px) {
    margin-top: 40px;
  }

  @media(max-width: 730px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 10%;
    margin-left: 10%;
  }

  @media(max-width: 480px) {
    margin-right: 5%;
    margin-left: 5%;
  }

  @media(max-width: 480px) {
    margin-right: 2%;
    margin-left: 2%;
  }

  @media(max-width: 401px) {
    margin-right: 5px;
    margin-left: 3px;
  }
`

const FounderButton = styled.div`
  background-color: rgb(1, 173, 1, 0.4);
  border: none;
  margin-left: 10px;
  padding: 110px 55px;
  border-radius: 200px;
  font-family: Pacifico;
  color: white;
  font-size: 60px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  span {
    display: flex;
    justify-content: center;
  }

  &:hover {
    background-image: url("https://static.wixstatic.com/media/a67ef4_5d731120440047ea8331fa32d801a06b~mv2.png");
    background-size: 326px;
    background-position: center;
    background-repeat: no-repeat;

    color: rgba(255, 255, 255, 0);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
  }
  
  @media(max-width: 1310px) {
    padding: 90px 35px;
    margin-left: 5px;

    &:hover {
      background-size: 280px;
    }
  }

  @media(max-width: 1140px) {
    padding: 80px 25px;

    &:hover {
      background-size: 260px;
    }
  }

  @media(max-width: 1100px) {
    padding: 70px 15px;

    &:hover {
      background-size: 240px;
    }
  }

  @media(max-width: 980px) {
    padding: 60px 5px;

    &:hover {
      background-size: 220px;
    }
  }

  @media(max-width: 900px) {
    padding: 50px 10px;
    
    span {
      font-size: 46px;
    }

    &:hover {
      background-size: 180px;
    }
  }

  @media(max-width: 730px) {
    margin-bottom: 10px;
    margin-right: 5px;

    &:hover {
      background-size: 200px;
    }
  }
`

const CoFounderButton = styled.div`
  background-color: rgb(109, 109, 245);
  border: none;
  font-family: Pacifico;
  color: white;
  font-size: 46px;
  padding: 120px 44px;
  border-radius: 200px;
  cursor: pointer;
  transition: padding 0.15s;
  transition: 0.5s ease-in-out;

  span {
    display: flex;
    justify-content: center;
  }

  &:hover {
    background-image: url("https://static.wixstatic.com/media/a67ef4_c1a052d454434597b57805f756d4a713~mv2.png");
    background-size: 326px;
    background-position: center;
    background-repeat: no-repeat;

    color: rgba(255, 255, 255, 0);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
  }

  @media(max-width: 1310px) {
    padding: 100px 24px;

    &:hover {
      background-size: 280px;
    }
  }

  @media(max-width: 1140px) {
    padding: 90px 14px;

    &:hover {
      background-size: 260px;
    }
  }

  @media(max-width: 1100px) {
    padding: 80px 4px;

    &:hover {
      background-size: 240px;
    }
  }

  @media(max-width: 980px) {
    padding: 74.1px 4px;

    span {
      font-size: 42.1px;
    }

    &:hover {
      background-size: 220px;
    }
  }

  @media(max-width: 900px) {
    padding: 60px 4px;
    
    span {
      font-size: 34.3px;
    }

    &:hover {
      background-size: 180px;
    }
  }

  @media(max-width: 730px) {
    margin-bottom: 10px;
    margin-left: 5px;

    &:hover {
      background-size: 200px;
    }
  }
`

const DevButton = styled.div`
  background-color: red;
  border: none;
  font-family: Pacifico;
  color: white;
  font-size: 46px;
  padding: 120px 63px;
  border-radius: 200px;
  cursor: pointer;
  align-items: center;
  text-align: center;
  transition: 0.5s ease-in-out;

  span {
    display: flex;
    justify-content: center;
  }

  &:hover {
    background-image: url("https://static.wixstatic.com/media/a67ef4_a0ef605341cc4c5b865beb01dc356539~mv2.png");
    background-size: 326px;
    background-position: center;
    background-repeat: no-repeat;

    color: rgba(255, 255, 255, 0);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
  }

  @media(max-width: 1310px) {
    padding: 100px 43px;

    &:hover {
      background-size: 280px;
    }
  }

  @media(max-width: 1140px) {
    padding: 90px 33px;

    span {
      display: flex;
      justify-content: center;
    }

    &:hover {
      background-size: 260px;
    }
  }

  @media(max-width: 1100px) {
    padding: 80px 23px;


    &:hover {
      background-size: 240px;
    }
  }

  @media(max-width: 980px) {
    padding: 76px 23.6px;

    span {
      font-size: 41px;
    }

    &:hover {
      background-size: 220px;
    }
  }

  @media(max-width: 900px) {
    padding: 62px 23px;
    
    span {
      font-size: 32px;
    }

    &:hover {
      background-size: 180px;
    }
  }

  @media(max-width: 730px) {
    padding: 55px 12px;
    margin-right: 5px;

    &:hover {
      background-size: 200px;
    }

    span {
      font-size: 40px;
    }
  }
`

const ArtistButton = styled.div`
  background-color: rgb(202, 202, 109);
  margin-right: 10px;
  padding: 120px 100px;
  border: none;
  font-family: Pacifico;
  color: white;
  font-size: 46px;
  border-radius: 200px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  span {
    display: flex;
    justify-content: center;
  }

    &:hover {
      background-image: url("https://static.wixstatic.com/media/a67ef4_46687043717b4947ba285e5372bb6933~mv2.png");
      background-size: 326px;
      background-position: center;
      background-repeat: no-repeat;

      color: rgba(255, 255, 255, 0);
      transition-timing-function: ease-in;
      transition-duration: 0.3s;
    }
  }

  @media(max-width: 1310px) {
    padding: 100px 80px;
    margin-right: 5px;

    &:hover {
      background-size: 280px;
    }
  }

  @media(max-width: 1140px) {
    padding: 90px 70px;

    &:hover {
      background-size: 260px;
    }
  }

  @media(max-width: 1100px) {
    padding: 80px 60px;

    &:hover {
      background-size: 240px;
    }
  }

  @media(max-width: 980px) {
    padding: 70px 50px;

    &:hover {
      background-size: 220px;
    }
  }

  @media(max-width: 900px) {
    padding: 55px 33px;

    span {
      font-size: 40px;
    }

    &:hover {
      background-size: 180px;
    }
  }

  @media(max-width: 730px) {
    margin-left: 5px;

    &:hover {
      background-size: 200px;
    }
  }
`

/* Wolfgang 78 */

const Header = styled.div`
  Display: block;
  background-color: #5AEFA5;
  text-align: center;
  padding: 10px 0px;
  border: 5px solid black;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  p {
    font-family: Arial;
    font-weight: bold;
    font-size: 22px;
    color: black
  }
`

const PopupText = styled.div`
  display: flex;
  background-color: rgb(78, 80, 181);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;} 
  }

  @media(max-width: 1180px) {
    display: flex;
    flex-direction: column;
    align-items: center
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  img {
    margin-left: 20px;
    margin-top: 20px;
    width: 430px;
  }
`

const Handle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 20px;

  img {
    display: flex;
    margin: 0;
    width: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 0px
    margin-top: 0px;
    margin-left: 20px;
    margin-right: 10px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 25px;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  } 
`
const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
  Font-family: Titillium Web;
  flex: 1;
  margin-right: 30px;
  font-size: 19px;
  line-height: 25px;
  color: white;

  @media(max-width: 1285px) {
    margin-top: -10px;
    font-size: 18px;
  }

  @media(max-width: 1250px) {
    margin-top: -10px;
    font-size: 16px;
  }

  @media(max-width: 1180px) {
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 20px;
  }

`

/* Dominic */

const HeaderDom = styled(Header)`
  background-color: rgb(59, 112, 204);
`

const PopupTextDom = styled(PopupText)`
  background-color: rgb(206, 210, 217);
`

const ContentDom = styled(Content)`
`

const TextDom = styled(Text)`
  flex: 1;
  margin-right: 30px;
  font-size: 19px;
  line-height: 21px;
  color: black;

    @media(max-width: 1250px) {
      margin-bottom: 10px;
  }

  @media(max-width: 1280px) {
    margin-top: 10px;
    font-size: 18px;
  }
`

const HandleDom = styled(Handle)`
  margin-left: 20px;

  p {
    color: black;
  }
`

/* Issues 

const HeaderIssues = styled(Header)`
  background-color: rgb(59, 112, 204);
`

const ContentIssues = styled(Content)`
`

const TextIssues = styled(Text)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
  flex: 1;
  margin-right: 30px;
  line-height: 21px;

  @media(max-width: 1180px) {
    margin-top: 20px;
  }
`

const HandleIssues = styled(Handle)`
  margin-left: 30px;
`

const PopupTextIssues = styled(PopupText)`
  background-color: rgb(0, 0, 0);
` */

/* Digi */

const HeaderDigi = styled(Header)`
  background-color: rgb(232, 9, 9);
`

const PopupTextDigi = styled(PopupText)`
  background-color: rgb(53, 130, 219);
  margin-bottom: 20px;
`

const ContentDigi = styled(Content)`
`

const HandleDigi = styled(Handle)`
  margin-left: 30px;
`

const TextDigi = styled(Text)`
  margin-top: -20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-right: 30px;
  line-height: 23px;
  font-size: 21px;

  @media(max-width: 1180px) {
    margin-top: 0px;
  }
`

/* Alpha */

const HeaderAlpha = styled(Header)`
  background-color: rgb(232, 9, 9);
`

const PopupTextAlpha = styled(PopupText)`
background-color: rgb(227, 77, 162);
`

const ContentAlpha = styled(Content)`
  grid-template-columns: 470px 1fr;

  div {
    color: white;
    font-size: 18px;
}
`

const HandleAlpha = styled(Handle)`
  margin-left: 25px;
`

const TextAlpha = styled(Text)`
  margin-top: -33px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-right: 30px;
  line-height: 20px;

  @media(max-width: 1301px) {
    margin-top: -18px;
    font-size: 18px;
  }

  @media(max-width: 1273px) {
    margin-bottom: 10px;
}

  @media(max-width: 1180px) {
    margin-top: 0px;
  }
`

/* Therealinh */

const HeaderLinh = styled(Header)`
  background-color: rgb(249, 252, 18);
`

const PopupTextLinh = styled(PopupText)`
background-color: rgb(49, 158, 40);
margin-bottom: 20px;
`

const ContentLinh = styled(Content)`
`

const HandleLinh = styled(Handle)`
  margin-left: 15px;
`

const TextLinh = styled(Text)`
  margin-top: -50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-right: 30px;
  line-height: 20px;

  @media(max-width: 1180px) {
    margin-top: 0px;
  }
`

/* Funky */

const HeaderFunky = styled(Header)`
  background-color: rgb(249, 252, 18);
`

const PopupTextFunky = styled(PopupText)`
  background-color: rgb(206, 210, 217);
  margin-bottom: 20px;
`

const ContentFunky = styled(Content)`

`
const HandleFunky = styled(Handle)`
  margin-left: 25px;
  p {
    color: black;
  }

  @media(max-width: 418px) {
    margin-left: 10px;
  }
`

const TextFunky = styled(Text)`
  margin-top: -50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-right: 30px;
  line-height: 20px;
  color: black;

  @media(max-width: 1180px) {
    margin-top: 0px;
    font-size: 18px;
  }

`

/* Areum */

const HeaderAreum = styled(Header)`
  background-color: rgb(249, 252, 18);
`

const PopupTextAreum = styled(PopupText)`
  background-color: rgb(12, 70, 150);
`

const ContentAreum = styled(Content)`
`

const TextAreum = styled(Text)`
  margin-top: -50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  font-size: 25px;
  margin-right: 30px;
  line-height: 30px;

  @media(max-width: 1180px) {
    margin-top: 0px;
  }
`

const HandleAreum = styled(Handle)`
  margin-left: 12px;

`

const Splash3 = styled.div`
  position: absolute;
  right: 230px;
  top: 2250px;


  img {
      width: 300px;
      opacity: 0.8;
    }

    
  @media(max-width: 1049px) {
    z-index: 1;
  }

  @media(max-width: 458px) {
    top: 2350px;
  }
`