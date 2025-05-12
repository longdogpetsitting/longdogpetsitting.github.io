import Image from 'next/image';
import { FiveStars } from '@/components/FiveStars';

const Testimonials: React.FC = () => {
  return (
    <main>
      <section aria-label="Testimonials">
        <div className="bg-brand-light-blue text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 flex">
            <div className="flex-none w-48">
              <Image src="/testimonials/Oliver_1.jpg" alt="Oliver" width={150} height={150} />
            </div>
            <div className="flex-1">
              <p className="pb-4">
                Carie babysat our pups, fish, guinea pigs etc for many years. Here special love and
                attention to all their needs allowed us to enjoy every trip we took. We would get
                &quot;bonus&quot; pictures of our boys sent to us during our vacations. It really
                helped make us feel at ease.
              </p>
              <p className="pb-4">
                We are sad to lose Carrie since her move away from AZ but are happy that other pets
                will have the privilege of her love and attention. Oh and your house will be
                immaculate and well taken care of also! She is truly the BEST pet sitter we have
                EVER used!!
              </p>
              <p>
                <strong>Lupita O.</strong>
              </p>
              <div>
                <FiveStars />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 flex">
            <div className="flex-1">
              <p className="pb-4">
                Carie with Long Dog Pet Sitting was amazing! She provided great updates which was
                really important to me since one of our dogs has a heart condition. I would
                wholeheartedly recommend Long Dog to anyone looking for a petsitter for a special
                needs pet!
              </p>
              <p>
                <strong>Michelle D.</strong>
              </p>
              <div>
                <FiveStars />
              </div>
            </div>
            <div className="flex-none w-48">
              <Image src="/testimonials/Leo_1.jpg" alt="Oliver" width={150} height={150} />
            </div>
          </div>
        </div>
        <div className="bg-brand-light-blue text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 flex">
            <div className="flex-none w-48">
              <Image src="/testimonials/Mac_1.jpg" alt="Oliver" width={150} height={150} />
            </div>
            <div className="flex-1">
              <p className="pb-4">
                Carie is my #1 go-to for petsitting needs. Always. With her veterinary background, I
                can confidently leave my senior pets, needing daily medication, in her caring,
                knowledgeable hands. We have asked Carie to do anything from check-ins to overnight
                stays, to weeklong stays and the pets love her. On top of that, she leaves the house
                cleaner than when she got there. Can&apos;t say enough great things.
              </p>
              <p>
                <strong>Laura B.</strong>
              </p>
              <div>
                <FiveStars />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
