import React, {ReactDOM} from 'react';
import '../../App.css';
import './whoweare.css';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';


const Profilecont = styled.div`
    display: flex;
    height: 50%;
    width: 80%;
    /* background-color: red; */
    flex-direction:column;
    padding: 3%;


`;

const ProfileHeader = styled.p`
    font-size: 24px;
    color: #A57760;

`;

const Role = styled.p`
    font-size: 14px;
    color: #FE4370;
    margin-left: 5%;

`;

const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;


`;

const Bodycontent = styled.div`

`;

const Bodypara = styled.p`
  color: #FFF;
`;





export default function Whoweare() {
  return (
    <div className='whowearecont'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='cont'>
 
          {/* <div className='userpic'>
            <img src="/jeremy.jpg"  id="jeremy" />
          </div>
          <div className='usercontent'>
              <Profilecont>
                <HeaderCont>
                  <ProfileHeader> MIN CHUN </ProfileHeader>
                  <Role>Designer</Role>
                  
                </HeaderCont>
                <Bodycontent>
                <Bodypara>
                Lorem ipsum something Lorem ipsum somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum somethingLorem ipsum something
                </Bodypara>
                </Bodycontent>
                

                <HeaderCont>
                  <ProfileHeader> Two Truths and A Lie: </ProfileHeader>

                  
                </HeaderCont>
                <Bodycontent>
                <Bodypara>
                    1. I have traveled to 15 countries. 
                    2. I have two cats.
                    3. I had a slow loris as a pet.
                </Bodypara>
                </Bodycontent>
                
                <HeaderCont>
                  <ProfileHeader> Favorite Drink </ProfileHeader>

                  
                </HeaderCont>


              </Profilecont>
          </div> */}
          <ImageSlider slides={SliderData}/>;
      </div>


    </div>
  );
}
