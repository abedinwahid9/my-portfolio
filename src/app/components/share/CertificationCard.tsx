import Image from "next/image";
import { FC } from "react";
import certificate from "@/assets/certificate-1.png";

const CertificationCard: FC = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-[0px_0px_5px_1px_#1E88A8] hover:shadow-[0px_0px_20px_1px_#1E88A8] relative  bg-no-repeat bg-center">
      <Image
        width={0}
        height={0}
        src={certificate}
        alt="certificate"
        className="w-full h-full object-fill z-0"
      />
      <div className="bg-lg-secondary  rounded-tr-[450px] absolute  bottom-0 h-36 w-full p-5">
        <h4 className="text-">programming hero</h4>
      </div>
    </div>
  );
};

export default CertificationCard;
