import { Filters, ProductsContainer, PaginationContainer } from '../components'
import { customFetch } from '../utils';


const url = '/products'
export const loader = async ({ request }) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    // result of params
    //     [object Object]: "100000"
    // category: "Tables"
    // company: "all"
    // order: "a-z"
    // search: ""
    const response = await customFetch(url, { params });
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
}

const Products = () => {
    return <>
        <Filters />
        <ProductsContainer />
        <PaginationContainer />

    </>
}

export default Products;