import { menuNav } from '../constant';
import React, { useState, useEffect } from 'react';


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
    <div className='w-full border py-2'>
        <div className="flex justify-between mx-5">
            <div>
                <h1 className='font-bold text-2xl'><a href="/">Title</a></h1>
            </div>
            <div className="">
                {menuNav.map((item, i) => (
                    <a
                    key={i}
                    href={item.href}
                    className={classNames(
                        i === activeIndex
                            ? " text-yellow-500  "
                            : "text-white hover:text-gray-300",
                        " px-3  xl:text-2xl  font-semibold "
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
            </div>
        </div>
    </div>
  )
}

export default Navbar