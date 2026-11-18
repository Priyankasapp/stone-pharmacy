"use client";

import { useState } from "react";
import { navLink } from "@/lib/data";
import { SearchIcon } from "./icons/SearchIcon";
import { ShoppinCartIcon } from "./icons/ShoppingCartIcon";
import { UserIcon } from "./icons/UserIcon";
import { MapIcon } from "./icons/MapIcon";
import { LogoIcon } from "@/lib/icon";
import { ChevronDown } from "./icons/ChevronDown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const actions = (
    <>
      <div className="flex items-center justify-center gap-6">
        <SearchIcon />
        <ShoppinCartIcon />
        <UserIcon />
      </div>
      <button className="flex h-12 w-full flex-none items-center justify-center gap-2 rounded-xl border-none bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] px-6 py-2.5 shadow-[inset_0px_-2px_2px_0.5px_#000000,inset_0px_0px_2px_1.5px_rgba(255,255,255,0.5)] sm:w-auto">
        <MapIcon />
        <span className="font-poppins text-base font-normal text-ice-blue">
          Pharmacy Finder
        </span>
      </button>
    </>
  );

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-3 right-3 top-3 z-50 mx-auto max-w-[1440px]   rounded-[28px] border border-neutral-200/30 bg-white px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] sm:left-6 sm:right-6 sm:px-6 xl:top-6 xl:rounded-full xl:py-0"
    >
      <div className="flex h-14 items-center justify-between xl:h-20">
        <div className="flex">
          <LogoIcon />
          <div className="hidden items-center gap-1 xl:flex">
            {navLink.map((link, index) => (
              <button
                key={link.label}
                id={`dropdownDelayButton-${index}`}
                data-dropdown-toggle={`dropdownDelay-${index}`}
                data-dropdown-delay="500"
                data-dropdown-trigger="hover"
                className="group inline-flex items-center justify-center gap-2 rounded-base border border-transparent px-4 py-2.5 text-[14px] font-medium capitalize leading-[100%] tracking-[0.03em] text-charcoal shadow-xs transition-colors hover:text-summer-lime focus:outline-none"
                type="button"
              >
                {link.label.trim()}
                {link.isIcon && (
                  <ChevronDown className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-6 xl:flex">{actions}</div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal xl:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-neutral-200/70 pb-4 pt-3 xl:hidden"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              {navLink.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex min-h-11 items-center justify-between rounded-lg px-3 text-sm font-medium capitalize text-charcoal transition-colors hover:bg-neutral-100 hover:text-summer-lime"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label.trim()}
                  {link.isIcon && <ChevronDown className="h-2.5 w-2.5" />}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 border-t border-neutral-200/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
              {actions}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
