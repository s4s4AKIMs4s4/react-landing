import { useState } from 'react'
//@ts-ignore
import Video from '../../videos/video.mp4'

import { Button } from '../ButtonElement'
import {HeroBg,HeroContainer,VideoBg,HeroP,ArrowForward,HeroH1,HeroContent,HeroBtnWrapper,ArrowRight} from './HeroElemetns'





export const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg 
                    autoPlay 
                    loop
                    muted 
                    //@ts-ignore
                    type ={'video/mp4'} 
                    src = {Video}             
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Baanking Made Easy</HeroH1>
                <HeroP> Sign up for a new zccount today ande recive $250 in credits towards toyr next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter = {onHover}
                        onMouseLeave = {onHover}             
                    >
                        
                        Get started { hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection



