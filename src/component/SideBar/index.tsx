import {CloseIcon, Icon, SidebarContainer,SideBarLink,SideBtnWrap,SideWrapper,SidebarMenu,SidebarRouter} from './SideBarElements'
import {FC} from 'react'
import {ISideBar} from './types'

const SideBar:FC<ISideBar> = ({isOpen,toogle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toogle}>
            <Icon onClick = {toogle}>
                <CloseIcon/>
            </Icon>
            <SideWrapper>
                <SidebarMenu>
                    <SideBarLink to = "about" onClick={toogle}>
                        About
                    </SideBarLink>
                    <SideBarLink to = "discover" onClick={toogle}>
                        Discover
                    </SideBarLink>
                    <SideBarLink to = "servises" onClick={toogle}>
                        Servises
                    </SideBarLink>
                    <SideBarLink to = "signup" onClick={toogle}>
                        Sign up
                    </SideBarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to = '/signin'>Side In</SidebarRouter>
                </SideBtnWrap>
            </SideWrapper>
        </SidebarContainer>
    )
}

export default SideBar
