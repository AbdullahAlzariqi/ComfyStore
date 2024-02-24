import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post('auth/local/register', data);
        toast.success('You registered successfully')
        return redirect('/login')
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'Please check you credentials';
        toast.error(errorMessage)

        return null
    }
    return null
}


const Register = () => {
    return <section className="h-screen grid place-items-center">
        <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center text-3xl font-bold">
                Register
            </h4>
            <FormInput name="username" type="text" label="username" ></FormInput>
            <FormInput name="email" type="email" label="email" ></FormInput>
            <FormInput name="password" type="password" label="password" >

            </FormInput>


            <div className="mt-4">
                <SubmitButton text="Register" />
            </div>
            <p className="text-center">
                Already a member yet?
                <Link to="/login" className="ml-2 link link-hover link-primary capitalize">
                    Login</Link>
            </p>
        </Form>
    </section>
}

export default Register;