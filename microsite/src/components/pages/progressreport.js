import React from 'react';
import '../../App.css';
import '../pages/progressreport.css';
import HeroSection from '../HeroSection';
import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft,} from 'react-icons/fa'

const Contprogress = styled.div`
  height:1000px;
  width: 500px;
`;


export default function Progress() {
  return (
    <div className='progresscont'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='cont'>
        <Contprogress>

        </Contprogress>

         
      </div>


    </div>
  );
}
