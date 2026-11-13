import { healthyData } from '@/lib/data'
import WhatWeOfferCard from './WhatWeOfferCard'

const WhatWeOfferSection = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1098px] flex-col gap-6 sm:gap-8">
        <h2 className="text-center font-nightSerif text-3xl font-normal leading-tight text-dark-charcoal sm:text-4xl">
          What We Offer to Keep You Healthy
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {healthyData.map((data) => (
            <WhatWeOfferCard
              key={data.title}
              title={data.title}
              description={data.description}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
