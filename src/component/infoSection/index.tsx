import React, {FC} from 'react'

import { Button } from '../ButtonElement'

import {Column1,BtnWrap,Column2,Heading,Img,ImgWrap,InfoContainer,InfoRow,InfoWrapper,Subtitle,TextWrapper,TopLine} from './infoSectionElements'

import {homeObjOneType} from './Data'


const Info: FC<homeObjOneType> = (props) => {
    return (
        <InfoContainer lightBg = {props.lightBg} id = {props.id}> 
            <InfoWrapper>
                <InfoRow imgStart = {props.imgStart}>
                    <Column1>
                        <TextWrapper>
                            
                            <TopLine>
                                {props.topLine}
                            </TopLine>
                            
                            <Heading lightText = {props.lightText}>
                                {props.headline}
                            </Heading>
                            
                            <Subtitle darkText = {props.darkText}>
                                {props.descriptions}
                            </Subtitle>

                            <BtnWrap>
                                <Button 
                                    to="home"
                                    smooth = {true}
                                    spy = {true}
                                    offset = {-80}
                                    primary = {true}
                                    
                                >
                                    {props.buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img  src = {props.img} alt = {props.alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}
export default Info