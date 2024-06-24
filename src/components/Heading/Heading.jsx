import React from "react";

const Heading = ({title, position}) => {
    return (
        <h2 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary mb-10 text-center font-semibold'>
            {title}
        </h2>
    )
}

export default Heading