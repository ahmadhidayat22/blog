import { menuNav } from '../constant';
import React, { useState, useEffect } from 'react';
import Switcher from './Switcher';

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [activeIndex, setActiveIndex] = useState(null);
    useEffect(() => {
		const currentPath = window.location.pathname;
		const index = menuNav.findIndex((item) => item.href === currentPath);
		setActiveIndex(index);
	}, []);

    const handleNavClick = (item, index) => {
		setActiveIndex(index);
	};
	const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
	const [navbarVisible, setNavbarVisible] = useState(true);

    const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (prevScrollpos > scrollPosition) {
			setNavbarVisible(true);
		} else {
			setNavbarVisible(false);
		}

		setPrevScrollpos(scrollPosition);
	};
    
	window.addEventListener("scroll", handleScroll);

  return (
    <div className='w-full py-2 text-black dark:text-white'>
        <div className="flex justify-between mx-5">
            <div>
                <h1 className='font-bold text-2xl '><a href="/">Title</a></h1>
            </div>
            <div className="">
                {menuNav.map((item, i) => (
                    <a
                    key={i}
                    href={item.href}
                    className={classNames(
                        i === activeIndex
                            ? " text-[#ebb913] "
                            : " hover:text-gray-300",
                        " px-3  xl:text-xl  font-semibold "
                    )}
                    aria-current={i === activeIndex ? "page" : undefined}
                    onClick={() => handleNavClick(item, i)}
                    >
                        {item.title}
                       
                        
                    </a>
                ))

                }
            </div>
            <div className='flex gap-4 font-semibold'>
                <a href="/login" className=''>Login</a>
                <a href="/register">Register</a>
                <Switcher />
            </div>
           
        </div>
    </div>
  )
}

export default Navbar