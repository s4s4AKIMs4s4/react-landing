import {FC, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink} from './NavBarElements'
import {INavbar, INavItems} from './types'
import { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

const NavBar: FC<INavbar> = ({toogle}) => {
    const [scrollNav, setScrollNav] = useState<boolean>(false)
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    const changeNav = () =>{
        (window.scrollY > 80) 
            ? setScrollNav(true)
            : setScrollNav(false)
    } 

    useEffect(() => {
        document.addEventListener('scroll', changeNav)
    }, [])



    const NavItemList: INavItems[] = [
            {to:'about', text:'About'},
            {to:'discover', text:'Discover'},
            {to:'servises', text:'Servises'},
            {to:'signup', text:'Sign up'}
    ]
        
    
    return (
       <Nav scrollNav={scrollNav} >
           <NavbarContainer>
               <NavLogo to='/' onClick = {toggleHome}>Uber</NavLogo>
               <MobileIcon onClick = {toogle} >
                   <FaBars />
               </MobileIcon>
               <NavMenu>

                {
                    NavItemList.map((val)=>
                        <NavItem>
                            <NavLinks to={val.to} smooth = {true} duration = {500} spy = {true} offset = {-80} activeClass ='active'> {val.text} </NavLinks>
                        </NavItem>
                    )
                }

               </NavMenu>

               <NavBtn>
                    <NavBtnLink to ='/signin' > Sign in </NavBtnLink>
               </NavBtn>
           </NavbarContainer>
       </Nav>
    )
}

export default NavBar
