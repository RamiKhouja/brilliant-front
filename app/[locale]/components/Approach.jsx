import React from 'react'

async function getApproach(locale) {
    const token = process.env.API_TOKEN;
    const base_url= process.env.BASE_URL;
    const options = { 
        headers: { Authorization: `Bearer ${token}` },
        next: {
            revalidate: 0
        }
    };
    const res = await fetch(process.env.BASE_URL + '/api/approach?populate=*&locale='+locale, options);
    return res.json();
  }
  
export default async function Approach({locale}) {
    const approach = await getApproach(locale)
  return (
    <section 
        id="parallax-section" 
        className="lqd-section parallax-bg bg-before w-full min-h-100vh flex flex-col items-center justify-center bg-no-repeat bg-bottom-center bg-cover p-10" 
        style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/parallax-bg.jpg)'}} 
        data-parallax="true" 
        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}' 
        data-parallax-from='{"y": "0px", "scaleX" : 1, "scaleY" : 1}' 
        data-parallax-to='{"y": "-300px", "scaleX" : 0.3, "scaleY" : 0.3}'
    >
        <h1 className="lqd-text-reveal-el text-120 mt-0 mb-20 text-yellow-100 text-center" 
            data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
        >
            {approach.data.attributes.title}
        </h1>
        <div className="elementor-widget-container">
            <p className="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center text-36" 
                data-split-text={locale=='en'&&'true'}
                data-split-options={locale=='en'&&'{"type": "chars, words"}'} 
                data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
            >
            {approach.data.attributes.description}
            </p>
        </div>
    </section>
  )
}