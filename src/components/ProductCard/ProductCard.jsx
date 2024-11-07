
import React, { useState, useParams } from "react";
import Link from "next/link"
import SimilarProducts from "../SimilarProducts";


const ProductCard = ({data, country, product, main, email, number}) => {
    const [activeItem, setActiveItem] = useState('modal1');

    // if (!product) {
    //     return <div
    //         className='w-full h-screen flex flex-col justify-center items-center bg-fourToFour bg-no-repeat bg-center bg-cover'
    //     >
    //         <h1 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-lg mb-4 font-bold text-white uppercase'>
    //             Product not found
    //         </h1>
    //         <Link href={"/Categories"} className='py-2 px-4 border rounded-full text-white font-semibold'>
    //             Return to selection
    //         </Link>
    //     </div>;
    // }

    const openItem = (modalType) => {
        setActiveItem(modalType);
    };

    const phone = number.replace(/\s/g, '');

    return (
        <>    
            {/* <div className='my-6'>
                <Navigation path={location.pathname} products={products} country={country} />
            </div> */}
            <section className='flex gap-8 safetyContent mb-10'>
                <div className=' flex items-center justify-center max-w-[360px] h-[360px] px-2 w-full bg-gray-300 medItem'>
                    <img src={product?.image_url} alt={product?.title} className='w-[180px]' />
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h1 className='font-bold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl uppercase'>
                            {product?.title} {product?.id}
                        </h1>
                    </div>

                    <div>
                        <h2 className='font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase
                        text-primary'>
                            Manufacturer:
                        </h2>
                        <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase'>
                            <Link href={`/${data.code}/catalog/${product?.type}?brands=${[product?.brand?.id]}`}>
                                {product?.brand?.title}
                            </Link>
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase
                        text-primary'>
                            Category:
                        </h2>
                        <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg uppercase'>
                            <Link href={`/${data.code}/catalog/${product?.type}?categories=${[product?.category?.id]}`}>
                                {product?.category?.title}
                            </Link>
                        </p>
                    </div>
                    <div>
                        <p className='2xl:text-xl xl:text-lg lg:text-md md:text-md sm:text-sm text-sm text-justify context'>
                            Safemed is a leading supplier and reseller of {product?.title} in {data.name}, we ship to all major cities such as {data.citys}.
                            {/* Esxample: SafeMed is a leading supplier and reseller of Bently Nevada Vibration Monitoring in UAE, and we ship to all major cities such as Dubai & Abu Dhabi, Sharjah */}
                        </p>
                    </div>
                    <div className='flex gap-8'>
                        <a
                            href={`mailto:${email}`}
                            className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs
                                uppercase font-bold py-2 max-w-[220px] w-full text-center bg-primary rounded-md text-white'
                        >
                            Request a quote
                        </a>
                        <a
                            href={`https://wa.me/${phone}`}
                            className='2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm text-xs
                                uppercase font-bold py-2 max-w-[220px] w-full text-center bg-primary rounded-md text-white'
                        >
                            Whatsapp us
                        </a>

                    </div>
                </div>
            </section>
            <section className='mt-20 mb-20 font-body justify-between'>
                <div className=' w-full flex gap-8 px-8 justify-center items-center flex-wrap 2xl:text-md
            xl:text-md lg:text-sm md:border-b pt-2 mx-auto'>
                    <button
                        onClick={() => openItem('modal1')}
                        className={`py-3 px-8 font-semibold rounded-t-lg ${activeItem === 'modal1' ? 'bg-primary text-white' : 'bg-transparent'}`}
                        type='submit'>
                        Product Description
                    </button>
                    <button
                        onClick={() => openItem('modal2')}
                        className={`py-3 px-8 font-semibold rounded-t-lg ${activeItem === 'modal2' ? 'bg-primary text-white' : 'bg-transparent'}`}
                        type='submit'>
                        Shipping Details
                    </button>
                </div>

                <div className='mt-6 w-full flex-col flex justify-center items-center  px-4'>
                    {activeItem === 'modal1' && (
                            <>
                            <section className='text-justify flex flex-col gap-4 mb-10 border border-primary p-4'>
                                <div dangerouslySetInnerHTML={{__html: product?.characteristics}} />
                            </section>
                            <div className='w-full'>
                                <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                                    Why Buy from SafeMed:
                                </h2>
                                <ul className='list-disc 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs px-4'>
                                    <li>
                                        <p>
                                            Supplier of {product?.title} {data.name}
                                        </p>
                                    </li>
                                    <li>
                                        <p>Best online prices for {product?.title}</p>
                                    </li>
                                    <li>
                                        <p>Shipping at door with custom and duty included in price quotation.</p>
                                    </li>
                                    <li>
                                        <p>Pay via Bank Transfer, Credit Card or secure Stripe payment.</p>
                                    </li>
                                    <li>
                                        <p>Special discount available on bulk orders.</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    {activeItem === 'modal2' && (
                            <>
                            <div className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-xs border border-primary p-4'>
                                <p className='mb-4'>
                                    Safemed uses courier service to deliver {product.title} {product.id} right to your door.
                                    All orders are dispatched within 1-3 working days after stock availability.
                                </p>
                                <p>
                
                                    Safemed also accepts Credit Card payments from United Arab Emirates (UAE),
                                    Saudi Arabia (KSA), Bahrain, Iraq, Kuwait, Oman & Qatar. Our International courier
                                    charges cover delivery up to door, including all local custom duties and taxes.
                                    Please contact us at <a href={`mailto:${email}`}>{phone}</a> for quotation, if your country is not
                                    listed above
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <section>
                <h2 className='2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase text-primary font-bold'>
                    Similar products
                </h2>
                <section className='mt-20 mb-20 font-body justify-between'>
                    <div className='max-w-[900px] w-full flex gap-8 px-8 justify-center items-center flex-wrap 2xl:text-md
                        xl:text-md lg:text-sm md:border-b py-2 mx-auto mb-10'>
                            <h2 class="2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm uppercase font-bold">{product.category.title}</h2>
                        </div>
                    <div className='overflow-hidden'>
                        <SimilarProducts products={product.similar_products} country={country} type={``} />
                    </div>
                </section>
            </section>
        </>
    )
}

export default ProductCard