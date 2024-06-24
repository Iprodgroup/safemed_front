import React from 'react';
import PropTypes from 'prop-types';
import Link  from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';

const SimilarProducts = ({ products, type, country }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const chunkArray = (array, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunkedArray.push(array.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
    };

    const chunkedProducts = chunkArray(products, isMobile ? 1 : 3); 
    return (
        <Carousel showIndicators={false} showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={true} autoPlay={true}>
            {chunkedProducts.map((slide, index) => (
                <div key={index} className="flex justify-center">
                    {slide.map((el) => (
                        <div
                            key={`${type}_${el.id}`}
                            className={`max-w-[260px] text-center flex flex-col items-center mb-2 mx-2 font-body gap-2 text-primary item ${isMobile ? 'w-full' : ''}`}
                        >
                            <div className='border flex items-center justify-center rounded-[50px] py-6 px-12 border-primary'>
                                <img src={el.image_url} alt={el.title} className='w-[120px] h-[150px]' />
                            </div>
                            <h2 className='font-bold text-xl'>{el.title}</h2>
                            <p className='overflow-hidden line-clamp-3 text-md'>{el.context}</p>
                            <Link
                                href={country ? `/${country}/product/${el.slug}` : `/product/${el.slug}`}
                                className='py-1 px-8 text-white font-semibold bg-primary rounded-lg active:bg-blue-700'
                                onClick={handleButtonClick}
                            >
                                More
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </Carousel>
    );
};

SimilarProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            context: PropTypes.string.isRequired,
        })
    ).isRequired,
    type: PropTypes.string.isRequired,
};

export default SimilarProducts;
