import React from "react";
import digitalExperience from "../assets/digital-experiences.png";
import brandIdentity from "../assets/brand-identity.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Details = () => {
  return (
    <div class="bg-black flex flex-col gap-8 py-8 pb-20">
      <div class="container px-10 flex flex-col md:flex-row items-center md:gap-6">
        <div class="text-white md:w-1/2">
          <h2 class="text-2xl lg:text-3xl font-medium">
            Brand Identity Overhaul:
          </h2>
          <p class="mt-6 text-[13px] md:text-[18px]">
            We've partnered with businesses across industries to give their
            brand identities a complete makeover. From logo redesigns that
            challenge traditional norms to crafting color palettes that evoke
            emotion, we breathe new life into brands, setting them apart from
            the crowd.
          </p>
          <button class="mt-4 flex items-center space-x-1 bg-black text-white py-4 hover:opacity-80 ease-in duration-200 text-[14px]">
            <a href="https://wa.me/message/PHODOTZ5RGMWC1">Start a Project</a>
            <HiOutlineArrowLongRight className="w-6 h-6" />
          </button>
        </div>
        <div class="w-full md:w-3/5">
          <img
            class="object-cover h-[160px] md:h-[360px] w-full"
            src={digitalExperience}
            alt="brand-identity"
          />
        </div>
      </div>
      <div class="container px-10 flex flex-col md:flex-row items-center md:gap-6">
        <div class="text-black bg-white md:w-4/5 p-6">
          <h2 class="text-2xl lg:text-3xl font-medium">
            Brand Identity Overhaul:
          </h2>
          <p class="mt-6 text-[13px] md:text-[18px]">
            We've partnered with businesses across industries to give their
            brand identities a complete makeover. From logo redesigns that
            challenge traditional norms to crafting color palettes that evoke
            emotion, we breathe new life into brands, setting them apart from
            the crowd.
          </p>
          <button class="mt-4 flex items-center space-x-1 bg-white text-black py-4 hover:opacity-80 ease-in duration-200 text-[14px]">
            <a href="https://wa.me/message/PHODOTZ5RGMWC1">Start a Project</a>
            <HiOutlineArrowLongRight className="w-6 h-6" />
          </button>
        </div>
        <div class="w-full md:w-3/5">
          <img
            class="object-cover h-[160px] md:h-[360px] w-full"
            src={brandIdentity}
            alt="brand-identity"
          />
        </div>
      </div>
      <div class="container px-10 flex flex-col md:flex-row items-center md:gap-6">
        <div class="text-white md:w-1/2">
          <h2 class="text-2xl lg:text-3xl font-medium">
            Brand Identity Overhaul:
          </h2>
          <p class="mt-6 text-[13px] md:text-[18px]">
            We've partnered with businesses across industries to give their
            brand identities a complete makeover. From logo redesigns that
            challenge traditional norms to crafting color palettes that evoke
            emotion, we breathe new life into brands, setting them apart from
            the crowd.
          </p>
          <button class="mt-4 flex items-center space-x-1 bg-black text-white py-4 hover:opacity-80 ease-in duration-200 text-[14px]">
            <a href="https://wa.me/message/PHODOTZ5RGMWC1">Start a Project</a>
            <HiOutlineArrowLongRight className="w-6 h-6" />
          </button>
        </div>
        <div class="w-full md:w-3/5">
          <img
            class="object-cover h-[160px] md:h-[360px] w-full"
            src={digitalExperience}
            alt="brand-identity"
          />
        </div>
      </div>
      <div class="container px-10 flex flex-col md:flex-row items-center md:gap-6">
        <div class="text-black bg-white md:w-4/5 p-6">
          <h2 class="text-2xl lg:text-3xl font-medium">
            Brand Identity Overhaul:
          </h2>
          <p class="mt-6 text-[13px] md:text-[18px]">
            We've partnered with businesses across industries to give their
            brand identities a complete makeover. From logo redesigns that
            challenge traditional norms to crafting color palettes that evoke
            emotion, we breathe new life into brands, setting them apart from
            the crowd.
          </p>
          <button class="mt-4 flex items-center space-x-1 bg-white text-black py-4 hover:opacity-80 ease-in duration-200 text-[14px]">
            <a href="https://wa.me/message/PHODOTZ5RGMWC1">Start a Project</a>
            <HiOutlineArrowLongRight className="w-6 h-6" />
          </button>
        </div>
        <div class="w-full md:w-3/5">
          <img
            class="object-cover h-[160px] md:h-[360px] w-full"
            src={brandIdentity}
            alt="brand-identity"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
