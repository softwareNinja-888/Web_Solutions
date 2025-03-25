import React from "react";
import {CardSvg} from './Helper/CardSvg'

export function Pricing() {

  function  PricingCard({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
  }) {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
          <div className={`relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-primaryBg  px-8  py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]  ${type === 'Business' ? 'shadow-[-1px_0_6px] transform scale-103 shadow-greenPrimary' : null}`}>
            <span className="mb-3 block text-lg font-semibold text-greenSecondary">
              {type}
            </span>
            <h2 className="mb-5 text-[42px] font-bold text-white">
              {price}
              <span className="text-base font-medium text-white">
                / {subscription}
              </span>
            </h2>
            <p className="mb-8 border-b border-stroke pb-8 text-base text-white">
              {description}
            </p>
            <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
            <a
              href="/#"
              className={` ${
                active
                  ? "block w-full rounded-md border border-greenPrimary bg-greenPrimary p-3 text-center text-base font-medium text-white cursor-pointer hover:bg-greenPrimary  hover:scale-102 transition duration-400 ease-in-out font-inter700  "
                  : "block w-full rounded-md border  bg-inherit border-greenPrimary p-3 text-center text-base font-medium text-white cursor-pointer hover:bg-greenPrimary hover:scale-102 transition duration-400 ease-in-out font-inter700"
              } `}
            >


              {buttonText}
            </a>
            <div>
              <CardSvg/>
            </div>
          </div>
        </div>
      </>
    );
  };

  const List = ({ children }) => {
    return (
      <p className="text-base text-white">{children}</p>
    );
  }; 
  
  return (
    <section className="relative z-10 overflow-hidden bg-primaryBg pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] w-11/12 mx-auto">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Personal"
              price="$59"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Personal"
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </PricingCard>
            <PricingCard
              type="Business"
              price="$199"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Business"
              active
            >
              <List>5 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on31 (Three) project</List>
              <List>4 Months support</List>
            </PricingCard>
            <PricingCard
              type="Professional"
              price="$256"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
            >
              <List>Unlimited User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited project</List>
              <List>12 Months support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};


