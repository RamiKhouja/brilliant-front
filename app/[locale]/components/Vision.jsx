import React from 'react'

async function getVision(locale) {
  const token = process.env.API_TOKEN;
  const options = { 
      headers: { Authorization: `Bearer ${token}` },
      next: {
          revalidate: 0
      }
  };
  const res = await fetch(process.env.BASE_URL + '/api/vision?populate=*&locale='+locale, options);
  return res.json();
}

async function getMission(locale) {
  const token = process.env.API_TOKEN;
  const options = { 
      headers: { Authorization: `Bearer ${token}` },
      next: {
          revalidate: 0
      }
  };
  const res = await fetch(process.env.BASE_URL + '/api/mission?populate=*&locale='+locale, options);
  return res.json();
}

export default async function Vision({locale}) {
  const vision = await getVision(locale)
  const mission = await getMission(locale)

  return (
    <>
    <section className="lqd-section pt-120 pb-400 bg-center bg-no-repeat bg-cover transition-bg" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/vision-bg.jpeg)'}}>
              <div className="container">
                <div className="row gap-120">
                  <div className="col col-12 p-0" 
                    data-parallax="true" 
                    data-parallax-options='{"start": "top bottom", "end": "bottom+=0px top"}' 
                    data-parallax-from='{"y": "20px", "opacity" : 0.8}' 
                    data-parallax-to='{"y": "0px", "opacity" : 1}'
                  >
                    <div className="elementor-widget-container">
                      <h3 className="lqd-text-reveal-el text-78 mt-0 mb-20 text-yellow-100 text-center" 
                        data-split-text={locale=='en'&&'true'}
                        data-split-options={locale=='en'&&'{"type": "chars, words"}'} 
                        data-parallax="true" 
                        data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' 
                        data-parallax-from='{"opacity" : 0.2}' 
                        data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                      >
                        {vision.data.attributes.title}
                      </h3>
                    </div>
                    <div className="elementor-widget-container">
                      <p className="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center text-36" 
                        data-split-text={locale=='en'&&'true'}
                        data-split-options={locale=='en'&&'{"type": "chars, words"}'}
                        data-parallax="true" 
                        data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' 
                        data-parallax-from='{"opacity" : 0.2}' 
                        data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                      >
                        {vision.data.attributes.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="lqd-section pt-120 pb-400 bg-center bg-no-repeat bg-cover transition-bg" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/float-text/bg-h.png)'}}>
              <div className="container">
                <div className="row gap-120">
                  <div className="col col-12 p-0" data-parallax="true" data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom+=0px top"}' data-parallax-from='{"y": "120px", "opacity" : 0.6}' data-parallax-to='{"y": "0px", "opacity" : 1}'>
                    <div className="elementor-widget-container">
                      <h3 className="lqd-text-reveal-el text-78 mt-0 mb-20 text-yellow-100 text-center" 
                        data-split-text={locale=='en'&&'true'}
                        data-split-options={locale=='en'&&'{"type": "chars, words"}'}
                        data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                      >
                        {mission.data.attributes.title}
                      </h3>
                    </div>
                    <div className="elementor-widget-container">
                      <p className="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center text-36" 
                        data-split-text={locale=='en'&&'true'}
                        data-split-options={locale=='en'&&'{"type": "chars, words"}'} 
                        data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}' data-parallax-from='{"opacity" : 0.2}' data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                      >
                      {mission.data.attributes.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
  )
}