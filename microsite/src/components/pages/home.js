import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import styled from 'styled-components';


const HomeCont = styled.div`
    display:flex;
    width: 70%;
    height:70%;
    /* background-color: green; */
`;

const Heroimage = styled.div`
/* background-color: grey; */
flex:1;
`;

const Herodescript = styled.div`
display:flex;
/* background-color: hotpink; */
flex:1;

`;

const Herocont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: yellow; */
width: 100%;

`;

const Herotitle = styled.div`
font-size: 2rem;
color: #FE4370;
font-weight: 600;
`;

const Herocontent = styled.div`
margin-top:1rem;
color: #fff;


`;

const Herobuttoncont = styled.div`
margin-top: 1rem;
`;

const Button = styled.button`
width: 10rem;
height: 2.5rem;
border-radius: 3rem;
border-style: none;
background-color: #FE4370;
font-size: 1rem;
color: #fff;
`;





function Home() {
  return (
    <div className='whowearecont'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <HomeCont>
        <Heroimage></Heroimage>
        <Herodescript>
          <Herocont>
            <Herotitle>Vancouver is a lonley city</Herotitle>
            <Herocontent>Vancouver has been granted the name the “lonely city” where its own residents find it difficult to meet new people, and find that special someone
            </Herocontent>
            <Herobuttoncont>
              <Button>Explore Now</Button>
            </Herobuttoncont>
          </Herocont>
          </Herodescript>
      </HomeCont>
    </div>
    
  );
}

export default Home;
