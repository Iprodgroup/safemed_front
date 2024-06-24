import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsSearch } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import Link from 'next/link';
import ModalSearch from '../ModalSearch';

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
        };

        const handleTouchMove = (e) => {
            e.preventDefault();
        };

        if (isOpen) {
            document.body.classList.add('modal-open');
            document.addEventListener('wheel', handleScroll, { passive: false });
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
        } else {
            document.body.classList.remove('modal-open');
            document.removeEventListener('wheel', handleScroll);
            document.removeEventListener('touchmove', handleTouchMove);
        }

        return () => {
            document.body.classList.remove('modal-open');
            document.removeEventListener('wheel', handleScroll);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isOpen]);

    return isOpen ? ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <ModalSearch />
            </div>
        </div>,
        document.body
    ) : null;
};

const Header = ({country}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleToggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);

    const handleScrollLock = () => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isNavOpen ? 'hidden' : 'auto';
            document.body.className = isNavOpen ? 'body' : 'auto';
        }
    };

    if (typeof window !== 'undefined') {
        const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
        useEffect(() => {
            

            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;
                const shouldShowNavbar = prevScrollPos > currentScrollPos;

                if (currentScrollPos < 10) {
                    setIsFixed(false);
                } else {
                    setIsFixed(shouldShowNavbar);
                }

                setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [isNavOpen]);
    }
    return (
        <>
            <div className='shadow-md'>
                <nav className={`navbar ${isFixed ? 'fixed z-20' : ''}`}>
                    <div className='container'>
                        <div className=' w-full py-4 flex items-center justify-between px-4'>
                            <div className=''>
                                <a href={country ?  `/${country}` : "/"} className='logo '>
                                    <img className='w-[210px]' src='/logo.png' alt='' />
                                </a>
                            </div>
                            <div>
                                {/* <button
                                    onClick={openModal}
                                    className={` ${isNavOpen ? 'hidden' : '2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg hover:text-primary transition-all text-gray-700 font-thin btn-search'}`}>
                                    <BsSearch />
                                </button> */}
                                <div className='px-4'>
                                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                                </div>
                            </div>
                            <label htmlFor='menu' className='2xl:hidden xl:hidden lg:hidden'>
                                <FaBarsStaggered />
                            </label>
                            <input type='checkbox' id='menu' className='hidden' checked={isNavOpen} onChange={handleToggleNav} />
                            <div className='flex items-center gap-8 menu'>
                                <button onClick={closeNav} className='text-white 2xl:hidden xl:hidden lg:hidden absolute
                        top-[35px] right-10 text-xl'>
                                    <FaTimes />
                                </button>
                                <ul className='flex items-center gap-4 list'>
                                    <li>
                                        <Link
                                            className='2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm text-sm 
                                    hover:text-primary transition-all font-body nav__link'
                                        href={country ?  `/${country}` : "/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm text-sm 
                                    hover:text-primary transition-all font-body nav__link'
                                            href={country ? `/${country}/catalog/medical` : "/catalog/medical"} > Medical</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm text-sm 
                                    hover:text-primary transition-all font-body nav__link'
                                        href={country ? `/${country}/catalog/safety` : "/catalog/safety"}> Safety</Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            href={`/search-page`}
                                            className='2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm text-sm 
                                                    hover:text-primary transition-all font-body nav__link btn-search'>
                                            SearchPage
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link
                                            href={`/search-page`}
                                            className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg
                    hover:text-primary transition-all text-gray-700 font-thin search-btn-component'>
                                            <BsSearch />
                                        </Link>
                                    </li> */}
                                </ul>
                                <div className='flex gap-8 msg'>
                                    <div className=' 2xl:text-lg xl:text-md lg:text-md md:text-sm sm:text-sm text-sm 
                                    hover:text-primary transition-all font-body '>

                                        <a className='flex flex-col items-center gap-2 callCenter' href='tel:+971556305217'>
                                            <FaWhatsapp className='text-2xl' />
                                            +971 556305217
                                        </a>
                                    </div>
                                    <div className=' 2xl:text-lg xl:text-md lg:text-md md:text-sm sm:text-sm text-sm 
                                    hover:text-primary transition-all font-body '>

                                        <a className='flex flex-col items-center gap-2 callCenter' href='mailto: inquiry@gulfinstruments.com'>
                                            <MdOutlineEmail className='text-2xl' />
                                            inquiry@gulfinstruments.com
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </nav>
                {handleScrollLock()}
            </div >
        </>
    );
};

export default Header;
