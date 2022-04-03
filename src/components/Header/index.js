import React from 'react';
import Nav from '../Nav';

function Header({componantNav,setComponantNav}) {
  return (
   <div>
       <Nav componantNav={componantNav} setComponantNav={setComponantNav}/>
   </div>
  );
}

export default Header;