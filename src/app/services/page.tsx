const Services: React.FC = () => {
  return (
    <main>
      <section aria-label="Services">
        <div className="bg-brand-light-blue text-white">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Services We Offer
              </h2>
              <p className="mt-4 text-lg text-blue-600/100 dark:text-sky-400/100">
                *All services are based on availability.
              </p>
            </div>
            <div className="flex flex-col rounded-lg bg-white mt-4 p-4 text-slate-700">
              <div>15 minute potty break</div>
              <div>30 minute visit - including cat visit or walk</div>
              <div>60 minute visit</div>
              <div>House sitting/overnight care</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
