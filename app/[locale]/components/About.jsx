import Link from 'next/link';
import React from 'react'
import Speech from './Speech';
import Image from 'next/image';

async function getAbout(locale) {
    const token = process.env.API_TOKEN;
    const options = { 
        headers: { Authorization: `Bearer ${token}` },
        next: {
            revalidate: 0
        }
    };
    const res = await fetch(process.env.BASE_URL + '/api/main-about?populate=*&locale='+locale, options);
    return res.json();
}



export default async function About({locale, t}) {
    const about = await getAbout(locale);
  return (
    <section className="lqd-section how-it-works px-10" id="about">
        <div className="absolute max-w-full w-full ltr-left-0 -top-100vh z-0 p-0 module-img pointer-events-none">
        <div className="lqd-imggrp-single block relative">
            <div className="lqd-imggrp-img-container inline-flex relative w-full items-center justify-center">
            <figure className="w-full relative">
                <img
                className="w-full max-w-full"
                width={1675}
                height={2962}
                src="/assets/images/demo/dark-ai/how-it-work/glows1.png"
                alt="bg how it work"
                />
            </figure>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="row h-full">
            <div className="col col-12 p-0 min-h-100vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 module-top mb-30 lg:flex-col lg:justify-center">
            <div className="w-50percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full">
                <div
                className="lqd-imggrp-single block relative max-w-full text-center"
                data-parallax="true"
                data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom top"}'
                data-parallax-from='{"y": "-120px", "z": "0px", "scaleX" : 1.2, "scaleY" : 1.2}'
                data-parallax-to='{"y": "0px", "z": "120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                >
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                    <figure
                    className="w-full relative"
                    //data-reveal="true"
                    data-reveal-options='{"direction": "tb"}'
                    >
                    <Image
                        className={`rounded-30 w-560 ${locale=='ar' && 'flip-img'}`}
                        width={1120}
                        height={1320}
                        src="/assets/images/demo/dark-ai/bg/about-3.png"
                        alt="user insight"
                    />
                    </figure>
                </div>
                </div>
            </div>
            <div
                className="w-50percent flex flex-col gap-30 p-10 transition-bg text-center flex-grow-1 flex-shrink-0 lg:w-full"
                data-custom-animations="true"
                data-ca-options='{"animationTarget": ".animation-element:not([data-split-text]), .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
            >
                {/* <div className="ld-fancy-heading relative flex items-center self-center bg-primary rounded-4 px-15 animation-element">
                <h6 className="ld-fh-element relative m-0 text-12 font-medium uppercase leading-1em tracking-1 text-black py-5 pr-0 pl-5">
                    User dashboard
                </h6>
                </div> */}
                <div className="ld-fancy-heading relative max-w-full animation-element">
                <h2
                    className="ld-fh-element relative m-0 shadow-txt"
                    data-split-text={locale=='en'&&'true'}
                    data-split-options={locale=='en'&&'{"type": "chars, words"}'}
                >
                    {/* <span className="font-accent font-normal">User</span> */}
                    {about.data?.attributes.title}
                </h2>
                </div>
                <div className="max-w-full">
                <p
                    className="lqd-text-reveal-el mt-0 mb-0 px-5percent text-34 leading-40 text-yellow-100 text-center animation-element"
                    //data-split-text={locale=='en'&&'true'}
                    data-split-options={locale=='en'&&'{"type": "words, chars"}'}
                    data-parallax="true"
                    data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                    data-parallax-from='{"opacity" : 0.2}'
                    data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                >
                    {about.data?.attributes.description}
                </p>
                </div>
                <div className="max-w-full banner-btn-right animation-element">
                    <a href={'about'} className=" btn btn-solid btn-sm btn-icon-left btn-hover-swp text-17 font-medium bg-primary text-white rounded-6">
                        <span data-text="Watch Video" className="btn-txt">{t('show-more')}</span>
                        <span className="btn-icon">
                        <i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-play"></i>
                        </span>
                        <span className="btn-icon">
                        <i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-play"></i>
                        </span>
                    </a>
                </div>
            </div>
            </div>
            <Speech locale={locale}/>
        </div>
        </div>
    </section>
  )
}