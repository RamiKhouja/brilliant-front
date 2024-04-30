import React from 'react'

async function getCompanies(locale) {
  const token = process.env.API_TOKEN;
  const base_url= process.env.BASE_URL;
  const options = { 
      headers: { Authorization: `Bearer ${token}` },
      next: {
          revalidate: 0
      }
  };
  const res = await fetch(process.env.BASE_URL + '/api/companies?populate=*&locale='+locale, options);
  return res.json();
}

export default async function Products({locale}) {
  const companies = await getCompanies(locale)
  return (
    <section className="lqd-section testimonial bg-no-repeat transition-border py-75" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/testimonial/testimonial-bg1.png)'}} data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.8, "scaleY" : 0.8, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'>
              <div className="container">
                <div className="row justify-center transition-bg">
                  <div className="col col-12 col-lg-9 flex flex-col gap-40">
                    
                    <div className="carousel-container relative carousel-nav-shaped carousel-dots-inside carousel-dots-mobile-inside carousel-dots-mobile-center transition-all animation-element">
                    <div
                      className="carousel-items relative -mr-30 -ml-30"
                      data-lqd-flickity='{"pageDots": true, "dotsIndicator": "numbers", "numbersStyle": "circle", "cellAlign": "left", "groupCells": false, "prevNextButtons": false, "dotsAppendTo": "self"}'
                    >
                        <div className="flickity-viewport relative w-full overflow-hidden">
                          <div className="flickity-slider flex w-full h-full relative items-start text-center">
                            {companies.data.map((company, index)=> (
                            <div key={index} className="carousel-item flex flex-col justify-center px-30 text-24 leading-30">
                              <div className="ld-fancy-heading relative max-w-full text-center animation-element mb-1/2em">
                                {company.attributes.logo.data && (
                                  <img width={200} src={process.env.BASE_URL+company.attributes.logo.data.attributes.url}/>
                                )}
                              </div>
                              <div className="ld-fancy-heading relative max-w-full text-center animation-element mb-1/5em">
                                <h1 className="ld-fh-element relative m-0" style={{fontSize: 64}}  data-split-options='{"type": "chars, words"}'>
                                  {/* <span className="font-accent font-normal"> </span> */}
                                  {company.attributes.name}
                                </h1>
                              </div>
                              <p className="mb-1/5em">{company.attributes.description}</p>
                              {/* <h6 className="text-primary mt-1em mb-0/5em">Daniel Crack, Envato</h6> */}
                            </div>
                            ))}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 p-0 flex-grow-1 flex-shrink-0 module-svg">
                    <div className="carousel-container relative carousel-nav-shaped">
                    <div
  className="carousel-items relative lqd-fade-sides"
  data-lqd-flickity='{"marquee": true, "marqueeTickerSpeed": "0.2", "pauseAutoPlayOnHover": false}'
>
                        <div className="flickity-viewport relative w-full overflow-hidden">
                          <div className="flickity-slider flex w-full h-full relative items-start">
                            <div className="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                              <div className="carousel-item-inner relative w-full">
                                <div className="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                {companies.data.map((company, index)=> company.attributes.logo.data && (
                                  <div key={index} className="flex justify-center text-primary">
                                    <img width={100} src={process.env.BASE_URL+company.attributes.logo.data.attributes.url}/>
                                  </div>
                                ))}
                                <div className="flex justify-center text-primary">
                                  <img src="/assets/images/logo.png" alt="Brilliant" width={200} />
                                </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                              <div className="carousel-item-inner relative w-full">
                                <div className="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                  {companies.data.map((company, index)=> company.attributes.logo.data && (
                                    <div key={index} className="flex justify-center text-primary">
                                      <img width={100} src={process.env.BASE_URL+company.attributes.logo.data.attributes.url}/>
                                    </div>
                                  ))}
                                  <div className="flex justify-center text-primary">
                                    <img src="/assets/images/logo.png" alt="Brilliant" width={200} />
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}