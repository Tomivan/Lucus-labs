import React from 'react';
import { SideNavItems, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import './sidenav.css';
import { StyledSideNav } from './style';

const Sidenav = () => {
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" className="sidenav">
           <div className="nav-heading">
               <h1>Lucus Labs</h1>
           </div>
           <SideNavItems>
            <SideNavMenuItem href="/table">Table</SideNavMenuItem>
            <SideNavMenuItem href="/gallery">Gallery</SideNavMenuItem>
            <SideNavMenuItem href="/list">List</SideNavMenuItem>
        </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidenav;