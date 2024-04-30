import React from 'react'

function ContactModal() {
  return (
    <div id="modal-subscribe" className="lqd-modal lity-hide" data-modal-type="fullscreen">
			<div className="lqd-modal-inner">
				<div className="lqd-modal-head">
				</div>
				<div className="lqd-modal-content">
					<section className="lqd-section w-full min-h-100vh flex flex-col items-center transition-all pt-200 pb-200 bg-black bg-center" style={{backgroundImage: "url(/assets/images/demo/dark-ai/bg/n-bg.png)"}}>
						<div className="container flex flex-col justify-center gap-40 p-10">
							<div className="w-full text-center">
								<div className="ld-fancy-heading relative">
									<h2 className="ld-fh-element relative m-0">
										<span className="font-accent font-normal">Ready to </span>
										Launch?
									</h2>
								</div>
							</div>
							<div className="w-full text-center">
								<div className="ld-fancy-heading relative">
									<p className="ld-fh-element relative mb-0/5em text-22 leading-26">Join us today and experience the power of AI text creation for yourself!</p>
								</div>
							</div>
							<div className="w-full text-center">
								<div className="ld-sf relative ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--round  ld-sf--border-none ld-sf--button-show ld-sf--button-inline">
									<form className="ld_subscribe_form ld_sf_form relative" method="post" action="#">
										<p className="pb-20">
											<input type="email" className="block w-full rounded-2 bg-white-10 text-white-70 text-15" name="email" placeholder="Enter your email address"/>
										</p>
										<button type="submit" className="inline-flex items-center justify-center m-0 rounded-2 relative text-white bg-primary text-15">
											<span className="submit-text">Subscribe</span>
											<span className="ld-sf-spinner rounded-full absolute overflow-hidden">
												<span className="block lqd-overlay flex rounded-full">Sending </span>
											</span>
										</button>
									</form>
									<div className="ld_sf_response"></div>
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