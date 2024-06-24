import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Filters = ({ brands, categories }) => {
    const router = useRouter();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [visibleCategories, setVisibleCategories] = useState(12);
    const [visibleBrands, setVisibleBrands] = useState(12);

    useEffect(() => {
        const { query } = router;
        const categoryIds = query.categories ? query.categories.split(',').map(id => parseInt(id)) : [];
        setSelectedCategories(categoryIds);
        const brandIds = query.brands ? query.brands.split(',').map(id => parseInt(id)) : [];
        setSelectedBrands(brandIds);
    }, [router.query]);

    const handleCategoryButtonClick = (id) => {
        const isSelected = selectedCategories.includes(id);
        const updatedCategories = isSelected
            ? selectedCategories.filter(selectedId => selectedId !== id)
            : [...selectedCategories, id];
        setSelectedCategories(updatedCategories);
        updateQueryParams({ categories: updatedCategories.join(',') });
    };

    const handleBrandButtonClick = (id) => {
        const isSelected = selectedBrands.includes(id);
        const updatedBrands = isSelected
            ? selectedBrands.filter(selectedId => selectedId !== id)
            : [...selectedBrands, id];
        setSelectedBrands(updatedBrands);
        updateQueryParams({ brands: updatedBrands.join(',') });
    };

    const updateQueryParams = (params) => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, ...params },
        });
    };

    const showMoreCategories = () => {
        setVisibleCategories(prevVisibleCategories => prevVisibleCategories + 12);
    };

    const showMoreBrands = () => {
        setVisibleBrands(prevVisibleBrands => prevVisibleBrands + 12);
    };

    return (
        <div className='w-[270px] border px-4 border-primary text-primary py-4 rounded-md shadow-lg filterContent'>
            <div className='h-full flex flex-col justify-between filterItems'>
                <div className='categories mb-4'>
                    <h2 className='text-center text-xl font-bold mb-3 uppercase text-primary'>
                        Categories
                    </h2>
                    <div className='block'>
                        {categories.slice(0, visibleCategories).map((category) => (
                            <div key={category.id} className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md">
                                <label htmlFor={category.id} className='cursor-pointer w-full break-words pr-2'>
                                    {category.title}
                                </label>
                                <input
                                    type="checkbox"
                                    id={category.id}
                                    className="form-checkbox h-4 w-4 text-primary cursor-pointer"
                                    style={{ width: '16px', height: '16px' }}
                                    checked={selectedCategories.includes(category.id)}
                                    onChange={() => handleCategoryButtonClick(category.id)}
                                />
                            </div>
                        ))}
                        {visibleCategories < categories.length && (
                            <div className="text-center mt-2">
                                <button
                                    onClick={showMoreCategories}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Show more
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='brands'>
                    <h2 className='text-center text-xl font-bold mb-3 uppercase text-primary'>
                        Brands
                    </h2>
                    <div className='block'>
                        {brands.slice(0, visibleBrands).map((brand) => (
                            <button
                                key={brand.id}
                                onClick={() => handleBrandButtonClick(brand.id)}
                                className={`uppercase px-3 py-1 mb-2 w-full text-sm border rounded-full transition-colors flex items-center justify-center ${
                                    selectedBrands.includes(brand.id) ? 'bg-primary text-white' : 'bg-white text-primary border-primary'
                                }`}
                            >
                                {brand.title}
                            </button>
                        ))}
                        {visibleBrands < brands.length && (
                            <div className="text-center mt-2">
                                <button
                                    onClick={showMoreBrands}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Show more
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
