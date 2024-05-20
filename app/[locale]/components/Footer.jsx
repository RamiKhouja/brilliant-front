import React from 'react'

function Footer() {
  return (
    <footer id="site-footer" className="main-footer px-5percent bg-black" data-sticky-footer="true" data-sticky-footer-options='{"shadow": "1"}'>
          <div className="container-fluid flex flex-wrap p-0">
            {/* <div className="w-20percent flex flex-col gap-20 p-10 transition-bg module-logo lg:w-full lg:flex-row">
              <div className="lqd-imggrp-single block relative">
                <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img width="100" src="/assets/images/logo-white.png" alt="Dark AI"/>
                  </figure>
                </div>
              </div>
              <div className="max-w-full self-start">
                <a href="#" className="btn btn-solid btn-icon-shaped text-10 bg-white-10 rounded-100 px-10 text-white">
                  <span data-text="EN" className="btn-txt">EN </span>
                </a>
              </div>
            </div> */}
            {/* <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
              <div className="ld-fancy-heading relative">
                <h6 className="ld-fh-element relative mb-0/5em text-15 font-medium">Company</h6>
              </div>
              <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                <ul className="reset-ul link-white-50 text-15">
                  <li className="mb-15">
                    <a href="#">
                      Account
                    </a>
                  </li>
                  <li className="mb-15">
                    <a href="#">
                      Careers
                      <span className="link-badge" style={{'--lqd-badge-color': '#747474'}}>Soon</span>
                    </a>
                  </li>
                  <li className="mb-15">
                    <a href="#">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
              <div id="ld-fancy-heading-6447b46bcde9f" className="ld-fancy-heading relative">
                <h6 className="ld-fh-element relative mb-0/5em text-15 font-medium">Contact</h6>
              </div>
              <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                <ul className="reset-ul link-white-50 text-15">
                  <li className="mb-15">
                    <a href="#">
                      Media
                    </a>
                  </li>
                  <li className="mb-15">
                    <a href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
              <div id="ld-fancy-heading-6447b46bd5918" className="ld-fancy-heading relative">
                <h6 className="ld-fh-element relative mb-0/5em text-15 font-medium">Pages</h6>
              </div>
              <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                <ul className="reset-ul link-white-50 text-15">
                  <li className="mb-15">
                    <a href="#">
                      About
                    </a>
                  </li>
                  <li className="mb-15">
                    <a href="#">
                      Features
                    </a>
                  </li>
                  <li className="mb-15">
                    <a href="#">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
              <div id="ld-fancy-heading-6447b46bdd7a2" className="ld-fancy-heading relative">
                <h6 className="ld-fh-element relative mb-0/5em text-15 font-medium">Company</h6>
              </div>
              <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                <ul className="reset-ul link-white-50 text-15">
                  <li className="mb-15">
                    <a href="#">
                      Account
                    </a>
                  </li>
                  <li className="mb-15">
                    <a href="#">
                      Careers
                      <span className="link-badge" style={{'--lqd-badge-color': '#747474'}}>2</span> </a>
                  </li>
                  <li>
                    <a href="#">
                      Subscribe
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="w-full flex justify-between items-center p-10 mt-20 mb-20 transition-bg lg:flex-wrap">
              <div className="ld-fancy-heading relative w-25percent lg:w-full lg:text-center">
              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                  <figure className="w-full relative">
                    <img width="100" src="/assets/images/logo-white.png" alt="Dark AI"/>
                  </figure>
                </div>
              </div>
              <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none module-social lg:w-full lg:text-center">
                <ul className="reset-ul inline-ul">
                  <li className="mr-25">
                    <a className="text-white-40" href="https://www.facebook.com/e.brillinatco" target='_blank'>
                      <span className="link-icon text-20 inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                      </span>
                      <span className='text-15 mt-5'>Facebook</span>
                    </a>
                  </li>
                  <li className="mr-25">
                    <a className="text-white-40" href="https://www.instagram.com/e.brilliantco" target='_blank'>
                      <span className="link-icon text-20 inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                          <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>
                      </span>
                      <span className='text-15 mt-5'>Instagram</span>
                    </a>
                  </li>
                  <li className="mr-25">
                    <a className="text-white-40" href="https://www.linkedin.com/company/42117997" target='_blank'>
                      <span className="link-icon text-20 inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                        <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                      </span>
                      <span className='text-15 mt-5'>Linkedin</span>
                    </a>
                  </li>
                  <li className="mr-25">
                    <a className="text-white-40" href="https://twitter.com/brilliantco1" target='_blank'>
                      <span className="link-icon text-20 inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                          <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                        </svg>
                      </span>
                      <span className='text-15 mt-5'>Twitter</span>
                    </a>
                  </li>
                  {/* <li>
                    <a className="text-white-40 text-15" href="#">
                      <span>Privacy Policy</span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer