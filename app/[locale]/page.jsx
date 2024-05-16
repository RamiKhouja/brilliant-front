
import {useTranslations, useLocale} from 'next-intl';
import CarouselBtn from './components/CarouselBtn';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Intro from './components/Intro';
import Strategies from './components/Strategies';
import About from './components/About';
import Vision from './components/Vision';
import Products from './components/Products';
import Events from './components/Events';

export default function Home() {
  const locale = useLocale();
  const token = process.env.API_TOKEN;
  const base_url = process.env.BASE_URL;
  const t = useTranslations('global');
  return (
    <>
    <div dir={locale==='ar'?('rtl'):('ltr')}>
        <main className="content bg-black" id="lqd-site-content" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/page-bg-5.svg)'}}>
          <div id="lqd-contents-wrap" style={{paddingTop: 80}}>

            {/* Start Banner */}
              <Intro locale={locale} t={t}/>
            {/* End Banner */}

            {/* Start Parallax BG */}
            <section 
              id="parallax-section" 
              className="lqd-section parallax-bg bg-before w-full min-h-100vh flex flex-col items-center justify-center bg-no-repeat bg-bottom-center bg-cover p-10" 
              style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/parallax-bg.jpg)'}} 
              data-parallax="true" 
              data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}' 
              data-parallax-from='{"y": "0px", "scaleX" : 1, "scaleY" : 1}' 
              data-parallax-to='{"y": "-300px", "scaleX" : 0.3, "scaleY" : 0.3}'
              >
            </section>
            {/* End Parallax BG */}

            {/* Start Features */}
              <Strategies locale={locale}  t={t}/>
            {/* End Features */}

            {/* Start How It Works */}
              <About locale={locale}  t={t}/>

            {/* End How It Works */}
            
            {/* Start Carousel Button */}
              <CarouselBtn/>
            {/* End Carousel Button */}

            {/* Start Float Text */}
            <Vision locale={locale}/>
            {/* End Float Text */}

            {/* Start Testimonial */}
            <Products locale={locale}/>
            {/* End Testimonial */}

            {/* Start faq */}
              <Events locale={locale} t={t}/>
            {/* End faq */}

            {/* Start Newsletter */}
              <Newsletter locale={locale}/>
            {/* End Newsletter */}

          </div>
        </main>

        <Footer/>
      </div>
      {/*  Start contact modal */}
      <ContactModal/>
		{/* End contact modal */}

    {/* Start custom cursor */}
		<div className="lqd-cc lqd-cc--inner fixed pointer-events-none"></div>
      <div className="lqd-cc--el lqd-cc-solid lqd-cc-explore flex items-center justify-center rounded-full fixed pointer-events-none">
        <div className="lqd-cc-solid-bg flex absolute lqd-overlay"></div>
        <div className="lqd-cc-solid-txt flex justify-center text-center relative">
          <div className="lqd-cc-solid-txt-inner">Explide</div>
        </div>
      </div>
      <div className="lqd-cc--el lqd-cc-solid lqd-cc-drag flex items-center justify-center rounded-full fixed pointer-events-none">
        <div className="lqd-cc-solid-bg flex absolute lqd-overlay"></div>
        <div className="lqd-cc-solid-ext lqd-cc-solid-ext-left inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style={{width: '1em', height: '1em'}}><path fill="currentColor" d="M19.943 6.07L9.837 14.73a1.486 1.486 0 0 0 0 2.25l10.106 8.661c.96.826 2.457.145 2.447-1.125V7.195c0-1.27-1.487-1.951-2.447-1.125z"></path></svg>
        </div>
        <div className="lqd-cc-solid-txt flex justify-center text-center relative">
          <div className="lqd-cc-solid-txt-inner">Drag</div>
        </div>
        <div className="lqd-cc-solid-ext lqd-cc-solid-ext-right inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style={{width: '1em', height: '1em'}}><path fill="currentColor" d="M11.768 25.641l10.106-8.66a1.486 1.486 0 0 0 0-2.25L11.768 6.07c-.96-.826-2.457-.145-2.447 1.125v17.321c0 1.27 1.487 1.951 2.447 1.125z"></path></svg>
        </div>
      </div>
      <div className="lqd-cc--el lqd-cc-arrow inline-flex items-center fixed top-0 left-0 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.4993 0V4.77005H8.87285L80 75.9207L75.7886 79.1419L4.98796 8.35478V60.4993H0V0H60.4993Z"/>
        </svg>
      </div>
      <div className="lqd-cc--el lqd-cc-custom-icon rounded-full fixed pointer-events-none">
        <div className="lqd-cc-ci inline-flex items-center justify-center rounded-full relative">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{width: '1em', height: '1em'}}><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.03 6a1 1 0 0 1 1 1v8.02h8.02a1 1 0 1 1 0 2.01h-8.02v8.02a1 1 0 1 1-2.01 0v-8.02h-8.02a1 1 0 1 1 0-2.01h8.02v-8.01a1 1 0 0 1 1.01-1.01z"></path></svg>
        </div>
      </div>
      <div className="lqd-cc lqd-cc--outer fixed top-0 left-0 pointer-events-none"></div>
      {/*  End custom cursor */}
      
      <div className="lity lity-dark" role="dialog" aria-label="Dialog Window (Press escape to close)" tabIndex="-1" data-modal-type="default" style={{display: 'none'}}>
        <div className="lity-backdrop"></div>
        <div className="lity-wrap" data-lity-close role="document">
          <div className="lity-loader" aria-hidden="true">Loading...</div>
          <div className="lity-container">
            <div className="lity-content"></div>
          </div>
          <button className="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button>
        </div>
      </div>
    
    </>
  )
}
