import Link from 'next/link';
import { Logo } from '../Logo';

export const MainHeader: React.FC = () => {
  return (
    <header className="main-header">
      <div className="mx-auto max-w-7xl">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link aria-label="Home" href="/">
              <Logo height={200} width={200} />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <Link
                aria-label="Services"
                href="/services"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Services
              </Link>
              <Link
                aria-label="About Us"
                href="/about-us"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                About Us
              </Link>
              <Link
                aria-label="Testimonials"
                href="/testimonials"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Testimonials
              </Link>
              <Link
                aria-label="Contact Us"
                href="/contact-us"
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Link
              aria-label="Client Portal"
              href="https://0215longdogpetsitting.petsoftware.net/clientportal"
              target="_blank"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-light-blue text-white hover:text-slate-100 hover:bg-brand-dark-blue"
            >
              <span>Book Now!</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
