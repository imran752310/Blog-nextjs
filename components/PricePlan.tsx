import { plans } from "@/constant/constantData";
import React from "react";

const PricePlan = () => {
  return (
    <section  className="bg-gray-100 dark:bg-slate-900 py-16">
      <div className="w-[85%] mx-auto px-6 text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Our Pricing Plan
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Our New Latest Amazing Blogs
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="flip-left"
              className={`border rounded-lg shadow-lg p-8 w-full sm:w-72 ${
                plan.highlighted ? "bg-blue-50 border-blue-500" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800">{plan.title}</h3>
              <p className="text-4xl font-extrabold text-blue-600 my-4">
                {plan.price}
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
