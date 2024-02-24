import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';



export const action = (store) => async ({ request }) => {
    console.log(store);
    // const formData = await request.formData();
    // const data = Object.fromEntries(formData);
    return null;
}
const Login = () => {



    return <section className="h-screen grid place-items-center">
        <Form method="post" className=" card w-96 p-8 bg-base-100 shadow-lg
        flex flex-col gap-y-4">
            <h4 className="text-center text-3xl font-bold">
                Login
            </h4>

            <FormInput type='email' label="email"
                name="identifier" defaultValue="test@test.com" />

            <FormInput type='password' label="password"
                name="password" defaultValue="secret" />

            <div className="mt-4">
                <SubmitButton text="login" />

            </div>
            <button type="button" className="btn btn-secondary 
                    btn-block">
                Guest User
            </button>
            <p className="text-center">
                Not a member yet? <Link to="/register" className="ml-2 link link-hover link-primary capitalize">Register</Link>
            </p>


        </Form>
    </section>
}

export default Login;