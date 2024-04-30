import { useLocale, useTranslations } from 'next-intl';
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

export default async function About() {
  const locale = useLocale();
  const abouts = await getAbouts(locale)

  return (
    <div dir={locale==='ar'?('rtl'):('ltr')}>
        <main className="content bg-black" id="lqd-site-content" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/page-bg-5.svg)'}}>
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
                <div className="row gap-120">
                {abouts.data.map((about, index) => (
                  <div key={index}
                    className="col col-12 p-0" 
                    data-parallax="true" 
                    data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom+=0px top"}' 
                    data-parallax-from='{"y": "20px", "opacity" : 0.8}' 
                    data-parallax-to='{"y": "0px", "opacity" : 1}'
                  >
                    <div className="elementor-widget-container">
                      <div className="flex row gap-40 ">
                        {index % 2 == 0 && (
                          <div
                          className="lqd-imggrp-single block relative max-w-full text-center col col-5"
                          data-parallax="true"
                          data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom top"}'
                          data-parallax-from='{"y": "-60px", "z": "0px", "scaleX" : 1.2, "scaleY" : 1.2}'
                          data-parallax-to='{"y": "60px", "z": "120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                          >
                          <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                              <figure
                              className="w-full relative"
                              //data-reveal="true"
                              data-reveal-options='{"direction": "tb"}'
                              >
                              <img src={process.env.BASE_URL+about.attributes.image.data.attributes.url} className='w-full'/>
                              </figure>
                          </div>
                          </div>
                        
                        )}
                        <div className='col'>
                        {locale=='en'
                        ? (
                          <p className="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-left text-30" 
                            data-split-text='true'
                            data-split-options={locale=='en'&&'{"type": "chars, words"}'}
                            data-parallax="true" 
                            data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' 
                            data-parallax-from='{"opacity" : 0.2}' 
                            data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                          >
                            {about.attributes.description}
                          </p>
                        )
                        : (
                          <p className="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center text-30" 
                            data-parallax="true" 
                            data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' 
                            data-parallax-from='{"opacity" : 0.2}' 
                            data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                          >
                            {about.attributes.description}
                          </p>
                        )}
                        </div>
                        {index % 2 == 1 && (
                        <div
                        className="lqd-imggrp-single block relative max-w-full text-center col col-5"
                        data-parallax="true"
                        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom top"}'
                        data-parallax-from='{"y": "-60px", "z": "0px", "scaleX" : 1.2, "scaleY" : 1.2}'
                        data-parallax-to='{"y": "60px", "z": "120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                        >
                        <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                            <figure
                            className="w-full relative"
                            //data-reveal="true"
                            data-reveal-options='{"direction": "tb"}'
                            >
                            <img src={process.env.BASE_URL+about.attributes.image.data.attributes.url} className='w-full'/>
                            </figure>
                        </div>
                        </div>
                        )}
                      </div>
                    </div>
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
