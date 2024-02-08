import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
    const { meta, params } = useLoaderData();
    const { search, company, category, shipping, price, order } = params;


    return (
        <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm-grid-clos-2 md:grid-cols-3 lg:grid-cols-4 items-center" >
            {/* SEARCH         */}
            <FormInput type='search' label='search product' name='search' size="input-sm" defaultValue={search}></FormInput>
            {/* CATEGORIES */}
            <FormSelect label='Select Category' name='category' list={meta.categories} size='select-sm' defaultValue={category}></FormSelect>
            {/* COMPANIES */}
            <FormSelect label='Select Company' name='company' list={meta.companies} size='select-sm' defaultValue={company}></FormSelect>
            {/* ORDER */}
            <FormSelect label='sort by' name='order' list={['a-z', 'z-a', 'high', 'low']} defaultValue={order} size='select-sm'></FormSelect>
            {/* PRICE RANGE */}
            <FormRange name='price' label='select price' size='range-sm' price={price} ></FormRange>
            {/* SHIPPING */}
            <FormCheckbox name='shipping' label='Free Shipping' size='checkbox-sm' defaultValue={shipping} ></FormCheckbox>
            {/* BUTTONS */}
            <button className="btn btn-primary btn-sm">SeaSrch</button>
            <Link to='/products' className='btn btn-accent btn-sm'>Reset</Link>
        </Form>
    );
}

export default Filters;