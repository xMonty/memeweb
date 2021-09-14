import React from 'react'
import { ButtonType } from '../src/components/controls/Button';
import Controls from '../src/components/controls/Controls';
import { useLoginMutation } from '../src/generated/graphql';


interface loginProps {

}

const Login: React.FC<loginProps> = ({ }) => {
  const [{data, fetching, error, stale}, login] = useLoginMutation();

  const onLogin = async () => {
    const response = await login({ loginEmail: 'test', loginPassword: 'test'});
    if(response.data?.login.errors) {
      console.error(response.data.login.errors[0].message);
    } else {
      console.log("User", response.data?.login.user);
    }
  }

  return (
    <div className="flex-col bg-gray-500 dark:bg-white min-h-screen pt-60">
      <div className="max-w-sm mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-80">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Acorn</h2>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

          <Controls.Button type={ButtonType.primary} onClick={onLogin} text="Login"/>
          
          <form>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address"/>
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password"/>
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                <Controls.Button type={ButtonType.primary} onClick={onLogin} text="Login"/>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
          <a href="#" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</a>
        </div>
      </div>
    </div>
	);
}

export default Login;