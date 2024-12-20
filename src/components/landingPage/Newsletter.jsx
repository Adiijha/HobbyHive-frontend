import React from 'react';
import { motion } from 'framer-motion';

function Newsletter() {
  return (
    <motion.div
      className="w-full [height:550px] rounded-3xl flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}  // Trigger animation when in view
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false }}  // Allows animation to trigger every time it comes into view
    >
      <div className="py-12 sm:py-16 lg:py-12 w-full max-w-7xl flex flex-col items-center border-somig border-4 rounded-3xl">
        {/* Title Section */}
        <motion.div
          className="font-bnt text-5xl sm:text-6xl lg:text-7xl text-center pb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}  // Trigger animation when in view
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: false }}
        >
          STAY INSPIRED!
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="font-pop text-center px-4 sm:px-10 mt-2 mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}  // Trigger animation when in view
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: false }}
        >
          <p className="text-lg sm:text-xl md:text-2xl w-full text-center">
            Subscribe for updates, inspiring stories, and tips tailored to your hobbies.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full max-w-md px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}  // Trigger animation when in view
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          viewport={{ once: false }}
        >
          <form className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col sm:flex-row lg:flex-row w-72 md:w-full gap-y-4 sm:gap-x-4 sm:gap-y-0">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-grey font-pop w-full pl-20 sm:w-[450px] md:w-[600px] lg:w-[650px] rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-xl sm:leading-6 placeholder:text-gray-600"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="ml-16 md:ml-0 font-pop pt-2.5 mt-4 sm:mt-0 sm:ml-4 flex md:w-full w-40 sm:w-auto rounded-xl bg-black px-6 py-2 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span className="pl-3 md:pl-0">Subscribe</span>
              </button>
            </div>
            <p className=" mt-3 text-md leading-6 font-pop text-center">
              We care about your data. Read our <a href="https://www.swellai.com/privacy" className="font-semibold group">privacy&nbsp;policy</a>.
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Newsletter;
