import React from 'react'

async function getEvents(locale) {
  const token = process.env.API_TOKEN;
  const base_url= process.env.BASE_URL;
  const options = { 
      headers: { Authorization: `Bearer ${token}` },
      next: {
          revalidate: 0
      }
  };
  const res = await fetch(process.env.BASE_URL + '/api/events?populate=*&locale='+locale, options);
  return res.json();
}

export default async function Events({locale}) {
  const events = await getEvents(locale)
  return (
    <section className="lqd-section faq py-80" id="faq" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 1000, "delay" : 70, "ease": "expo.out", "initValues": {"y": "30px", "scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations": {"y": "0px", "scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'>
              <div className="container">
                <div className="row">
                  <div className="col col-12 p-0">
                    <div className="accordion accordion-xl animation-element" id="accordion-faq" role="tablist" aria-multiselectable="true">
                    {events.data.map((ev, index) => (  
                      <div className="accordion-item panel" key={index}>
                        <div className="accordion-heading" role="tab" id={`heading-item-${index}`}>
                          <h4 className="accordion-title text-yellow-200">
                            <a className="collapsed text-22" role="button" data-bs-toggle="collapse" data-bs-parent="#accordion-faq" href={`#collapse-item-${index}`} aria-expanded="false" aria-controls={`collapse-item-${index}`}>
                              <div className="flex row gap-20" style={{alignItems: 'baseline'}}>
                                <span className="accordion-title-txt text-40 text-primary">{ev.attributes.year}</span>
                                <span className="accordion-title-txt text-white">{ev.attributes.title}</span>
                              </div>
                              <span className="accordion-expander text-24 pl-1em">
                                <i className="lqd-icn-ess icon-ion-ios-add"></i>
                                <i className="lqd-icn-ess icon-ion-ios-remove"></i>
                              </span>
                            </a>
                          </h4>
                        </div>
                        <div id={`collapse-item-${index}`} className="accordion-collapse collapse" role="tabpanel" aria-labelledby={`heading-item-${index}`} data-bs-parent="#accordion-faq">
                          <div className="accordion-content">
                            <p>{ev.attributes.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}