import AnimatedBtn from "@/app/components/share/AnimatedBtn";
import AnimeDivider from "@/app/components/share/AnimeDivider";
import Title from "@/app/components/share/Title";
import ArrowSvgAni from "@/app/components/svg/ArrowSvgAni";
import React from "react";

const page = () => {
  return (
    <div className=" py-10 md:px-5 px-3">
      <section className="flex md:flex-row flex-col gap-3">
        <div className="md:w-2/3 w-full">
          <Title title='"Skills That Power My Code"' />
        </div>
        <div className="md:w-1/3 w-full">
          <AnimatedBtn
            href="/contact-me"
            title="contact me"
            width="w-full"
            show={true}
            icon={<ArrowSvgAni />}
          />
        </div>
      </section>

      <AnimeDivider />

      <section>
        <div className="md:w-2/3 w-full">
          <Title title="front end technology" />
        </div>
      </section>
    </div>
  );
};

export default page;
