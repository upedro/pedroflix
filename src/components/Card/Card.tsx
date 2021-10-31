import React from "react";
import styled from "styled-components";
import { Rate } from 'antd';
import 'antd/dist/antd.css';

export function Card (props:any){
    return(
        <CardContainer>
        <CardBody>
            <Image src={props.imagem}></Image>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.countRate} - {props.countVotes}</CardText>
            <Rate allowHalf  disabled defaultValue={0} value={Number(props.rate)} />
        </CardBody>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    min-width: 220px;
    min-height: 180px;
    max-width: 240px;
    max-height: 400px;
    width: 185px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    margin: 8px; 
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
    box-shadow: 0px 0px 30px -25px;
    cursor: pointer;
    :hover {
        transform: translateY(-5px)
        scale(1.005) translateZ(0);
        box-shadow: 0 24px 36px rgba(0,0,0,0.11),
            0 24px 46px var(--box-shadow-color);
        }
    }
    
    @media (max-width: 500px)
    {
      padding: .3rem;
      width: 100%;
      min-width: 90%;
      min-height: 180px;
      max-width: 240px;
      max-height: 450px;
      justify-content: center;
    }
    
`
const Image = styled.img`
    width: 100%;
    max-width: 185px;
    object-fit:cover;
    opacity: 0.8;
    border-radius: 10px 10px 0 0;
    

    @media (max-width: 500px)
    {   padding: .2rem;
        max-width: 200px;
        margin:auto;
        object-position: center center;
    }

`
const CardBody = styled.div`
    width: 100%;
    text-align:center;
    display: flex;
    flex-direction: column;
    padding: 1rem;


`
const CardTitle = styled.h4`
    flex-direction: column;
    display: flex;
    justify-content: center;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0.1rem;
    
`
const CardText = styled.p`
    justify-content: center;
    overflow-y: scroll;
    overflow: hidden; 
    font-size: 10px;
    padding:0;
    text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;

`

