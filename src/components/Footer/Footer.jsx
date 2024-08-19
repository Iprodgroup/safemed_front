import React from 'react';
import Link from 'next/link';

const Footer = ({country}) => {
    return (
        <>
            <div className='bg-primary font-body py-8 px-4'>
                <div className='container'>
                    <div className='flex justify-between items-start flex-wrap gap-6 footerContent'>
                        <div className='2xl:max-w-[400px] xl:max-w-[380px] lg:max-w-[360px] md:max-w-[350px] sm:max-w-[340px] max-w-[300px]'>
                            <div className='footerLogo'>
                                <a href=''>
                                    <img src='/footerLogo.png' alt='' />
                                </a>
                            </div>

                            <div className='text-white mt-4'>
                                <p className='2xl:text-md
                        xl:text-md lg:text-sm md:text-sm sm:text-sm text-xs leading-5'>
                                    Welcome to SAFEMEDSUPPLY, your premier source in Dubai, UAE, providing top-tier Safety Equipment and Personal Protective Equipment (PPE) to customers across the United Arab Emirates, Saudi Arabia, Oman, and Qatar.
                                </p>
                            </div>
                        </div>
                        <div className='text-white'>
                            <p className='text-lg font-semibold mb-4'>
                                Useful Links
                            </p>
                            <ul className='flex flex-col gap-2'>
                                <li>
                                        <Link
                                        href={country ?  `/${country}` : "/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={country ? `/${country}/catalog/medical` : "/catalog/medical"} > Medical</Link>
                                    </li>
                                    <li>
                                        <Link
                                        href={country ? `/${country}/catalog/safety` : "/catalog/safety"}> Safety</Link>
                                    </li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <h2 className='text-lg font-semibold mb-4'>
                                Information
                            </h2>

                            <ul className='flex flex-col gap-2'>
                                <li>
                                    Address: <span>Shop # 85 Nakheel Center, Deira Dubai</span>
                                </li>
                                <li>
                                    <a className='flex gap-5' href='tel:+971556305217'>Call Us: <span>+971 556305217 </span></a>
                                </li>
                                <li>
                                    <a className='flex gap-5' href='mailto: inquiry@gulfinstruments.com'>Mail Us: <span> inquiry@gulfinstruments.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;