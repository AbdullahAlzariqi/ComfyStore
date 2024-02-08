import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
    const { meta } = useLoaderData();
    const totalProducts = meta.pagination.total;

    const [layout, setLayout] = useState('grid');

    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text-based-content'}`
    }
    return (
        <div className="filters">
            {/* HEADER */}
            <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                <h4 className='font-medium text-md'>
                    {totalProducts} product{totalProducts > 1 && 's'}
                </h4>
                <div className="flex gap-2">
                    <button type='button' onClick={() => setLayout('grid')} className={setActiveStyles('grid')}>
                        <BsFillGridFill />
                    </button>
                    <button type='button' onClick={() => setLayout('list')} className={setActiveStyles('list')}>
                        <BsList />
                    </button>
                </div>
            </div>
            {/* PRODUCTS */}
            <div>
                {
                    totalProducts === 0 ? <h2 className='text-center text-xl'>No products found</h2> : layout === 'grid' ? (<ProductsGrid />)
                        : (<ProductsList />)  // if no products found, show message, else show products in the selected layout  // if no products found, show message, else show products in the selected layout  // if no products found, show message, else show products in the selected layout  // if no products found
                }
            </div>

        </div>
    );
}

export default ProductsContainer;