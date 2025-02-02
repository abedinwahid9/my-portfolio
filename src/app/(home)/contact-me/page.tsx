import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import AnimatedInput from "@/app/components/share/AnimatedInput";
import SocialLinks from "@/app/components/share/SocialLinks";
import React from "react";

const page = () => {
  const email = " abedinwahid9@gmail.com";
  const address = "Dhaka, Bangladesh.";

  return (
    <section className="py-12 md:px-5 px-3 justify-center flex items-center  flex-col  lg:flex-row gap-5">
      <div className="md:w-1/2 w-full h-full">
        <div className="flex flex-col gap-2 items-center  ">
          <h3 className="dark:text-lg-text  lg:text-2xl text-base font-extrabold text-dr-text font-playfairDisplay capitalize text-center">
            &quot;Let’s Build Something Awesome Together!&quot;
          </h3>
          <p className="dark:text-lg-text md:text-3xl  text-xl  font-extrabold text-dr-text font-playfairDisplay capitalize">
            {email}
          </p>
          <p className="dark:text-lg-text  text-lg font-extrabold text-dr-text  capitalize">
            {address}
          </p>
          <div className=" py-2">
            <SocialLinks />
          </div>
          <h3 className="dark:text-lg-text  lg:text-2xl text-base font-extrabold text-dr-text font-playfairDisplay capitalize  text-center">
            &quot;Whether you have a project idea, a question, or just want to
            say hello — I’d love to hear from you!!&quot;
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center py-16">
          <h5 className="dark:text-lg-text text-5xl   font-extrabold text-dr-text font-playfairDisplay capitalize">
            Thank you
          </h5>
          <p className="dark:text-lg-text tracking-widest text-xl  font-extrabold text-dr-text  capitalize">
            Have a good day
          </p>
        </div>
      </div>

      <form
        action=""
        className="flex md:w-1/2 w-full items-center flex-col gap-4 bg-lg-button/10 md:p-12 p-5 rounded-tl-[150px]"
      >
        <h3 className="dark:text-lg-text  lg:text-2xl text-base font-extrabold text-dr-text font-playfairDisplay capitalize text-center">
          &quot;Get in Touch with Me&quot;
        </h3>
        <AnimatedInput />
        <AnimatedInput />
        <AnimatedInput />
        <AnimatedInput />
        <AnimatedInput />
        <div className="w-full">
          <AnimatedBtn title="Let’s Talk" width="w-full" />
        </div>
      </form>
    </section>
  );
};

export default page;
