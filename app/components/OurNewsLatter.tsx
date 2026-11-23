import PlusIcon from "./icons/PlusIcon";

const OurNewsLatter = () => {
  return (
    <section className="flex w-full justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="relative w-full max-w-[1098px] overflow-hidden rounded-2xl bg-[linear-gradient(93.23deg,rgba(153,255,255,0.6)_0.34%,rgba(201,255,201,0.6)_100%)] p-5 sm:p-8 lg:p-12 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:content-[''] before:[background:linear-gradient(90deg,rgba(0,163,163,0.4)_0%,rgba(0,128,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]">
        <span className="pointer-events-none absolute right-0 top-0 [&>svg]:h-auto [&>svg]:w-20 sm:[&>svg]:w-32 lg:[&>svg]:w-[220px]">
          <PlusIcon />
        </span>

        <div className="relative z-10">
          <h2 className="max-w-[620px] font-nightSerif text-3xl font-[400] leading-tight text-dark-charcoal sm:text-4xl lg:text-[42px]">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-3 max-w-[721px] font-poppins text-sm font-[400] leading-6 text-[#333333BF] sm:text-base">
            Get pharmacy updates, health advice and service announcements by
            email.
          </p>
          <div className="mt-5 flex w-full max-w-[540px] flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="h-12 min-w-0 w-full rounded-xl border border-ice-blue bg-white px-4 font-poppins text-sm text-dark-charcoal placeholder:text-dark-charcoal/60 focus:outline-none focus:ring-2 focus:ring-dark-charcoal/40"
            />
            <button className="flex h-12 w-full flex-none items-center justify-center rounded-xl border-none bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] px-6 text-lg font-[600] text-ice-blue shadow-[inset_0px_-2px_2px_0.5px_#000000,inset_0px_0px_2px_1.5px_rgba(255,255,255,0.5)] transition-opacity hover:opacity-90 sm:w-24">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNewsLatter;
