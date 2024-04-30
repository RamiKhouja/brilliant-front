import React from 'react'

async function getIntro(locale) {
    const token = process.env.API_TOKEN;
    const options = { 
        headers: { Authorization: `Bearer ${token}` },
        next: {
            revalidate: 0
        }
    };
    const res = await fetch(process.env.BASE_URL + '/api/intros?populate=*&locale='+locale, options);
    return res.json();
}

export default async function Intro({locale}) {
    const intros = await getIntro(locale)
  return (
    <section className="lqd-section banner min-h-100vh flex justify-center items-center p-10 bg-black" id="banner" data-parallax="true"data-parallax-options='{"start": "top top", "end": "bottom top"}' data-parallax-from='{ "y": "0vh", "scaleX": 1,"scaleY": 1,"opacity": 1 }' data-parallax-to='{ "y": "72vh", "scaleX": 1.2,"scaleY": 1.2,"opacity": 0 }'>
        <div className="module-video w-full h-full absolute top-0 left-0 overflow-hidden z-0 transotion-opacity pointer-events-none bg-before xs:hidden">
        <video className="background-video-hosted max-w-full w-full h-full absolute-center object-cover" src="/assets/videos/dark-ai/banner/aimeetscrypto.mp4" autoPlay muted playsInline loop></video>
        </div>
        <div className="container flex flex-col" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element,.animation-element .split-inner", "duration" : 750, "delay" : 50, "ease": "expo.out", "initValues": {"scaleX" : 0.5, "scaleY" : 0.5, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'>
        <div className="ld-fancy-heading relative max-w-full text-center animation-element">
            <h1 className="ld-fh-element relative mb-0/15em leading-1em" data-text-rotator="true">
            {/* <span className="font-accent font-normal">AI MEETS </span> */}
            <p className="txt-rotate-keywords">
                {intros.data.map((intro, index)=>(
                        <span key={intro.id} className={`txt-rotate-keyword ${index==1 && ("active")}`}>
                            {intro.attributes.title}
                        </span>
                    )
                )}
            </p>
            </h1>
        </div>
        <div className="ld-fancy-heading relative text-center animation-element">
            <div className="ld-fh-element relative mb-0/5em leading-1/3em" data-text-rotator="true">
                <span className="txt-rotate-keywords">
                {intros.data.map((intro, index)=>(
                    <span key={index} 
                        className={`txt-rotate-keyword ${index==1 && 'active'}`}
                    >
                        {intro.attributes.description}
                    </span>
                ))}
                </span>
            </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-10 p-10" dir='ltr'>
            <div className="max-w-full banner-btn-left animation-element">
            <a href="#features" className="btn btn-solid btn-md btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped text-17 font-medium bg-primary text-white rounded-6 rounded-right-0" data-localscroll="true">
                <span data-text="Get Started" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'>Get Started</span>
            </a>
            </div>
            <div className="max-w-full banner-btn-right animation-element">
            <a href="https://www.youtube.com/watch?v=WaSvMAl4zPw" className="fresco btn btn-solid btn-md btn-icon-left btn-hover-swp text-17 font-medium bg-primary text-white rounded-6 rounded-left-0">
                <span data-text="Watch Video" className="btn-txt">Watch Video </span>
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
    </section>
  )
}