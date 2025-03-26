// import React from "react";
// import {CardSvg} from './Helper/CardSvg'

// export function Pricing() {

//   function  PricingCard({
//     children,
//     description,
//     price,
//     type,
//     subscription,
//     buttonText,
//     active,
//   }) {
//     return (
//       <>
//         <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
//           <div className={`relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-primaryBg  px-8  py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]  ${type === 'Business' ? 'shadow-[-1px_0_6px] transform scale-103 shadow-greenPrimary' : null}`}>
//             <span className="mb-3 block text-lg font-semibold text-greenSecondary">
//               {type}
//             </span>
//             <h2 className="mb-5 text-[42px] font-bold text-white">
//               {price}
//               <span className="text-base font-medium text-white">
//                 / {subscription}
//               </span>
//             </h2>
//             <p className="mb-8 border-b border-stroke pb-8 text-base text-white">
//               {description}
//             </p>
//             <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
//             <a
//               href="/#"
//               className={` ${
//                 active
//                   ? "block w-full rounded-md border border-greenPrimary bg-greenPrimary p-3 text-center text-base font-medium text-white cursor-pointer hover:bg-greenPrimary  hover:scale-102 transition duration-400 ease-in-out font-inter700  "
//                   : "block w-full rounded-md border  bg-inherit border-greenPrimary p-3 text-center text-base font-medium text-white cursor-pointer hover:bg-greenPrimary hover:scale-102 transition duration-400 ease-in-out font-inter700"
//               } `}
//             >


//               {buttonText}
//             </a>
//             <div>
//               <CardSvg/>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   const List = ({ children }) => {
//     return (
//       <p className="text-base text-white">{children}</p>
//     );
//   }; 
  
//   return (
//     <section className="relative z-10 overflow-hidden bg-primaryBg pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] w-11/12 mx-auto">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//               <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white sm:text-4xl md:text-[40px]">
//                 Our Pricing Plan
//               </h2>
//               <p className="text-base text-white">
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="-mx-4 flex flex-wrap justify-center">
//           <div className="-mx-4 flex flex-wrap">
//             <PricingCard
//               type="Personal"
//               price="$59"
//               subscription="year"
//               description="Perfect for using in a personal website or a client project."
//               buttonText="Choose Personal"
//             >
//               <List>1 User</List>
//               <List>All UI components</List>
//               <List>Lifetime access</List>
//               <List>Free updates</List>
//               <List>Use on 1 (one) project</List>
//               <List>3 Months support</List>
//             </PricingCard>
//             <PricingCard
//               type="Business"
//               price="$199"
//               subscription="year"
//               description="Perfect for using in a personal website or a client project."
//               buttonText="Choose Business"
//               active
//             >
//               <List>5 User</List>
//               <List>All UI components</List>
//               <List>Lifetime access</List>
//               <List>Free updates</List>
//               <List>Use on31 (Three) project</List>
//               <List>4 Months support</List>
//             </PricingCard>
//             <PricingCard
//               type="Professional"
//               price="$256"
//               subscription="year"
//               description="Perfect for using in a personal website or a client project."
//               buttonText="Choose Professional"
//             >
//               <List>Unlimited User</List>
//               <List>All UI components</List>
//               <List>Lifetime access</List>
//               <List>Free updates</List>
//               <List>Unlimited project</List>
//               <List>12 Months support</List>
//             </PricingCard>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { CardSvg } from "./Helper/CardSvg";
import { motion } from "framer-motion";
import { information } from "../assets/data/data";

export function Pricing() {
  function PricingCard({ children, description, price, type, subscription, buttonText, active }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-4 md:w-1/2 lg:w-1/3"
      >
        <div
          className={`relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-primaryBg px-8 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] ${
            type === "Business" ? "shadow-[-1px_0_6px] transform scale-103 shadow-greenPrimary" : ""
          }`}
        >
          <span className="mb-3 block text-lg font-semibold text-greenSecondary">{type}</span>
          <h2 className="mb-5 text-[42px] font-bold text-white">
            {price}
            <span className="text-base font-medium text-white">/ {subscription}</span>
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-white">{description}</p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/#"
            className={`${
              active
                ? "block w-full rounded-md border border-greenPrimary bg-greenPrimary p-3 text-center text-base font-medium text-white cursor-pointer hover:bg-greenPrimary transition duration-400 ease-in-out font-inter700"
                : "block w-full rounded-md border bg-inherit border-greenPrimary p-3 text-center text-base font-medium text-white cursor-pointer hover:bg-greenPrimary transition duration-400 ease-in-out font-inter700"
            }`}
          >
            {buttonText}
          </motion.a>
          <div>
            <CardSvg />
          </div>
        </div>
      </motion.div>
    );
  }

  const List = ({ children }) => <p className="text-base text-white">{children}</p>;

  const pricing = information[2].pricing

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 overflow-hidden bg-primaryBg pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] w-11/12 mx-auto"
    >
      <div className="container mx-auto">
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="-mx-4 flex flex-wrap"
        >
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-white">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap gap-0" >
            {[
              {
                type: "Personal",
                price: "$59",
                subscription: "year",
                description: "Perfect for using in a personal website or a client project.",
                buttonText: "Choose Personal",
                children: [
                  "1 User",
                  "All UI components",
                  "Lifetime access",
                  "Free updates",
                  "Use on 1 (one) project",
                  "3 Months support",
                ],
              },
              {
                type: "Business",
                price: "$199",
                subscription: "year",
                description: "Perfect for using in a personal website or a client project.",
                buttonText: "Choose Business",
                active: true,
                children: [
                  "5 Users",
                  "All UI components",
                  "Lifetime access",
                  "Free updates",
                  "Use on 3 (Three) projects",
                  "4 Months support",
                ],
              },
              {
                type: "Professional",
                price: "$256",
                subscription: "year",
                description: "Perfect for using in a personal website or a client project.",
                buttonText: "Choose Professional",
                children: [
                  "Unlimited Users",
                  "All UI components",
                  "Lifetime access",
                  "Free updates",
                  "Unlimited projects",
                  "12 Months support",
                ],
              },
            ].map((plan, index) => (
              <PricingCard key={plan.type} {...plan}>
                {plan.children.map((feature, i) => (
                  <List key={i}>{feature}</List>
                ))}
              </PricingCard>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

