import React, { Fragment, useState } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import Artists from '../../components/artists';
import SectionWrapper from '../../components/common/section_wrapper'
        
const ArtistScreen = () => {
  return(
    <SectionWrapper>
      <Artists/>
      <NavbarFooter/>
    </SectionWrapper>
  );
}

export default ArtistScreen;