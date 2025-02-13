"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants, PanInfo } from "framer-motion";
import { wrap } from "popmotion";
import Image, { StaticImageData } from "next/image";

import ArrowSvgAni from "./svg/ArrowSvgAni";
import BackArrowSvgAni from "./svg/BackArrowSvgAni";

const sliderVariants: Variants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

interface IMAGE {
  IMAGES: string[] | StaticImageData[];
}

const Carousel: React.FC<IMAGE> = ({ IMAGES }) => {
  const [[imageCount, direction], setImageCount] = useState<[number, number]>([
    0, 0,
  ]);
  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection: number): void => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo): void => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;

    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number): void => {
    const changeDirection = imageId > activeImageIndex ? 1 : -1;
    setImageCount([imageId, changeDirection]);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full lg:h-[650px] md:h-[400px] h-[200px]  overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={imageCount}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
            className="absolute w-full h-full"
          >
            <Image
              className="w-full h-full object-contain"
              src={IMAGES[activeImageIndex]}
              alt="Slide"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-4">
        <div
          onClick={() => swipeToImage(-1)}
          className="px-4 py-2 bg-dr-button dark:bg-lg-button  rounded-full"
        >
          <BackArrowSvgAni />
        </div>
        <button
          onClick={() => swipeToImage(1)}
          className="px-4 py-2 bg-dr-button text-lg-text dark:bg-lg-button  rounded-full"
        >
          <ArrowSvgAni />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-4 flex gap-2">
        {IMAGES.map((image, i) => (
          <div
            key={i}
            onClick={() => skipToImage(i)}
            className="cursor-pointer border-2 border-transparent hover:border-gray-600 rounded "
          >
            <Image
              src={image}
              alt={`Thumbnail ${i + 1}`}
              className={`rounded object-contain w-20 h-[50px] ${
                i === activeImageIndex ? "border-2 border-blue-500" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carousel;
