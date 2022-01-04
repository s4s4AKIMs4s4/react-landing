import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size:  2rem;
    }
`
export const ServicesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    flex-direction: row;
    flex-wrap: wrap;


`
export const ServiceCard = styled.div`
    background: #fff;
    display: flex;
    width:300px;
    margin-left: 20px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 768px){
        
        flex-direction: column;
        max-height: 300px;
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
   

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


export const ServiceIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`



export const ServiceH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const ServicesP = styled.p`
    font-size:  1rem;
    text-align: center;
`


