import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context";
import { Layout } from "../Layout";

const Sign = () => {
  const context = useContext(CartContext);
  const handleClickLogIn = () => {
    context.setLog(false);
  };
  return (
    <Layout>
      <div className="flex flex-col ">
        <div className="">
          <div className="flex">
            <span className="text-center font-bold mx-auto"></span>
          </div>

          <div className="">
            <form className="mt-10">
              <label className="block text-xs font-semibold text-gray-600 uppercase">
                E-mail / ingresar cualquier palabra o mail.
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="block w-full py-3 px-1 mt-2 
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                disabled
              />

              <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                className="block w-full py-3 px-1 mt-2 mb-4
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                disabled
              />
              <Link>
                <button
                  onClick={() => handleClickLogIn()}
                  className="w-full py-3 mt-10 bg-gray-800 rounded-lg
                      font-medium text-white uppercase cursor-pointer
                      focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  Login
                </button>
              </Link>
              <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a className="flex-2 underline text-gray-500 border border-gray-500 p-2 bg-gray-400">
                  Forgot password?
                </a>

                <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  or
                </p>
                <a
                  disabled
                  className="flex-2 underline cursor-pointer border border-black p-2 bg-green-400"
                >
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Sign };
