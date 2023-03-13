import { Disclosure } from "@headlessui/react";






const PublicNavbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
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
                 
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  
                </div>
              </div>
              <div className="flex items-center">
               
               
              </div>
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  );
};

export default PublicNavbar;
