import React, { useState } from 'react';
 import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
  { "id": 1, "name": "Home", "path": "/" },
  { "id": 2, "name": "About", "path": "/about" },
  { "id": 3, "name": "Services", "path": "/services" },
  { "id": 4, "name": "Web Development", "path": "/services/web" }
];

const NavBar = () => {

const [open, setOpen] = useState(false);

const links =  navigationData.map(route=><Link key={route.id} route={route}></Link>);

    return (
        <nav className='flex justify-between mx-10 my-4'>
          
<span className='flex gap-10' onClick={()=>setOpen(!open)}>
    {open?
     <X className='md:hidden'></X>
     :<Menu className=' md:hidden'></Menu>}
  <ul className={`grid md:hidden text-black absolute duration-1000 ${open ? 'top-10' : '-top-40'} bg-amber-200`}>
      {links}
  </ul>

    <h3> My Navbar</h3>
</span>

    <ul className='md:flex hidden'>
        {
        links
}
    </ul>



            {/* <ul className='flex'>{ */}
{/* // navigationData.map(link=><li className='mr-10'> */}
    {/* <a href={link.path}>{link.name}</a></li>) */}
{/* } */}
            {/* </ul> */}
    {/* <ul className="flex gap-10"> */}
        {/* <li><a href="/">Home</a></li> */}
        {/* <li><a href="/about">About</a></li> */}
        {/* <li><a href="/blog">Blog</a></li> */}
    {/* </ul> */}
    <button className='btn btn-dash btn-info'>Sing In</button>
       </nav>
    );
};

export default NavBar;