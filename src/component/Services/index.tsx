import React,{FC} from 'react'
import {ServicesWrapper,ServiceCard,ServicesP,ServicesH1,ServicesContainer,ServiceIcon,ServiceH2} from './ServisesElements'
import Icon1  from '../../images/1.svg'
import Icon2  from '../../images/metrics.svg'
import Icon3  from '../../images/drawer.svg'

const ServisesElements:FC = () => {
    return (
        <ServicesContainer id ='servises' >
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServiceCard>
                    <ServiceIcon src = {Icon1}/>
                    <ServiceH2> Reduce expensive</ServiceH2>
                    <ServicesP>
                        We helo reduce ypur fess and increase your overall revenenue
                    </ServicesP>
                </ServiceCard>

                <ServiceCard>
                    <ServiceIcon src = {Icon2}/>
                    <ServiceH2> Reduce expensive</ServiceH2>
                    <ServicesP>
                        We helo reduce ypur fess and increase your overall revenenue
                    </ServicesP>
                </ServiceCard>

                <ServiceCard>
                    <ServiceIcon src = {Icon3}/>
                    <ServiceH2> Reduce expensive</ServiceH2>
                    <ServicesP>
                        We helo reduce ypur fess and increase your overall revenenue
                    </ServicesP>
                </ServiceCard>

                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default  ServisesElements