import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Header() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section className="relative">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    <div className="flex flex-1 flex-col items-center lg:items-start mb-10 md:mb-16 lg:mb-0">
                        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                            A Simple Bookmark Manager
                        </h2>
                        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
                        load instantly. Try it for free.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <button type="button" className="btn btn-purple hover:scale-95">
                            Get it on Chrome
                            </button>
                            <button type="button" className="btn btn-white text-white hover:scale-95">
                            Get it on Firefox
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center mb-10 md:mb-16 lg:mb-0 z-10">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./images/hero-bg.png" alt="hero background" />
                    </div>
                </div>
                <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:w-1/3 top-32 right-0 lg:-bottom-38" />
            </section>
        </>
    );
}