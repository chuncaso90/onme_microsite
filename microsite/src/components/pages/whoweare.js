import React from "react";
import ReactDOM from "react-dom";
import '../../App.css';
import './whoweare.css';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';


const WhoCont = styled.div`
  display:flex;
  margin-top: 3%;
  width: 90%;
  /* flex-direction: row;
  flex-wrap: wrap; */
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
  border-radius: 15px;

 
`;






export default function Whoweare() {
  return (
    <div className='whowearecont'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='cont'>
          <WhoCont>
            <ImageSlider slides={SliderData} id="whoslider"/>
          </WhoCont>

 
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
          {/* <ImageSlider slides={SliderData}/>; */}
      </div>

    </div>
  );
}
