import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="w-full py-4 shadow-md">
            <div className="container flex justify-between items-center">
                <div className="py-1 flex-shrink-0">
                    <img src="./images/logo-bookmark.svg" alt="logo" />
                </div>
                <div className="hidden sm:block">
                    <ul className="flex items-center gap-12 text-bookmark-blue uppercase text-xs font-semibold">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Contact</li>
                        <button type="button" className="bg-bookmark-red font-semibold text-white rounded-md px-7 py-3 uppercase">Login</button>
                    </ul>
                </div>
                <div className="-mr-2 flex sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="flex items-center p-2 rounded-md text-gray-400 focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    )}
                </button>
                </div>
            </div>
        </nav>
         <Transition
         show={isOpen}
         enter="transition ease-out duration-100 transform"
         enterFrom="opacity-0 scale-95"
         enterTo="opacity-100 scale-100"
         leave="transition ease-in duration-75 transform"
         leaveFrom="opacity-100 scale-100"
         leaveTo="opacity-0 scale-95"
         >
         {(ref) => (
             <div className="sm:hidden shadow-md" id="mobile-menu">
                 <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col mx-auto">
                     <div className="cursor-pointer py-2 font-semibold text-gray-600 flex items-center justify-center uppercase">Features</div>
                     <div className="cursor-pointer py-2 font-semibold text-gray-600 flex items-center justify-center uppercase">Pricing</div>
                     <div className="cursor-pointer py-2 font-semibold text-gray-600 flex items-center justify-center uppercase">Contact</div>
                     <div className="cursor-pointer py-2 font-semibold text-gray-600 flex items-center justify-center uppercase">Login</div>
                 </div>
             </div>
         )}
     </Transition>
     </>
    );
}