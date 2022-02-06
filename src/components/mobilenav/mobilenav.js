import React from 'react'
import { Dashboard32, Result32, Events32  } from '@carbon/icons-react';

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './style'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/table">
          <NavButton
            hasIconOnly
            renderIcon={Dashboard32}
            iconDescription="Table"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/gallery">
          <NavButton
            hasIconOnly
            renderIcon={Result32}
            iconDescription="Gallery"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/list">
          <NavButton
            hasIconOnly
            renderIcon={Events32}
            iconDescription="List"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;