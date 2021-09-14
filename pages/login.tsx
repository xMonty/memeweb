import { Form, Formik } from "formik";
import React from "react";
import Controls from "../src/components/controls/Controls";
import { useLoginMutation } from "../src/generated/graphql";
import { setAccessToken } from "../src/utils/token";


const Login: React.FC = ({}) => {
  const [{ fetching }, login] = useLoginMutation();

  return (
    <div className="flex-col bg-gray-500 min-h-screen pt-60">
      <div className="max-w-sm mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 ">
            Acorn
          </h2>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            Login or create account
          </p>

          <Formik
            initialValues={{
              loginEmail: "",
              loginPassword: ""
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
              const response = await login(values);
              if (response.data?.login.errors) {
                console.error(response.data.login.errors[0].message);
              } else {
                setAccessToken(response.data?.login.accessToken ?? '');
              }
              actions.resetForm();
            }}
          >
            <Form>
              <div className="w-full mt-4">
                <Controls.InputField label='Email' name="loginEmail"/>
              </div>

              <div className="w-full mt-4">
                <Controls.InputField type="password" label='Password' name="loginPassword"/>
              </div>

              <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                  Forget Password?
                </a>

                <Controls.Button text="Login" type="submit"/>
              </div>
            </Form>
          </Formik>
          
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-100 ">
          <span className="text-sm text-gray-600 ">
            Don't have an account?{" "}
          </span>
          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-600 hover:text-blue-500"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
