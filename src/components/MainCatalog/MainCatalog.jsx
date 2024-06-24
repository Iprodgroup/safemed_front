import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loader from '../Loader';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import Filters from '../Filters';

const MainCatalog = ({type, brands, categories, country }) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const { categories: categoryParams, brands: brandParams } = router.query;

    useEffect(() => {
        scrollToTop();
        fetchData();
    }, [currentPage, categoryParams, brandParams]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const url = buildUrl(currentPage, categoryParams, brandParams, searchQuery);
            const response = await axios.get(url);
            const { data, total_pages } = response.data;
            setFilteredProducts(data);
            setTotalPages(total_pages);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const buildUrl = (page, categories, brands, search) => {
        let url = `https://admin.safemedsupply.com/api/products/${type}?page=${page}`;
        if (categories) {
            url += `&categories=${categories}`;
        }
        if (brands) {
            url += `&brands=${brands}`;
        }
        if (search) {
            url += `&query=${search}`;
        }
        return url;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); 
        setCurrentPage(1); 
        fetchData(); 
    };

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    const handleProductClick = (slug) => {
        const path = country ? `/${country}/product/${slug}` : `/product/${slug}`;
        router.push(path);
    };

    return (
        <div className="container">
            <div className="w-full flex gap-10 justify-between searchContent">
                <div className="mb-10">
                    <Filters brands={brands} categories={categories} />
                </div>
                <div className="w-full">
                    <form className="flex items-center gap-2  w-full mb-10">
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="outline-none border-2 border-primary rounded-full py-1 px-4 w-full"
                            placeholder="Find"
                            autoComplete="search"
                        />
                        <button type="submit" className="text-2xl text-primary">
                            <ImSearch />
                        </button>
                    </form>
                    <div className="flex flex-wrap gap-4 itemList">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-64">
                                <Loader />
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="flex justify-center items-center w-full h-64">
                                <p className="text-center">No products found</p>
                            </div>
                        ) : (
                            <>
                                {filteredProducts.map(el => (
                                    <div
                                        key={el.id}
                                        className="max-w-[260px] text-center flex flex-col items-center mb-2 mx-2 font-body gap-2 text-primary item"
                                    >
                                        <button
                                            className="border flex items-center justify-center rounded-[50px] py-6 px-12 border-primary"
                                            onClick={() => handleProductClick(el.slug)}
                                        >
                                            <img src={el.image_url} alt={el.title} className="w-[100px] h-[150px]" />
                                        </button>
                                        <h2 className="font-bold text-xl">{el.title}</h2>
                                        <p className="overflow-hidden line-clamp-3 text-md">{el.description}</p>
                                        <button
                                            className="py-1 px-8 text-white font-semibold bg-primary rounded-lg active:bg-blue-700"
                                            onClick={() => handleProductClick(el.slug)}
                                        >
                                            More
                                        </button>
                                    </div>
                                ))}
                                <div className="flex w-full justify-center my-4">
                                    <ReactPaginate
                                        pageCount={totalPages}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={1}
                                        onPageChange={handlePageClick}
                                        containerClassName="pagination flex items-center"
                                        pageClassName="mx-1"
                                        pageLinkClassName="p-2 text-primary"
                                        activeClassName="bg-gray-200 text-white rounded-full"
                                        previousLabel={<FaChevronLeft className="w-4 h-4" />}
                                        nextLabel={<FaChevronRight className="w-4 h-4" />}
                                        forcePage={currentPage - 1}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCatalog;
