"use client";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from "next-intl/client";
import React from 'react'

function Header() {
    const locale = useLocale();
    const router = useRouter();
    const pathName = usePathname();

    // const toggleLocale = () => {
    //     locale==='en'
    //     ? router.push(pathName, { locale: 'ar' })
    //     : router.push(pathName, { locale: 'en' })
    // }

    const toggleEn = () => {
        router.push(pathName, { locale: 'en' });
    }
    const toggleAr = () => {
        router.push(pathName, { locale: 'ar' });
    }
  return (
    <header id="site-header" className="main-header main-header-overlay">
        <div className="w-full h-full flex bg-primary pt-5 md:hidden">
          <div className="container flex gap-15 items-center justify-center self-stretch flex-grow-1 flex-shrink-1 transition-all">
            <div className="ld-fancy-heading relative">
              <span className="ld-fh-element relative mb-0/5em text-13 font-medium uppercase text-white">New!</span>
            </div>
            <div className="ld-fancy-heading relative pointer-events-auto">
              <span className="ld-fh-element relative mb-0/5em text-13 font-medium text-white">
                This huge collection gets bigger and bigger everyday.
                <u>Stay Tuned!</u>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full static flex items-center px-35 md:hidden">
          <div className="w-25percent static flex flex-col items-start pointer-events-auto p-10">
            <div className="module-logo flex navbar-brand-plain py-30" id="size-logo">
              <a className="navbar-brand flex p-0 relative" href="/" rel="home">
                <span className="navbar-brand-inner post-rel">
                  {/* <img src="/assets/images/demo/dark-ai/logo/logo.svg" alt="Dark AI"/> */}
                  <img src="/assets/images/logo-white.png" alt="Brilliant" width={200} />
                </span>
              </a>
            </div>
          </div>
          <div className="w-50percent static flex flex-col items-center p-10 module-menu">
            <div className="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none lqd-custom-menu-has-btn flex items-center fixed bg-white-10 rounded-10 pr-10 pb-5 pl-20">
              <ul className="reset-ul inline-ul link-white-40 link-14" data-localscroll="true" data-localscroll-options='{"itemsSelector":">li > a", "trackWindowScroll": true, "includeParentAsOffset": false}'>
                <li className="menu-item-object-page menu-item-home current-menu-item mr-40">
                  <a href="#banner">Home</a>
                </li>
                <li className="mr-40">
                  <a href="#features">Features</a>
                </li>
                <li className="mr-40">
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
              <div className="lqd-custom-menu-btn-wrap ml-40">
                <a href="#modal-subscribe" className="btn btn-solid btn-xs btn-icon-shaped text-14 rounded-6 py-5 px-10 text-white bg-primary" data-lity="modal-subscribe">
                  <span data-text="Join" className="btn-txt">Join</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-25percent static flex flex-row items-center justify-end gap-15 p-10">
            <div className="ld-dropdown-menu flex relative ld-dropdown-menu-underlined w-65" role="menubar">
              <span className="ld-module-trigger" role="button" data-ld-toggle="true" data-bs-toggle="collapse" data-bs-target="#dropdown-language" aria-controls="dropdown-language" aria-expanded="false" data-toggle-options='{ "type":  "hoverFade" }'>
                <span className="ld-module-trigger-txt text-15 font-medium text-white">
                {locale=='en' 
                ? (<span>En</span>)
                : (<span>AR</span>)
                }
                  <img width="48" height="48" src="/assets/images/demo/dark-ai/shape/Language1.png" alt="shape earth"/>
                </span>
              </span>
              <div className="ld-module-dropdown left collapse absolute" id="dropdown-language" aria-expanded="false" role="menuitem">
                <div className="ld-dropdown-menu-content">
                  <ul className="text-14 link-black">
                    {locale=='en'
                    ? (
                        <li>
                            <a href='/ar/' onClick={()=>toggleAr()}>AR</a>
                        </li>
                    )
                    : (
                        <li>
                            <a href='/en/' onClick={()=>toggleEn()}>EN</a>
                        </li>
                    )
                    }
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-full">
              <a href="#modal-subscribe" className="btn btn-solid btn-sm btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped text-15 font-500 bg-transparent border-2 border-white-10 rounded-6 text-white" data-lity="#modal-subscribe">
                <span data-text="Join Now" className="btn-txt">
                  Join Hub
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="lqd-mobile-sec relative bg-black">
          <div className="lqd-mobile-sec-inner navbar-header flex items-stretch w-full">
            <div className="lqd-mobile-modules-container empty"></div>
            <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile flex relative items-center justify-end border-none bg-transparent nav-trigger-dark p-0" data-ld-toggle="true" data-bs-toggle="collapse" data-bs-target="#lqd-mobile-sec-nav" aria-expanded="false" data-toggle-options='{ "changeClassnames":  {"html":  "mobile-nav-activated"} }'>
              <span className="sr-only">Menu</span>
              <span className="bars inline-block relative z-1">
                <span className="bars-inner flex flex-col w-full h-full">
                  <span className="bar inline-block"></span>
                  <span className="bar inline-block"></span>
                  <span className="bar inline-block"></span>
                </span>
              </span>
            </button>
            <a className="navbar-brand flex relative" href="./index-dark-ai.html">
              <span className="navbar-brand-inner">
                <img className="logo-default" src="/assets/images/logo-white.png" alt="Dark AI"/>
              </span>
            </a>
          </div>
          <div className="lqd-mobile-sec-nav w-full absolute z-10">
            <div className="mobile-navbar-collapse navbar-collapse collapse w-full bg-black text-white" id="lqd-mobile-sec-nav" aria-expanded="false" role="navigation">
              <ul id="mobile-primary-nav" className="reset-ul lqd-mobile-main-nav main-nav nav" data-localscroll="true" data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'>
                <li className="current-menu-item">
                  <a className="text-white" href="#banner">Home</a>
                </li>
                <li>
                  <a className="text-white" href="#features">Features</a>
                </li>
                <li>
                  <a className="text-white" href="#how-it-works">How It Works</a>
                </li>
                <li>
                  <a className="text-white" href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header