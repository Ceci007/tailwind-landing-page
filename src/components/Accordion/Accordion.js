import React from 'react';

export default function Accordion({ header, text}) {
    return (
        <>
            <div className="group outline-none accordion-section" tabIndex="1">
            <div
            className="group border-b-2 border-gray-600 rounded-t-md mb-2 bg-gray-300 flex justify-between px-4 py-3 items-center text-gray-600 transition ease duration-500 cursor-pointer pr-10 relative"
            >
            <div className="group-focus:text-gray-800 transition ease duration-500 font-semibold">
                { header }
            </div>
            <div
                className="h-8 w-8 border-2 border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-800 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
            </div>
            <div
            className="group-focus:max-h-screen max-h-0 rounded-b-md mb-2 -mt-2 bg-gray-200 px-4 overflow-hidden ease duration-500"
            >
            <p className="p-2 text-gray-500 text-justify">
                { text }
            </p>
            </div>
        </div>
        </>
    )
}