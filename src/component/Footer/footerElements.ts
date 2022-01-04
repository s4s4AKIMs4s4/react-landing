import { Link } from "react-scroll";
import styled from "styled-components";



export const  FooterContainer  = styled.div`
    background-color : #101522;

`
export const FooterWrap  = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`
export const FooterLinksContainer  = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    

    @media screen and (max-width: 820px){
        padding-top: 32px;
        
    }
`
export const  FooterLinkItems  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width:200px;
    box-sizing: border-box;
    color: #fff;
    @media screen and ( max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 200px;
    }
`
export const  FooterLinkTitle = styled.h1`
    font-size:14px;
    margin-bottom: 16px;
`
export const  FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    margin-bottom: none;
    font-size:14px;

    &:hover{
        color:#01bf71;
        transition:0.3 ease-out;

    }
`

export const SociaMedia = styled.section`
    margin-top: 100px;
     max-width: 1000px;
     width: 100%;

`
export const SocialMediaWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width:  1100px;
 margin: 40px auto 0 auto;
 @media screen and (max-width:820px){
     flex-direction: column;
 }
`
export const SocialLogo = styled(Link)`
    color: #fff;
 
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;

    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

`

export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:  center;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`