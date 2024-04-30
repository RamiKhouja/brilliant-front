import React from 'react'

function CarouselBtn() {
  return (
    <section className="lqd-section carousel-button py-100" data-custom-animations="true" data-ca-options='{"animationTarget": "[data-lqd-flickity]> .flickity-viewport > .flickity-slider > .carousel-item > .carousel-item-inner", "duration" : 800, "delay" : 75, "ease": "expo.out", "direction": "random", "initValues": {"scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'>
              <div className="container-fluid p-0">
                <div className="row m-0">
                  <div className="col col-12 p-0">
                    <div className="carousel-container relative carousel-nav-shaped">
                      <div className="carousel-items relative lqd-fade-sides" data-lqd-flickity='{"marquee": true, "percentPosition": false, "columnsAutoWidth": true, "marqueeTickerSpeed": "0.5", "pauseAutoPlayOnHover": false}'>
                        <div className="flickity-viewport relative w-full overflow-hidden">
                          <div className="flickity-slider flex w-full h-full relative items-center">
                            <div className="carousel-item flex flex-col justify-center has-one-child">
                              <div className="flex flex-row gap-30 whitespace-nowrap">
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Help me write a story" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Help me write a story </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Help me plan my trip" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Help me plan my trip </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Find me a good restaurant" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Find me a good restaurant </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Help me get fit" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Help me get fit </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Write a Python Script" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Write a Python Script </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Create a 3 course menu" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Create a 3 course menu </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="carousel-item flex flex-col justify-center has-one-child">
                              <div className="flex flex-row gap-30 whitespace-nowrap">
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Help me write a story" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Help me write a story </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Help me plan my trip" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Help me plan my trip </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Find me a good restaurant" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Find me a good restaurant </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Help me get fit" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Help me get fit </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Write a Python Script" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Write a Python Script </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
                                <a className="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                  <span data-text="Create a 3 course menu" className="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}' data-split-text="true" data-split-options='{"type":  "chars, words"}'> Create a 3 course menu </span>
                                  <span className="btn-icon text-1em text-primary mr-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewBox="0 0 12.885 12.894">
                                      <path d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z" transform="translate(6.434 12.674)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </a>
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

export default CarouselBtn