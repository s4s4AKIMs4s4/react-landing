import React,{FC} from 'react'
import { FaFacebook, FaInstagram, FaReddit } from 'react-icons/fa'
import {FooterContainer,WebsiteRights,SocialMediaWrapper,SocialLogo,SocialIcons,SocialIconLink,SociaMedia,FooterLink,FooterLinkTitle,FooterLinksWrapper,FooterLinkItems,FooterLinksContainer,FooterWrap} from './footerElements' 
import { animateScroll as scroll } from 'react-scroll'

const Footer: FC = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (


        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        {
                            new Array(4).fill(null).map((val) =>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to = '/signin'> How it works </FooterLink>
                                <FooterLink to = '/signin'> Testimonials </FooterLink>
                                <FooterLink to = '/signin'> Careers </FooterLink>
                                <FooterLink to = '/signin'> Investors </FooterLink>
                                <FooterLink to = '/signin'> Term of Service </FooterLink>
                            </FooterLinkItems>
                            
                            )
                        }
                        
                        {/* <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = '/signin'> How it works </FooterLink>
                            <FooterLink to = '/signin'> Testimonials </FooterLink>
                            <FooterLink to = '/signin'> Careers </FooterLink>
                            <FooterLink to = '/signin'> Investors </FooterLink>
                            <FooterLink to = '/signin'> Term of Service </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = '/signin'> How it works </FooterLink>
                            <FooterLink to = '/signin'> Testimonials </FooterLink>
                            <FooterLink to = '/signin'> Careers </FooterLink>
                            <FooterLink to = '/signin'> Investors </FooterLink>
                            <FooterLink to = '/signin'> Term of Service </FooterLink>
                        </FooterLinkItems>
                    

                    
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = '/signin'> How it works </FooterLink>
                            <FooterLink to = '/signin'> Testimonials </FooterLink>
                            <FooterLink to = '/signin'> Careers </FooterLink>
                            <FooterLink to = '/signin'> Investors </FooterLink>
                            <FooterLink to = '/signin'> Term of Service </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = '/signin'> How it works </FooterLink>
                            <FooterLink to = '/signin'> Testimonials </FooterLink>
                            <FooterLink to = '/signin'> Careers </FooterLink>
                            <FooterLink to = '/signin'> Investors </FooterLink>
                            <FooterLink to = '/signin'> Term of Service </FooterLink>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>

                    <SociaMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to ='/' onClick = {toggleHome} >
                                Uber
                            </SocialLogo>

                            <WebsiteRights> 
                                uber @ {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>

                            <SocialIcons>

                                <SocialIconLink href = "/" target = "_blank" aria-label ='Facebook'>
                                    <FaFacebook/>                                    
                                </SocialIconLink>

                                <SocialIconLink href = "/" target = "_blank" aria-label ='Instagram'>
                                    <FaInstagram/>                                    
                                </SocialIconLink>

                                <SocialIconLink href = "/" target = "_blank" aria-label ='Reddit'>
                                    <FaReddit/>                                   
                                </SocialIconLink>

                            </SocialIcons>
                        </SocialMediaWrapper>
                    </SociaMedia>

                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
