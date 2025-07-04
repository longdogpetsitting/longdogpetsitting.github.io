import Link from 'next/link';
import { Logo } from '../Logo';

export const MainFooter: React.FC = () => {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="mx-auto w-auto text-center">
            <div className="bg-white rounded-full inline-block">
              <Logo height={100} width={100} />
            </div>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <Link
                href="/services"
                className="inline-block rounded-lg px-2 py-1 text-sm text-white hover:bg-slate-100 hover:text-slate-900"
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className="inline-block rounded-lg px-2 py-1 text-sm text-white hover:bg-slate-100 hover:text-slate-900"
              >
                About Us
              </Link>
              <Link
                href="/testimonials"
                className="inline-block rounded-lg px-2 py-1 text-sm text-white hover:bg-slate-100 hover:text-slate-900"
              >
                Testimonials
              </Link>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg px-2 py-1 text-sm text-white hover:bg-slate-100 hover:text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </nav>
          <div className="flex flex-col items-center py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <Link
                className="group"
                aria-label="Long Dog Pet Sitting on X"
                href="#"
                target="_blank"
              >
                <svg
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                </svg>
              </Link>
            </div>
            <div className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright © {new Date().getFullYear()} Long Dog Pet Sitting LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
