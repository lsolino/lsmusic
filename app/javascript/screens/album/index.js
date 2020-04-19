import React, { Fragment, useState } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import Albums from '../../components/albums';
import SectionWrapper from '../../components/common/section_wrapper'
        
const AlbumScreen = () => {
  return(
    <SectionWrapper>
      <Albums/>
      <NavbarFooter/>
    </SectionWrapper>
  );
}

export default AlbumScreen;