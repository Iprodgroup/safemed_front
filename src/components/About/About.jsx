import React from 'react';
import Heading from '../Heading'

const About = () => {
    return (
        <>
            <div className='mb-10 mt-10'>
                <Heading title="About SafeMed" position="center" />
                <div className='max-w-[855px] w-full flex flex-col gap-6 text-center mx-auto
                2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm text-primary'>
                    <p>
                        Welcome to SAFEMEDSUPPLY, your premier source in Dubai, UAE, providing top-tier Safety Equipment and Personal Protective Equipment (PPE) to customers across the United Arab Emirates, Saudi Arabia, Oman, and Qatar. As a trusted name in the industry, we are dedicated to offering a wide range of safety solutions to meet the diverse needs of our clients.
                    </p>
                    <p>
                        At SAFEMEDSUPPLY, we recognize the paramount importance of safety in various industries. Our extensive collection of Safety Equipment ensures that businesses and institutions have access to high-quality, compliant products that prioritize the well-being of their workforce.
                    </p>
                    <p>
                        What sets us apart is our unwavering commitment to affordability. SAFEMEDSUPPLY is synonymous with highly competitive prices, guaranteeing that our clients receive the best value for their investment without compromising on the quality of safety solutions.
                    </p>
                    <p>
                        Explore our comprehensive range of Safety Equipment and PPE, and discover why SAFEMEDSUPPLY is the preferred choice for those seeking excellence in safety provisions across the region.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;