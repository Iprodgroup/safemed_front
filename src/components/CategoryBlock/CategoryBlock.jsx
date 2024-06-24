import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Heading from "../Heading"

const CategoryBlock = ({country}) => {
    return (
        <>
            <Heading title="Explore our Product Catalog" position="center" />
            <div>
               
                <div className='flex font-body category'>
                    <Link href={country ? `/${country}/catalog/medical` : "/catalog/medical"} className='relative w-full h-[400px] p-10 text-center cursor-pointer
                        flex flex-col justify-between mecidal overflow-hidden'>
                        <div>
                            <img src='/Categories2.png'
                                alt=''
                                className='absolute left-0 top-0 h-full w-full -z-10 bgImg'
                            />
                            <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-white uppercase'>
                                Medical Equipment
                            </h2>
                            <div className='flex items-center justify-evenly'>
                                <div
                                    className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl text-xl
                                    flex items-center gap-3 py-1 px-4 rounded-full border max-w-[160px] w-full text-white'
                                    href={country ? `/${country}/catalog/medical` : "/catalog/medical"}>
                                    Details
                                    <IoIosArrowForward />
                                </div>
                                <img
                                    className='2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                                2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px]'
                                    src='/item1.png'
                                    alt='' />
                            </div>
                        </div>
                    </Link>
                    <Link href={country ? `/${country}/catalog/safety` : "/catalog/safety"} className='w-full h-[400px]
                        p-10 text-center relative overflow-hidden safetysup cursor-pointer
                        flex flex-col justify-between'>
                        <div >
                            <img
                                src='/Categories.png'
                                alt=''
                                className='absolute left-0 top-0 h-full w-full -z-10 bgImg'
                            />
                            <h2 className='mb-2
                                2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-white uppercase'>
                                Safety Supplies (PPE)
                            </h2>
                            <div className='flex items-center justify-evenly'>
                                <div
                                    className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl text-xl
                                    flex items-center gap-3 py-1 px-4 rounded-full border max-w-[160px] w-full text-white'
                                    href={country ? `/${country}/catalog/safety` : "/catalog/safety"}>
                                    Details
                                    <IoIosArrowForward />
                                </div>
                                <img
                                    className='2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                                    2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px]'
                                    src='/safety.png'
                                    alt='' />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default CategoryBlock;