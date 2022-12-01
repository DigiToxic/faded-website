import React, {useState} from 'react'
import styled from "styled-components";
import Popup from './Popup';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

function Team(props) {
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);

  return (
    <Container id='Team'>

        <Zoom>
        <NoblesName>
          <span>Nobles Team</span>
        </NoblesName>
        </Zoom>

        <NobleText>
          <p>A guided tour of the nobles of the castle!</p>
        </NobleText>

        <TeamButton>
        <Fade right>
        <FounderButton onClick={() => setButtonPopup1(true)}>
          <span>Founder</span>
        </FounderButton>
        </Fade>
        <Fade right>
        <CoFounderButton onClick={() => setButtonPopup2(true)}>
          <span>Co-Founder</span>
        </CoFounderButton>
        </Fade>
        <Fade right>
        <DevButton onClick={() => setButtonPopup3(true)}>
          <span>Developer<br/> + <br/>moderator</span>
        </DevButton>
        </Fade>

        <Rotate top right>
        <ArtistButton onClick={() => setButtonPopup4(true)}>
          <span>Artist</span>
        </ArtistButton>
        </Rotate>
        </TeamButton>
        

      <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <Header>
           <p>{props.titleWolf}</p>
        </Header>
        <PopupText>
          <Content>
            <img src={props.pfpWolf} />
          <Handle>
            <p>{props.NameWolf}</p>
            <a href={props.TwitterWolf}><img src="/images/twitter.png" /></a>
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
            <img src={props.pfpDom} />
          <HandleDom>
            <p>{props.NameDom}</p>
            <a href={props.TwitterDom}><img src="/images/twitter.png" /></a>
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


        <HeaderIssues>
           <p>{props.titleIssues}</p>
        </HeaderIssues>
        <PopupTextIssues>
          <ContentIssues>
            <img src={props.pfpIssues} />
          <HandleIssues>
            <p>{props.NameIssues}</p>
            <a href={props.TwitterIssues}><img src="/images/twitter.png" /></a>
          </HandleIssues>
          </ContentIssues>
          <TextIssues>
            {props.Description1Issues}<br/>
            <br/>
            {props.Description2Issues}<br/>
            <br/>
            {props.Description3Issues}
          </TextIssues>
        </PopupTextIssues>
      </Popup>


      <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
        <HeaderDigi>
           <p>{props.titleDigi}</p>
        </HeaderDigi>
        <PopupTextDigi>
          <ContentDigi>
            <img src={props.pfpDigi} />
          <HandleDigi>
            <p>{props.NameDigi}</p>
            <a href={props.TwitterDigi}><img src="/images/twitter.png" /></a>
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
            <img src={props.pfpAlpha} />
          <HandleAlpha>
            <p>{props.NameAlpha}</p>
            <a href={props.TwitterAlpha}><img src="/images/twitter.png" /></a>
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
            <img src={props.pfpLinh} />
          <HandleLinh>
            <p>{props.NameLinh}</p>
            <a href={props.TwitterLinh}><img src="/images/twitter.png" /></a>
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
            <img src={props.pfpFunky} />
          <HandleFunky>
            <p>{props.NameFunky}</p>
            <a href={props.TwitterFunky}><img src="/images/twitter.png" /></a>
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
            <img src={props.pfpAreum} />
          <HandleAreum>
            <p>{props.NameAreum}</p>
            <a href={props.TwitterAreum}><img src="/images/twitter.png" /></a>
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
  padding-bottom: 150px;
`

const NoblesName = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
    justify-content: center;
    border: 5px solid black;
    padding: 6px;
    border-radius: 15px;
  }
`

const NobleText = styled.div`
  font-style: italic;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  margin-top: 50px;

  p {
    margin-bottom: 0px;
  }
`

const TeamButton = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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

  &:hover {
    background-image: url("https://static.wixstatic.com/media/a67ef4_5d731120440047ea8331fa32d801a06b~mv2.png");
    background-size: 326px;

    color: rgba(255, 255, 255, 0);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
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

  &:hover {
    background-image: url("https://static.wixstatic.com/media/a67ef4_c1a052d454434597b57805f756d4a713~mv2.png");
    background-size: 326px;

    color: rgba(255, 255, 255, 0);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
  }
`

const DevButton = styled.div`
  background-color: red;
  border: none;
  font-family: Pacifico;
  color: white;
  font-size: 46px;
  padding: 40px 60px;
  border-radius: 200px;
  cursor: pointer;
  align-items: center;
  text-align: center;

  transition: 0.5s ease-in-out;

  &:hover {
    background-image: url("https://static.wixstatic.com/media/a67ef4_a0ef605341cc4c5b865beb01dc356539~mv2.png");
    background-size: 326px;

    color: rgba(255, 255, 255, 0);
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
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
  padding: 120px 100px;
  border-radius: 200px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

    &:hover {
      background-image: url("https://static.wixstatic.com/media/a67ef4_46687043717b4947ba285e5372bb6933~mv2.png");
      background-size: 326px;

      color: rgba(255, 255, 255, 0);
      transition-timing-function: ease-in;
      transition-duration: 0.3s;
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

`

/* Dominic */

const HeaderDom = styled(Header)`
  background-color: rgb(59, 112, 204);
`

const PopupTextDom = styled(PopupText)`
  background-color: rgb(206, 210, 217);
  margin-bottom: 20px;
`

const ContentDom = styled(Content)`
`

const TextDom = styled(Text)`
  flex: 1;
  margin-right: 30px;
  font-size: 19px;
  line-height: 21px;
  color: black;
`

const HandleDom = styled(Handle)`
  margin-left: 20px;

  p {
    color: black;
  }
`

/* Issues */

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
`

const HandleIssues = styled(Handle)`
  margin-left: 30px;
`

const PopupTextIssues = styled(PopupText)`
  background-color: rgb(0, 0, 0);
`

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
`

/* Funky */

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
`