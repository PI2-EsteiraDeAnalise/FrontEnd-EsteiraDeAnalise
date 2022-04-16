import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

const Menu = () => {
  return (
    <>
      <BrowserView>
        <p>Web</p>
      </BrowserView>

      <MobileView>
        <p>Mobile</p>
      </MobileView>
    </>
  );
};

export default Menu;
