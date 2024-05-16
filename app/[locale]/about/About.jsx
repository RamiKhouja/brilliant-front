import React from 'react'
import Footer from '../components/Footer';

async function getAbouts(locale) {
  const token = process.env.API_TOKEN;
  const options = { 
      headers: { Authorization: `Bearer ${token}` },
      next: {
          revalidate: 0
      }
  };
  const res = await fetch(process.env.BASE_URL + '/api/abouts?populate=*&locale='+locale, options);
  return res.json();
}

const renderIcon = (index) => {
switch (index) {
    case 0:
        return (
            <img src="/assets/images/icons/cloud-services.svg" alt="" width={50} />
        )
        break;
    case 1:
        return (
            <img src="/assets/images/icons/cloud-link.svg" alt="" width={50} />
        )
        break;
    case 2:
        return (
            <img src="/assets/images/icons/cloud-event.svg" alt="" width={50} />
        )
        break;
    case 3:
        return (
            <img src="/assets/images/icons/coronavirus.svg" alt="" width={50} />
        )
        break;
    case 4:
        return (
            <img src="/assets/images/icons/growth.svg" alt="" width={50} />
        )
        break;
    case 5:
      return (
          <img src="/assets/images/icons/machine-learning.svg" alt="" width={50} />
      )
      break;
    default:
        return (
            <img src="/assets/images/icons/cloud-services.svg" alt="" width={50} />
        )
  }
}

export default async function AboutComponent({locale, t}) {
  const abouts = await getAbouts(locale)
  return (
    <div dir={locale==='ar'?('rtl'):('ltr')}>
        <main className="content bg-black" id="lqd-site-content" >
          <div className="lqd-section px-10 pb-50" style={{paddingTop: 220}}>
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
                <h3 className="lqd-text-reveal-el text-78 text-yellow-100 text-center mb-100">
                  {t("about")}<br/>{t("brilliant")}
                </h3>

                <div className="row h-full">
                  <div className="col col-12 p-0 min-h-100vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 module-top mb-30 lg:flex-col lg:justify-center gap-30">
                    <div className="w-40percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full">
                        <div
                          className="lqd-imggrp-single block relative max-w-full text-center"
                          data-parallax="true"
                          data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom top"}'
                          data-parallax-from='{"y": "0px", "z": "0px", "scaleX" : 1.2, "scaleY" : 1.2}'
                          data-parallax-to='{"y": "0px", "z": "120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                        >
                          <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                              <figure
                              className="w-full relative"
                              //data-reveal="true"
                              data-reveal-options='{"direction": "tb"}'
                              >
                              <img
                                  className="rounded-30"
                                  src="/assets/images/custom/hand.jpg"
                                  alt="user insight"
                              />
                              </figure>
                          </div>
                        </div>
                    </div>
                    <div
                        className="w-50percent flex flex-col gap-30 p-10 lg:p-50 transition-bg flex-grow-1 flex-shrink-0 lg:w-full"
                        data-custom-animations="true"
                        data-ca-options='{"animationTarget": ".animation-element:not([data-split-text]), .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                    >
                      <div className="ld-fancy-heading relative max-w-full animation-element">
                        <h2
                            className="ld-fh-element relative m-0 text-58 leading-60 text-left"
                        >
                          {/* <span className="font-accent font-normal">User</span> */}
                          {t("partner")} <br/>{t("success")}
                        </h2>
                      </div>
                      <div className="max-w-full">
                        <p
                            className="lqd-text-reveal-el mt-0 mb-0 text-30 leading-40 text-yellow-100 animation-element"
                            //data-split-text={locale=='en'&&'true'}
                            data-split-options={locale=='en'&&'{"type": "words, chars"}'}
                            data-parallax="true"
                            data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                            data-parallax-from='{"opacity" : 0.2}'
                            data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                        >
                            {t("description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row col col-12 w-full my-50' style={{rowGap: 40}}>
                  <div className="col-xl-3 col-sm-6 text-center">
                    <h2 className="relative text-64 shadow-txt-primary">20+</h2>
                    <h3 className="relative text-24 mt-25 tracking-1/5">{t("range")}</h3>
                  </div>
                  <div className="col-xl-3 col-sm-6 text-center">
                    <h2 className="relative text-64 shadow-txt-primary">20<span className='text-30 tracking-1/5'> {t("years")}</span></h2>
                    <h3 className="relative text-24 mt-15 tracking-1/5">{t("experience")}</h3>
                  </div>
                  <div className="col-xl-3 col-sm-6 text-center">
                    <h2 className="relative text-64 shadow-txt-primary">4+</h2>
                    <h3 className="relative text-24 mt-25 tracking-1/5">{t("countries")}</h3>
                  </div>
                  <div className="col-xl-3 col-sm-6 text-center">
                    <h2 className="relative text-64 shadow-txt-primary">30+</h2>
                    <h3 className="relative text-24 mt-25 tracking-1/5">{t("team")}</h3>
                  </div>
                </div>

                <div className='row col col-12 w-full my-50' style={{rowGap: 40}}>
                  {abouts.data.map((about, index) => (
                  <div key={index} className="col-sm-12 col-lg-6 p-20">
                    {renderIcon(index)}
                    <p 
                      className="lqd-text-reveal-el relative text-20 mt-25 text-yellow-100" 
                      style={{textAlign: "justify"}}
                      data-split-text={`${locale=="en" ? 'true': 'false'}`} 
                      data-split-options={`${locale=='en' && ('{"type": "words, chars"}')}`} 
                      data-parallax="true" 
                      data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 50%", "end": "bottom bottom", "scrub" : 3}' 
                      data-parallax-from='{"opacity" : 0.2}' 
                      data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                    >
                      {about.attributes.description}
                    </p>
                  </div>
                  ))}
                </div>
              </div>
            </div>
        </main>

        <Footer/>
    </div>
  )
}