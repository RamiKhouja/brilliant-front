import React from 'react'

async function getSpeech(locale) {
    const token = process.env.API_TOKEN;
    const options = { 
        headers: { Authorization: `Bearer ${token}` },
        next: {
            revalidate: 0
        }
    };
    const res = await fetch(process.env.BASE_URL + '/api/speech?populate=*&locale='+locale, options);
    return res.json();
}



export default async function Speech({locale}) {
    const speech = await getSpeech(locale);
  return (
    <div
        className="col col-12 p-0 min-h-100vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 lg:flex-col lg:justify-center"
        data-custom-animations="true"
        data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
    >
        <div className="w-50percent flex flex-col gap-30 p-10 transition-bg text-center flex-grow-1 flex-shrink-0 lg:w-full">
            <div className="ld-fancy-heading relative flex items-center self-center bg-primary rounded-4 px-15 animation-element">
            {/* <h6 className="ld-fh-element relative m-0 text-12 font-medium uppercase leading-1em tracking-1 text-black py-5 pr-0 pl-5">
                Secure Platform
            </h6> */}
            </div>
            <div className="ld-fancy-heading relative max-w-full animation-element">
            <h2
                className="ld-fh-element relative m-0 shadow-txt-primary leading-1/25em"
            >
                {speech.data?.attributes.title}
            </h2>
            </div>
            <div className="max-w-full">
            <p
                className="lqd-text-reveal-el mt-0 mb-0 px-5percent text-30 leading-40 text-yellow-100 text-center animation-element"
                // data-split-text={locale=='en'&&'true'}
                // data-split-options={locale=='en'&&'{"type": "words, chars"}'}
                data-parallax="true"
                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                data-parallax-from='{"opacity" : 0.2}'
                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
            >
                {speech.data?.attributes.description}
            </p>
            </div>
        </div>
        <div className="w-50percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full lg:order-first">
            <div
            className="lqd-imggrp-single block relative max-w-full text-center"
            data-parallax="true"
            data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom top"}'
            data-parallax-from='{"y": "-120px", "scaleX" : 1.1, "scaleY" : 1.1}'
            data-parallax-to='{"y": "120px", "scaleX" : 1.2, "scaleY" : 1.2}'
            >
            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                <figure
                className="w-full relative"
                data-reveal-options='{"direction": "tb"}'
                >
                <img
                    className="rounded-30 w-560"
                    width={1120}
                    height={1320}
                    src="/assets/images/custom/micro-glow-2.png"
                    alt="api access"
                />
                </figure>
            </div>
            </div>
        </div>
    </div>
  )
}