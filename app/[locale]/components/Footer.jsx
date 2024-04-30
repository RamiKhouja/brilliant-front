import React from 'react'

function Footer() {
  return (
    <footer id="site-footer" className="main-footer pt-120 px-5percent bg-black" data-sticky-footer="true" data-sticky-footer-options='{"shadow": "1"}'>
          <div className="container-fluid flex flex-wrap p-0">
            <div className="w-20percent flex flex-col gap-20 p-10 transition-bg module-logo lg:w-full lg:flex-row">
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
            </div>
            <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
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
            </div>
            <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
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
            </div>
            <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
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
            </div>
            <div className="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
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
            </div>
            <div className="w-full flex justify-between items-center p-10 mt-70 mb-40 transition-bg lg:flex-wrap">
              <div className="ld-fancy-heading relative w-25percent lg:w-full lg:text-center">
                <p className="ld-fh-element relative mb-0/5em text-12 leading-20 tracking-0/1 text-white-30">2023 AIHub. All images are for demo purposes only. These Terms will be applied fully and affect.</p>
              </div>
              <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none module-social lg:w-full lg:text-center">
                <ul className="reset-ul inline-ul">
                  <li className="mr-25">
                    <a className="text-white-40 text-15" href="#">
                      <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                        <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                      </span>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li className="mr-25">
                    <a className="text-white-40 text-15" href="#">
                      <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                        <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </span>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a className="text-white-40 text-15" href="#">
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer