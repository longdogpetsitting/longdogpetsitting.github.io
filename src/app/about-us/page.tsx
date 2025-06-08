import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <main>
      <section aria-label="About Us">
        <div className="bg-brand-light-blue text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 flex">
            <div className="flex-none w-48">
              <Image src="/testimonials/Oliver_1.jpg" alt="Oliver" width={150} height={150} />
            </div>
            <div className="flex-1">
              <p className="pb-4">
                After moving to the Huntsville area in November I decided to become active on Rover
                again to revive my love for pet care, after years of working in veterinary clinics.
                I began to receive several requests with feedback that people have been let down
                before and needed a good and reliable pet sitting. Based on this information I
                decided to form my own business and Long Dog Pet Sitting LLC was born.
              </p>
              <p className="pb-4">
                I graduated from Rockford Career College in 2009 with a degree in veterinary
                technology. I became a certified veterinary technician in 2010 and began working in
                a general practice clinic. After many years in general practice I moved onto
                speciality medicine including neurology, oncology, emergency and critical care.
                During that time I was pet sitting for friends and acquaintances, and my love for
                pet sitting began.
              </p>
              <p className="pb-4">
                I enjoy spending time with other people’s pets whether it be a quick drop in, going
                for a quick walk or spending 2 weeks while you travel the world. I strive to provide
                both exceptional pet care and customer service. I want everyone to have a positive
                experience and go above and beyond to ensure this happens. If you have any questions
                - please don’t hesitate to reach out and I would love to meet your fur kiddo!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
