'use client'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

function ContactModal() {

	const t = useTranslations('global');

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (res.ok) {
          setResponseMessage('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setResponseMessage('Failed to send email.');
        }
      } catch (error) {
        setResponseMessage('An error occurred.');
      }
    };

  return (
    <div id="modal-subscribe" className="lqd-modal lity-hide" data-modal-type="fullscreen">
			<div className="lqd-modal-inner">
				<div className="lqd-modal-head">
				</div>
				<div className="lqd-modal-content">
				<section className="lqd-section newsletter w-full flex flex-col items-center justify-center transition-all pt-100 pb-100 bg-black bg-center" id="newsletter" style={{backgroundImage: 'url(/assets/images/demo/dark-ai/bg/n-bg.png)'}}>
              <div className="container flex flex-col justify-center gap-40 p-10" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "startDelay" : 400, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.6, "scaleY" : 0.6, "rotationZ" : 1, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'>
                <div className="w-full text-center">
                  <div className="ld-fancy-heading relative animation-element">
                    <h2 className="ld-fh-element relative m-0">
                      {t('ready-launch')}
                    </h2>
                  </div>
                </div>
                <div className='row col col-12 w-full my-50' style={{rowGap: 40}}>
                  <div className="col-md-6 text-18">
                    <p>Contact</p>
                    <p>Address</p>
                    <p>Po Box, Building Number Street Name, ZIP Code</p>
                    <p>mail : <a href="mailto:info@brilliant.com">info@brilliant.com</a></p>
                    <p>Phone : +99 2564 658</p>
                  </div>
                  <div className="col-md-6">
                    <div className="ld-sf relative ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--round  ld-sf--border-none ld-sf--button-show animation-element">
                      <form 
                        onSubmit={handleSubmit}
                        className="ld_subscribe_form ld_sf_form relative">
                        <p>
                          <input 
                            type="text" 
                            className="block w-full rounded-2 bg-white-10 text-white-70 text-15" 
                            name="name" placeholder={t('fullname')}
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </p>
                        <p>
                          <input 
                            type="email" 
                            className="block w-full rounded-2 bg-white-10 text-white-70 text-15" 
                            name="email" placeholder={t('email')}
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </p>
                        <p>
                          <textarea
                           rows={4} className="block w-full rounded-2 border-0 bg-white-10 text-white-70 text-15" 
                           name="message" placeholder={t('your-message')}
                           value={formData.message}
                           onChange={handleChange}
                          ></textarea>
                        </p>
                        <button type="submit" className="inline-flex items-center justify-center m-0 rounded-2 relative text-white bg-primary text-15">
                          <span className="submit-text">{t('send')}</span>
                          <span className="ld-sf-spinner rounded-full absolute overflow-hidden">
                            <span className="lqd-overlay flex rounded-full">Sending </span>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
				</div>
				<div className="lqd-modal-foot"></div>
			</div>
		</div>
  )
}

export default ContactModal