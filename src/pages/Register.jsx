import { FormInput, SubmitButton } from "../components";
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return <section className="h-screen grid place-items-center">
        <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center text-3xl font-bold">
                Register
            </h4>
            <FormInput name="username" type="text" label="username"></FormInput>
            <FormInput name="email" type="email" label="email"></FormInput>
            <FormInput name="password" type="password" label="password">

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