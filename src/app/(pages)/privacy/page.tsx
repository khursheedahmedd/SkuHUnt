import React from "react";
import { NextPage } from "next";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";

const Privacy: NextPage = () => {
  return (
    // Main container for the privacy policy page
    <div>
      <Navbar />
      {/**
       * Outer wrapper for the page content.
       * `px-8 pb-16` is kept, but note we can add additional breakpoints
       * if you want finer control on smaller screens.
       */}
      <div className="bg-p-bg bg-cover px-4 pt-8 sm:px-6 md:px-8 pb-16">
        {/**
         * The main gradient background area.
         * - Reduced padding on smaller screens (`py-6`) and scaled up
         *   for medium (`md:py-10`).
         * - Leaves large (lg+) devices the same.
         */}
        <div className="min-h-screen bg-gradient-to-r from-[#f2f4fa] to-[#EEF2FF] flex flex-col items-center py-6 md:py-10 px-4 rounded-xl">
          {/**
           * Container limiting max width.
           * `max-w-screen-xl` is kept the same for large devices;
           * it will simply shrink on smaller screens naturally.
           */}
          <div className="w-full max-w-screen-xl shadow-none">
            {/**
             * Main title section:
             * - We add `text-3xl` for small screens and scale up to `text-5xl` for medium,
             *   then keep `text-7xl` for large (the original).
             */}
            <h1 className="text-center text-black font-bold mb-6 md:mb-10 py-5 md:py-10 text-3xl md:text-5xl lg:text-7xl">
              SkuHunt Privacy Policy
            </h1>

            {/**
             * White "card" container with rounded corners and shadow.
             * p-6 for small screens, md:p-10 for medium+.
             */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-10">
              {/**
               * Each section heading:
               * - We keep `text-xl font-semibold` for large devices,
               *   but we can reduce on smaller screens if needed.
               * - The paragraphs use a responsive scale: text-base on small,
               *   md:text-lg on medium, and keep text-xl on large.
               */}
              {/* 1. Introduction */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1 font-satoshi">
                  1. Introduction
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl font-satoshi">
                  At SkuHunt, we value your privacy and are committed to
                  protecting your personal information. This Privacy Policy
                  outlines how we collect, use, store, and safeguard the data of
                  our users and TikTok Shop sellers.
                </p>
              </section>

              {/* 2. Data We Collect */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  2. Data We Collect
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl mb-2">
                  We collect the following types of data:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 text-base md:text-lg lg:text-xl">
                  <li>
                    <span>User Data:</span>
                    <br />
                    <span className="pl-8 block mt-1">
                      • &nbsp;Personal information such as name, email address,
                      and login credentials via Clerk for user authentication
                      and management.
                    </span>
                  </li>
                  <li>
                    <span>TikTok Order Data:</span>
                    <br />
                    <span className="pl-8 block mt-1">
                      • &nbsp;Information related to TikTok Shop orders,
                      including sales, SKUs, and associated fees.
                    </span>
                  </li>
                </ul>
              </section>

              {/* 3. How We Use Your Data */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  3. How We Use Your Data
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl mb-2">
                  The data we collect is used for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 text-base md:text-lg lg:text-xl">
                  <li>
                    To generate detailed profit analytics for TikTok Shop
                    sellers.
                  </li>
                  <li>
                    To improve our services and provide insights on product
                    performance.
                  </li>
                </ul>
              </section>

              {/* 4. Third-Party Services */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  4. Third-Party Services
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl">
                  We utilize several third-party services to enhance our
                  application and ensure data security:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 text-base md:text-lg lg:text-xl">
                  <li>
                    <strong>Firebase</strong> for authentication and secure data
                    handling.
                  </li>
                  <li>
                    <strong>Neon</strong> for encrypted database storage.
                  </li>
                  <li>
                    <strong>Clerk</strong> for user management and access
                    control.
                  </li>
                  <li>
                    <strong>Vercel</strong> for hosting and deployment.
                  </li>
                  <li>
                    <strong>Google Analytics</strong> for tracking usage
                    patterns and improving user experience.
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-700 mt-2 text-base md:text-lg lg:text-xl">
                  These services may collect and process data according to their
                  own privacy policies.
                </p>
              </section>

              {/* 5. User Rights */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  5. User Rights
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl mb-2">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 text-base md:text-lg lg:text-xl">
                  <li>
                    <span>Access:</span> Request a copy of the personal data we
                    hold about you.
                  </li>
                  <li>
                    <span>Update:</span> Request updates or corrections to your
                    personal data.
                  </li>
                  <li>
                    <span>Deletion:</span> Request the deletion of your personal
                    data from our systems.
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl mt-2">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:sagar@skuhunt.com"
                    className="text-blue-600 underline"
                  >
                    sagar@skuhunt.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:shaff@skuhunt.com"
                    className="text-blue-600 underline"
                  >
                    shaff@skuhunt.com
                  </a>
                  .
                </p>
              </section>

              {/* 6. Data Retention */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  6. Data Retention
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl">
                  We retain your personal data for as long as your account is
                  active or as needed to provide our services. Data will be
                  deleted upon request by the user.
                </p>
              </section>

              {/* 7. Cookies */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  7. Cookies
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl">
                  Currently, we do not use cookies on our website or
                  application. However, we may implement cookies in the future
                  to enhance user experience. Any changes will be reflected in
                  an updated version of this Privacy Policy.
                </p>
              </section>

              {/* 8. Data Security */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  8. Data Security
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl">
                  We implement industry-standard security measures to protect
                  your data, including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 text-base md:text-lg lg:text-xl">
                  <li>
                    Encryption of data in transit (HTTPS) and at rest (Neon
                    database encryption).
                  </li>
                  <li>
                    Access controls through Firebase and Clerk to ensure data is
                    only accessible to authorized users.
                  </li>
                </ul>
              </section>

              {/* 9. Changes to This Privacy Policy */}
              <section className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl">
                  We may update this Privacy Policy periodically to reflect
                  changes in our data practices. Any updates will be posted on
                  our website, and we encourage you to review this policy
                  regularly.
                </p>
              </section>

              {/* 10. Contact Us */}
              <section>
                <h2 className="text-lg sm:text-xl font-semibold mb-1">
                  10. Contact Us
                </h2>
                <p className="leading-relaxed text-gray-800 text-base md:text-lg lg:text-xl">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at:
                </p>
                <ul className="list-none space-y-2 pl-0 mt-2 text-gray-800 text-base md:text-lg lg:text-xl">
                  <li>
                    <span>• &nbsp;Email:</span>{" "}
                    <a
                      href="mailto:sagar@skuhunt.com"
                      className="text-blue-600 underline"
                    >
                      sagar@skuhunt.com
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:shaff@skuhunt.com"
                      className="text-blue-600 underline"
                    >
                      shaff@skuhunt.com
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
