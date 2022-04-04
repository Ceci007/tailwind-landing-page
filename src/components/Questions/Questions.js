import React, { useEffect } from 'react';
import Accordion from '../Accordion/Accordion';

import Aos from "aos";


const accordions = [
    { 
        header: "What is a Bookmark?", 
        text: `A bookmark in Docs is just like a bookmark that you would 
        use to mark your place in a novel. You use bookmarks to mark a location 
        in a document so that you can quickly find and jump back to it.`
    },
    { 
        header: "How can I request a new browser?", 
        text: `Did you know that when you're exploring the internet, you aren't just 
        limited to the one default browser that comes with your computer, phone or tablet device? 
        There are many different web browsers available to try, each with their own benefits and disadvantages.
        If you've always just used the one web browser, why not experiment by trying out a different browser.`
    },
    { 
        header: "Is there a mobile app?", 
        text: `Yes we have it on Play Store and IOS`
    },
    { 
        header: "What about other Chromium browsers?", 
        text: `Why we don’t even bother to try web browsers other than Google 
        Chrome and Mozilla Firefox. Although the popular one, Google Chrome itself 
        a chromium based browser — an open-source project and the browser source 
        code released and maintained by the Chromium Project started by Google.`
    }

]

export default function Questions() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="container flex flex-col bg-bookmark-white py-20">
            <div data-aos="zoom-in" data-aos-delay="1000" className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
            <p className="text-center text-bookmark-grey mt-4">
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
            </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="1500" className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                {accordions.map((accordion, i) => {
                    return (
                        <Accordion key={i} header={accordion.header} text={accordion.text} />
                    )
                })}
            </div>
            <button data-aos="fade-down" data-aos-delay="2000" type="button" className="mt-12 mx-auto w-48 flex items-center justify-center btn btn-purple hover:scale-95">
                More Info
            </button>
        </section>
  )
}