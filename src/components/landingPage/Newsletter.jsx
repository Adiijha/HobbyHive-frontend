import React from 'react';

function Newsletter() {
  return (
    <div className="w-full mb-20 rounded-3xl flex justify-between mt-10">
      <div className="py-12 sm:py-20 lg:py-20">
        <div className="text-chgrey font-bnt font-semibold w-1/2 text-5xl pl-6 sm:pl-12 lg:pl-16 pb-4">Stay Inspired!</div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          {/* Left Column: Text */}
          <div className="max-w-xl sm:text-4xl lg:col-span-7 font-bnt">
            <p className="mt-3 md:mt-0 text-sm md:text-2xl">
            Subscribe for updates, inspiring stories, and tips tailored to your hobbies.
            </p>
          </div>

          {/* Right Column: Form */}
          <form className="w-full max-w-md lg:col-span-5">
            <div className="flex gap-x-4 flex-col sm:flex-row lg:flex-row">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-grey font-bnt min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-xl sm:leading-6 placeholder:text-gray-600"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="font-bnt flex rounded-3xl bg-black px-6 py-2 text-xl font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-4 sm:mt-0"
              >
                <span className="pl-28 md:pl-0">Subscribe</span>
              </button>
            </div>
            <p className="mt-3 text-lg leading-6 font-bnt">We care about your data. Read our <a href="https://www.swellai.com/privacy" className="font-semibold">privacy&nbsp;policy</a>.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;