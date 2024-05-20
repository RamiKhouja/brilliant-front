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
  const res = await fetch(process.env.BASE_URL + '/api/events?populate=*&sort=id%3Adesc&locale='+locale, options);
  return res.json();
}

export default async function Events({locale, t}) {
  const events = await getEvents(locale)
  return (
  <>
    <link rel="stylesheet" href="/assets/css/tailwind.css"/>
    <section className="lqd-section faq py-80" id="faq" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 1000, "delay" : 70, "ease": "expo.out", "initValues": {"y": "30px", "scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations": {"y": "0px", "scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'>
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="ml-0 md:ml-12 w-full sticky">
          <h3 className="lqd-text-reveal-el lg-text-78 text-yellow-100 text-center mb-20">
          {t('our-timeline')}
          </h3>
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 border-yellow-555 absolute h-full border"
                style={{
                  right: "50%",
                  border: "2px solid #8777E0",
                  borderRadius: "1%"
                }}
              ></div>
              <div
                className="border-2-2 border-yellow-555 absolute h-full border"
                style={{
                  left: "50%",
                  border: "2px solid #8777E0",
                  borderRadius: "1%"
                }}
              ></div>
              {events.data.map((ev, index) => 
                index % 2 == 0 ? (
              <div className={`mb-8 flex justify-between flex-row-reverse items-center w-full ${locale=='en'?'left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5-12"></div>
                <div className="order-1 w-5-12 px-1 py-4 text-right">
                  <p 
                    className="mb-3 text-30 text-primary" 
                    dir='ltr'
                    style={{fontFamily: "Eurostile"}}
                  >
                    {ev.attributes.year}
                  </p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    {ev.attributes.title}
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    {ev.attributes.description}
                  </p>
                </div>
              </div>
                ):(
              <div className={`mb-8 flex justify-between items-center w-full ${locale=='en'?'right-timeline' : 'left-timeline'}`}>
                  <div className="order-1" style={{width: '59%'}}></div>
                  <div className={`order-1 px-1 py-4 ${locale=='en'?'text-left' : 'text-right'}`} style={{width: '41%'}}>
                    <p 
                      className="mb-3 text-30 text-primary" 
                      dir='ltr'
                      style={{fontFamily: "Eurostile"}}
                    >
                      {ev.attributes.year}
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">{ev.attributes.title}</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    {ev.attributes.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}