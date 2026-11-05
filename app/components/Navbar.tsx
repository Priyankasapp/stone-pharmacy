import { navLink } from "@/lib/data";
import {
  ChevronDown,
  LogoIcon,
  MapIcon,
  SearchIcon,
  ShoppinCartIcon,
  UserIcon,
} from "@/lib/icon";

const Navbar = () => {
  return (
   <nav className="w-full h-20 flex absolute justify-between rotate-0 opacity-100 top-[24px] left-[60px] rounded-full border items-center pr-6 pl-6 bg-[#FFFFFF] border-solid border-neutral-200/30 shadow-[0_8px_30px_rgb(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]">

      <div className="flex items-center gap-[20px]">
        <LogoIcon />



        <div>
          {navLink.map((link, index) => (
            <button
              key={index}
              id={`dropdownDelayButton-${index}`}
              data-dropdown-toggle={`dropdownDelay-${index}`}
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
             className="group inline-flex gap-2 items-center justify-center box-border border border-transparent shadow-xs px-4 py-2.5 focus:outline-none rounded-base
           hover:text-summer-lime text-charcoal font-clash font-medium text-[14px] leading-[100%] tracking-[0.03em] capitalize
           transition-transform duration-200 ease-out hover:translate-x-5"

              type="button"
            >
              {link.label}
              {link.isIcon ? (
                <ChevronDown className="w-2.5 h-2.5 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
              ) : (
                ""
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-[24px]">
        <div className="flex items-center gap-[24px]">
          <SearchIcon />
          <ShoppinCartIcon />
          <UserIcon />
        </div>
        <button className="flex  flex-row justify-center items-center px-6 py-2.5 gap-2  h-[48px] bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] shadow-[inset_0px_-2px_2px_0.5px_#000000,inset_0px_0px_2px_1.5px_rgba(255,255,255,0.5)] rounded-[12px] border-none cursor-pointer flex-none order-1 grow-0">
          <MapIcon />
          <span className="font-poppins font-[400] text-[16px] text-ice-blue line-1.5">
            Pharmacy FInder
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
