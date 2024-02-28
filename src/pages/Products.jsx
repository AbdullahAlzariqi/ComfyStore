import { Filters, ProductsContainer, PaginationContainer } from '../components'
import { customFetch } from '../utils';


const url = '/products'

const allProducsQuery = (queryParams) => {
    const { search, category, company, sort, price, shipping, page } = queryParams;

    return {
        queryKey: ['products',
            search ?? '',
            category ?? 'all',
            company ?? 'all',
            sort ?? 'a-z',
            price ?? 100000,
            shipping ?? false,
            page ?? 1
        ],
        queryFn: () => customFetch(url, { params: queryParams })
    }
}
export const loader = (queryClient) => async ({ request }) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    // result of params
    //     [object Object]: "100000"
    // category: "Tables"
    // company: "all"
    // order: "a-z"
    // search: ""
    const response = await queryClient.ensureQueryData(allProducsQuery(params));
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