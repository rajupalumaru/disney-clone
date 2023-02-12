import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img alt='' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImgTitle>
        <img alt='' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img alt='' src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img alt='' src='/images/play-icon-white.png' />
          <span>Trailer</span>

        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img alt='' src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 • 7m • Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height:calc(100vh-70px);
  padding:0 calc(3.5vw+5px);

`
const Background = styled.div`

 position:fixed; 
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:-1;
  opacity:0.8;
    
 img{
    width:100%;
    height:100%;
    object-fit:cover;
 }
`
const ImgTitle = styled.div`

 height:30vh; 
 min-height:170px;
 width:35vw;
 min-width:200px;
 margin-top:60px;
  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
  
`
const Controls = styled.div`
display:flex;
align-items:center;
margin-left:24px; 

`
const PlayButton = styled.button`
display:flex;
align-items:center;
font-size:15px;
padding:0 24px;
height:56px;
border-radius:5px;
border:none;
margin:10px 20px;
letter-spacing:1.8px;
cursor:pointer;
backgroung:rgb(249,249,249);

&:hover{
  background:rgb(198,198,198);
}

`
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
color:white;
border:1px solid rgb(249,249,249);
text-transform:uppercase;


`
const AddButton = styled.button`
margin-right:15px;
  width:44px;
  height:44px;
  display:flex;
  border-radius:50%;
  border:1px solid white;
  align-items:center;
  justify-content:center;
  background-color:rgba(0,0,0,0.6);
  cursor:pointer;
  span{
    font-size:26px;
    color:white;
  }
  &:hover{
    background-color:rgba(249,249,249,0.3);
  }

`
const GroupWatchButton = styled(AddButton)`
   background-color:rgb(0,0,0 )
}

`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    margin-left:44px;
`

const Description = styled.div`
    margin-left:44px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`
