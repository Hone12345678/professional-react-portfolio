import React from 'react';


const categories = [

    {
      name: "About",
      id: "about",
      description: "about me section"
    },
    {
      name: "Portfolio", 
      id: "portfolio",
      description: "portfolio of my dev work",
    },

    { 
      name: "Contact",
      id: "contact",
      description: "my contact information" 
    },

    { 
      name: "Resume",
      id: "resume", 
      description: "my personal resume" 
    },

  ];


function Nav(props) {

const categorySelected =  (e)=> {
    props.setComponantNav(e.target.id)
}


  return (
    <header className="flex-row px-1">
  <h2>
      <span role="img" aria-label="camera"> </span> Owen Haugen GIS Analyst and Full Stack Developer
  </h2>
  <nav>
    <ul className=" navTabs flex-row">
      {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
    <span id = {category.id} onClick={categorySelected} >
      {category.name}
    </span>
  </li>
))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;