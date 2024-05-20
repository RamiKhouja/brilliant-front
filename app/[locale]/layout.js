//import StateNav from './oldcomponents/StateNav'
// import './globals.css'
// import { Inter } from 'next/font/google'
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import Header from './components/Header';
 
const locales = ['en', 'ar'];
// const inter = Inter({ 
//   subsets: ['latin'],
// })
export default async function LocaleLayout({children, params: {locale}}) {
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

return (
  <html lang={locale}>
    <head>
      <title>Brilliant</title>

      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="keywords" content="HTML Template, site template, seo, marketing, creative, corporate, modern, multipurpose, one page, business, responsive, minimal, saas, startup"/>
      <meta name="author" content="LiquidThemes"/>
      <meta name="description" content="Hub is a HTML template with high performance, and award-winning design collection."/>
      <meta property="og:title" content="Hub HTML template"/>
      <meta property="og:description" content="Hub is a HTML template with high performance, and award-winning design collection."/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="/assets/images/common/og-image.jpg"/>
      
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <link rel="stylesheet" href="/assets/vendors/liquid-icon/lqd-essentials/lqd-essentials.min.css"/>
      <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css"/>
      <link rel="stylesheet" href="/assets/css/theme.min.css"/>
      <link rel="stylesheet" href="/assets/css/utility.min.css"/>
      <link rel="stylesheet" href="/assets/css/demo/dark-ai.css"/>
      <link rel="stylesheet" href="/assets/css/custom.css"/>

      {/* <link rel="stylesheet" href="https://use.typekit.net/TYPEKIT_ID.css"/> */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600&display=swap" rel="stylesheet" />
    </head>
    <body 
      style={locale=='ar' ? {fontFamily: 'Gess'} : {fontFamily: 'Eurostile'}}
      className={["lqd-preloader-activated lqd-sticky-footer-shadow-1 lqd-preloader-style-dissolve lqd-cc-outer-hidden"]}
      data-lqd-cc="true" data-localscroll-offset="100" data-mobile-nav-breakpoint="1199" data-mobile-nav-style="minimal" data-mobile-nav-scheme="custom" data-mobile-nav-trigger-alignment="right" data-mobile-header-scheme="custom" data-mobile-logo-alignment="default" data-overlay-onmobile="false"
    >
    <NextIntlClientProvider locale={locale} messages={messages}>
       {/* <StateNav/> */}
       <div className="lqd-preloader-wrap lqd-preloader-dissolve" data-preloader-options='{ "animationType":  "scale", "animationTargets":  ".lqd-preloader-dissolve-el", "stagger":  12, "dir":  "y", "duration":  600 }'>
        <div className="flex flex-col">
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
          <div className="lqd-preloader-dissolve-el w-full flex-grow-1"></div>
        </div>
      </div>

      <div id="wrap">
        <Header/>
        {children}
      </div>
    </NextIntlClientProvider>
    <script src="/assets/vendors/jquery.min.js" async ></script>
		<script src="/assets/vendors/jquery-ui/jquery-ui.min.js" async ></script>
		<script src="/assets/vendors/bootstrap/js/bootstrap.min.js" async ></script>
		<script src="/assets/vendors/fastdom/fastdom.min.js" async ></script>
		<script src="/assets/vendors/fresco/js/fresco.js" async ></script>
		<script src="/assets/vendors/lity/lity.min.js" async ></script>
		<script src="/assets/vendors/gsap/minified/gsap.min.js" async ></script>
		<script src="/assets/vendors/gsap/minified/DrawSVGPlugin.min.js" async ></script>
		<script src="/assets/vendors/gsap/utils/CustomEase.min.js" async ></script>
		<script src="/assets/vendors/gsap/minified/ScrollTrigger.min.js" async ></script>
		<script src="/assets/vendors/draw-shape/liquidDrawShape.min.js" async ></script>
		<script src="/assets/vendors/animated-blob/liquidAnimatedBlob.min.js" async ></script>
		<script src="/assets/vendors/fontfaceobserver.js" async ></script>
		<script src="/assets/vendors/tinycolor-min.js" async ></script>
		<script src="/assets/vendors/gsap/utils/SplitText.min.js" async ></script>
		<script src="/assets/vendors/flickity/flickity.pkgd.min.js" async ></script>
		<script src="/assets/vendors/flickity/flickity-fade.min.js" async ></script>
		<script src="/assets/js/liquid-gdpr.min.js" async ></script>
		<script src="/assets/js/theme.min.js" async ></script>
		<script src="/assets/js/liquid-ajax-contact-form.min.js" async ></script>
    </body>
  </html>
)

}