import React, { useEffect } from 'react';

import Aos from "aos";

export default function Pricing() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <section id="pricing" className="py-20 mt-20">
                <div data-aos="zoom-in" data-aos-delay="500" className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-blue">Download the extension</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
                    prioritize.
                    </p>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                    <div data-aos="fade-up" data-aos-delay="1000" className="flex flex-col rounded-md shadow-2xl lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./images/logo-chrome.svg" alt="" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
                            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <button type="button" className="flex-1 btn btn-purple hover:scale-95">
                            Add & Install Extension
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="1500" className="flex flex-col rounded-md shadow-2xl lg:my-8">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./images/logo-firefox.svg" alt="" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
                            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <button type="button" className="flex-1 btn btn-purple hover:scale-95">
                            Add & Install Extension
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2000" className="flex flex-col rounded-md shadow-2xl lg:mt-16">
                        <div className="p-6 flex flex-col items-center">
                            <img src="./images/logo-opera.svg" alt="" />
                            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
                            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                        </div>
                        <hr className="border-b border-bookmark-white" />
                        <div className="flex p-6">
                            <button type="button" className="flex-1 btn btn-purple hover:scale-95">
                            Add & Install Extension
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}