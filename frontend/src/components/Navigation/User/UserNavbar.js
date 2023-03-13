/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";


import { useDispatch } from "react-redux";

import { logoutAction } from "../../../redux/slice/userSlices/userSlices";      




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserNavbar = ({isLogin}) => {
  console.log(isLogin);
  //Navigation
  const userNavigation = [
    { name: "Your Profile", href: `/profile/${isLogin?._id}` },
    { name: "Change your password", href: "/update-password" },
  ];

  //logout
  const dispatch=useDispatch()
  return (
    <Disclosure as="nav" className="bg-green-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  {/* Logo */}
                 
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                 
                  {/* Logout */}
                  <button
                  onClick={()=>
                    dispatch(logoutAction()) 
                }
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                 
                    <span>Logout</span>
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  {/* Profile dropdown */}
                
                </div>
              </div>
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  );
};

export default UserNavbar;
