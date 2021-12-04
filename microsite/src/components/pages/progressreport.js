import React from 'react';
import '../../App.css';
import '../pages/progressreport.css';
import HeroSection from '../HeroSection';
import styled from 'styled-components';
import {FaCheckCircle, FaRunning, FaRegCircle, } from 'react-icons/fa'


const Contprogress = styled.div`
  display: flex;
  height: 95%;
  overflow: scroll;
  /* justify-content: center; */
  flex-direction: column;
  padding:1%;
  text-align: center;
  width: 70%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
  border-radius: 15px;
`;

const Title = styled.h1`
  margin-top: 1.5rem;
  color: #Fff;
  font-size: 1.5rem;

`;

const ItemCont = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  height: fit-content;
  /* width: 850px; */
  height: max-content;
  align-items: center;

`;

const Allcont = styled.div`
  height: 2rem;
  width: 15rem;
`;

const IconDiv = styled.div`


`;

const DescripDiv = styled.div`

`;

const Description = styled.p`
color: #FFF;

`;

const RecordCont = styled.div`
  height: 100%;
  text-align: left;
  width: 70%;
  margin-top: 1.5rem;

`;

const RecordTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color:#A57760;
`;

const RecordDescription = styled.p`
  font-size: 1.04rem;
  color:#FFF;
`;




export default function Progress() {
  return (
    <div className='progresscont'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='cont'>
        <Contprogress>
          <div>
          <Title>Progress Report</Title>
          </div>

          <ItemCont>

            <Allcont>
            <IconDiv>
              <FaCheckCircle fontSize="2rem" color="#FE4370"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                Ideation
              </Description>
            </DescripDiv>
            </Allcont>

            <Allcont>
            <IconDiv>
              <FaCheckCircle fontSize="2rem" color="#FE4370"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                Lofi
              </Description>
            </DescripDiv>
            </Allcont>

            <Allcont>
            <IconDiv>
              <FaCheckCircle fontSize="2rem" color="#FE4370"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                User Testing
              </Description>
            </DescripDiv>
            </Allcont>


            <Allcont>
            <IconDiv>
              <FaCheckCircle fontSize="2rem" color="#FE4370"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                Hifi
              </Description>
            </DescripDiv>
            </Allcont>



            <Allcont>
            <IconDiv>
              <FaCheckCircle fontSize="2rem" color="#FE4370"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                Front End
              </Description>
            </DescripDiv>
            </Allcont>

            <Allcont>
            <IconDiv>
              <FaCheckCircle fontSize="2rem" color="#FE4370"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                Back End
              </Description>
            </DescripDiv>
            </Allcont>

            <Allcont>
            <IconDiv>
            <FaRunning 
            fontSize="2rem" 
            color="#FFF171"/>
            </IconDiv>
            <DescripDiv>
              <Description>
                Debugging
              </Description>
            </DescripDiv>
            </Allcont>

            <Allcont>
            <IconDiv>
              <FaRegCircle fontSize="2rem" color="#A57760" />
            </IconDiv>
            <DescripDiv>
              <Description>
                Complete
              </Description>
            </DescripDiv>
            </Allcont>

          

          </ItemCont>

        <ItemCont>
          <RecordCont>
            <RecordTitle>October 21, 2021- October 27, 2021</RecordTitle>
            <RecordDescription>OnMe’s med-fi prototype was created after all the tests for low-fi were completed. All resulted were compiled, the team took like suggestions and made the necessary changed to complete med-fi.
            </RecordDescription>
          </RecordCont>

        </ItemCont>

        <ItemCont>
          <RecordCont>
            <RecordTitle>October 22, 2021- October 27, 2021</RecordTitle>
            <RecordDescription>PHASE 1 PREPARATION (ASSET DESIGN)
            </RecordDescription>
          </RecordCont>

        </ItemCont>


        <ItemCont>
          <RecordCont>
            <RecordTitle>October 25, 2021- October 27, 2021</RecordTitle>
            <RecordDescription>TASK MODEL (DESIGN)
            </RecordDescription>
          </RecordCont>

        </ItemCont>


        <ItemCont>
          <RecordCont>
            <RecordTitle>October 27, 2021- November 3, 2021</RecordTitle>
            <RecordDescription>PHASE 2 COMPONENTS (ASSET DESIGN) 
            </RecordDescription>
          </RecordCont>

        </ItemCont>

        <ItemCont>
          <RecordCont>
            <RecordTitle>October 21, 2021- October 27, 2021</RecordTitle>
            <RecordDescription>OnMe’s med-fi prototype was created after all the tests for low-fi were completed. All resulted were compiled, the team took like suggestions and made the necessary changed to complete med-fi.
            </RecordDescription>
          </RecordCont>

        </ItemCont>


        <ItemCont>
          <RecordCont>
            <RecordTitle>November 8, 2021</RecordTitle>
            <RecordDescription>DEVELOPMENT FOR WEBSITE 
            </RecordDescription>
          </RecordCont>

        </ItemCont>


        <ItemCont>
          <RecordCont>
            <RecordTitle>October 21, 2021- October 27, 2021</RecordTitle>
            <RecordDescription>OnMe’s med-fi prototype was created after all the tests for low-fi were completed. All resulted were compiled, the team took like suggestions and made the necessary changed to complete med-fi.
            </RecordDescription>
          </RecordCont>

        </ItemCont>










        </Contprogress>

         
      </div>


    </div>
  );
}
