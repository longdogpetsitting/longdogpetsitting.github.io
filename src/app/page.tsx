import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="bg-brand-light-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
          Website Coming Soon!
        </div>
      </div>
      <div className="py-4">
        <div className="mx-auto max-w-7xl">
          <ul
            role="list"
            className="py-4 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            <li>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <Image
                    src="/certifications/IAPO.jpg"
                    alt="International Organization of Professional Pet Sitters"
                    width={150}
                    height={150}
                  />
                </li>
                <li className="flex">
                  <Image
                    src="/certifications/PSI.jpg"
                    alt="Pet Sitters International"
                    height={150}
                    width={150}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
