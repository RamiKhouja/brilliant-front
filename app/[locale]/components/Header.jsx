"use client";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from "next-intl/client";
import React from 'react'

function Header() {
    const locale = useLocale();
    const router = useRouter();
    const pathName = usePathname();
    const t = useTranslations('header');

    const toggleLocale = () => {
        locale==='en'
        ? router.push(pathName, { locale: 'ar' })
        : router.push(pathName, { locale: 'en' })
    }

    // const toggleEn = () => {
    //     router.push(pathName, { locale: 'en' });
    // }
    // const toggleAr = () => {
    //     router.push(pathName, { locale: 'ar' });
    // }
  return (
    <header id="site-header" className="main-header main-header-overlay"  dir={locale=='ar'?'rtl':'ltr'}>
        <div className="w-full static hidden lg:visible lg:flex xl:visible xl:flex px-35 md:hidden xxl:flex items-center">
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
            <div className={`lqd-fancy-menu lqd-custom-menu lqd-menu-td-none lqd-custom-menu-has-btn flex items-center fixed bg-white-10 rounded-10 pb-5 ${locale=='ar' ? 'pl-10 pr-20' : 'pr-10 pl-20'}`}>
              <ul className="reset-ul inline-ul link-white-40 link-14" data-localscroll="true" data-localscroll-options='{"itemsSelector":">li > a", "trackWindowScroll": true, "includeParentAsOffset": false}'>
                <li className={`menu-item-object-page menu-item-home current-menu-item ${locale=='ar'?'ml-40':'mr-40'}`}>
                  <a href="/">{t('home')}</a>
                </li>
                <li className="mx-20">
                  <a href="/#features">{t('strategies')}</a>
                </li>
                <li className="mx-20">
                  <a href="/#about">{t('about-us')}</a>
                </li>
                <li className="mx-20">
                  <a href="/#vision">{t('vision')}</a>
                </li>
                <li>
                  <a href="/#products">{t('products')}</a>
                </li>
              </ul>
              <div className={`lqd-custom-menu-btn-wrap mt-5 ${locale=='ar'?'mr-40':'ml-40'}`}>
                <a href="#modal-subscribe" className="btn btn-solid btn-xs btn-icon-shaped text-14 rounded-6 py-5 px-10 text-white bg-primary" data-lity="modal-subscribe">
                  <span data-text="Join" className="btn-txt">{t('contact-us')}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-25percent static flex flex-row items-center justify-center  gap-15 p-10">
            <span className="ld-module-trigger-txt text-20 font-medium text-white">
              {locale=='en' 
              ? (<a href='/ar/' className='text-white' type='button' onClick={()=>toggleLocale()}><span style={{fontFamily: "Gess"}}>عربي</span></a>)
              : (<a href='/en/' className='text-white' type='button' onClick={()=>toggleLocale()}><span style={{fontFamily: "Eurostile"}}>English</span></a>)
              }
            </span>
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
                  <a className="text-white" href="#banner">{t('home')}</a>
                </li>
                <li>
                  <a className="text-white" href="#features">{t('strategies')}</a>
                </li>
                <li>
                  <a className="text-white" href="#how-it-works">{t('about-us')}</a>
                </li>
                <li>
                  <a className="text-white" href="#faq">{t('vision')}</a>
                </li>
                <li>
                  <a className="text-white" href="#faq">{t('products')}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header