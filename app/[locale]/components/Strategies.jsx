import React from 'react'

async function getStrategies(locale) {
    const token = process.env.API_TOKEN;
    const options = { 
        headers: { Authorization: `Bearer ${token}` },
        next: {
            revalidate: 0
        }
    };
    const res = await fetch(process.env.BASE_URL + '/api/strategies?populate=*&locale='+locale, options);
    return res.json();
}

export default async function Strategies({locale, t}) {
    const strategies = await getStrategies(locale)

    const renderIcon = (index) => {
        switch (index) {
            case 0:
                return (
                    <img src="/assets/images/icons/lightbulb.svg" alt="" width={50} />
                    // <svg className="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="40.09" height="40.09" viewBox="0 0 40.09 40.09" fill="#FFFFFF">
                    //     <path d="M181.632,298.458h20.826V277.632h-9.7a1.344,1.344,0,0,0-1.432,1.432v7.484a1.506,1.506,0,0,0-.976,1.5,1.774,1.774,0,0,0,.423,1.2,1.589,1.589,0,0,0,1.269.488,1.67,1.67,0,0,0,1.171-.488,1.585,1.585,0,0,0,.521-1.2,1.438,1.438,0,0,0-.325-1.021,1.88,1.88,0,0,0-.651-.476v-7.484h8.265v17.962H183.064V279.064H187.1v-1.432h-5.467Zm-6.118,9.632A3.47,3.47,0,0,1,172,304.576V271.514A3.47,3.47,0,0,1,175.514,268h33.061a3.47,3.47,0,0,1,3.514,3.514v33.061a3.47,3.47,0,0,1-3.514,3.514Zm0-1.432h33.061a2.24,2.24,0,0,0,2.083-2.083V271.514a2.24,2.24,0,0,0-2.083-2.083H175.514a2.24,2.24,0,0,0-2.083,2.083v33.061a2.24,2.24,0,0,0,2.083,2.083Zm-2.083-37.226v0Z" transform="translate(-172 -268)" fill="currentColor"></path>
                    // </svg>
                )
                break;
            case 1:
                return (
                    <img src="/assets/images/icons/signal.svg" alt="" width={50} />
                )
                break;
            case 2:
                return (
                    <img src="/assets/images/icons/expand.svg" alt="" width={50} />
                )
                break;
            case 3:
                return (
                    <img src="/assets/images/icons/terminal.svg" alt="" width={50} />
                )
                break;
            case 4:
                return (
                    <img src="/assets/images/icons/dataflow.svg" alt="" width={50} />
                )
                break;
            default:
                return (
                    <img src="/assets/images/icons/lightbulb.svg" alt="" width={50} />
                )
          }
    }
  return (
    <section className="lqd-section features py-60" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "duration" : 850, "startDelay" : 300, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'>
        <div className="flex justify-center">
            <img src="/assets/images/custom/split.png" className='w-1/2 mb-50' alt="" />
        </div>
        <div className="container" id="features">
            <h1 className="lqd-text-reveal-el text-78 mt-0 mb-70 text-yellow-100 text-center" 
                data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
            >
                {t('our-approach')}
            </h1>
        <div className="row justify-around self-stretch gap-60">
            {strategies.data.map((strategy, index) => (
            <div className="col flex-auto w-30percent sm:w-full" key={index}>
                <div className="flex flex-col gap-30 animation-element">
                    <div className="max-w-full flex justify-center items-center text-40 text-purple border-primary mb-10">
                        {renderIcon(index)}
                    </div>
                    <div className="max-w-full text-center">
                        <p className="lqd-text-reveal-el text-30 font-medium leading-30 m-0 text-purple" data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 50%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'>
                            {strategy.attributes.title}
                        </p>
                    </div>
                    <div className="max-w-full text-center">
                        <p className="lqd-text-reveal-el text-20 font-normal leading-25 text-yellow-100 m-0" data-split-text={`${locale=="en" ? 'true': 'false'}`} data-split-options={`${locale=='en' && ('{"type": "words, chars"}')}`} data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 50%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'>
                            {strategy.attributes.description}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}