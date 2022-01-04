import { FC, useState } from "react"
import NavBar from "../component/Navbar"
import SideBar from "../component/SideBar"
import HeroSection from "../component/HeroSections"
import Info from "../component/infoSection"
import { homeObjOne,homeObjOneType, homeObjTwo,homeObjTree } from "../component/infoSection/Data"
import ServisesElements from "../component/Services"
import Footer from "../component/Footer"

const Home:FC  = ()=>{
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen = {isOpen} toogle={toggle} />
            <NavBar toogle={toggle}/>
            <HeroSection />
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <ServisesElements/>
            <Info {...homeObjTree}/>
            <Footer/>
        </>
    )
}

export default Home