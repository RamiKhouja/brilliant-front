import React from 'react'

function Newsletter() {
  return (
    <section className="lqd-section newsletter w-full flex flex-col items-center justify-center transition-all pt-200 pb-200 bg-black bg-center" id="newsletter" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/n-bg.png)'}}>
              <div className="container flex flex-col justify-center gap-40 p-10" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "startDelay" : 400, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.6, "scaleY" : 0.6, "rotationZ" : 1, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'>
                <div className="w-full text-center">
                  <div className="ld-fancy-heading relative animation-element">
                    <h2 className="ld-fh-element relative m-0" data-split-text="true" data-split-options='{"type": "chars, words"}'>
                      <span className="font-accent font-normal">Ready to </span>
                      Launch?
                    </h2>
                  </div>
                </div>
                <div className="w-full text-center">
                  <div className="ld-fancy-heading relative animation-element">
                    <p className="ld-fh-element relative mb-0/5em text-20 leading-26">Join us today and experience the power of AI text creation for yourself!</p>
                  </div>
                </div>
                <div className="w-full text-center">
                  <div className="ld-sf relative ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--round  ld-sf--border-none ld-sf--button-show ld-sf--button-inline animation-element">
                    <form className="ld_subscribe_form ld_sf_form relative" method="post" action="#">
                      <p className="pb-20">
                        <input type="email" className="block w-full rounded-2 bg-white-5 text-white-70 text-15" name="email" placeholder="Enter your email address"/>
                      </p>
                      <button type="submit" className="inline-flex items-center justify-center m-0 rounded-2 relative text-white bg-primary text-15">
                        <span className="submit-text">Subscribe</span>
                        <span className="ld-sf-spinner rounded-full absolute overflow-hidden">
                          <span className="lqd-overlay flex rounded-full">Sending </span>
                        </span>
                      </button>
                    </form>
                    <div className="ld_sf_response"></div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Newsletter