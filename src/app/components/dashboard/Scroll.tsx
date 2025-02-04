"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const IMAGES = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Scroll = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    const changeDirection = imageId > activeImageIndex ? 1 : -1;
    setImageCount([imageId, changeDirection]);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="relative w-[600px] h-[350px] overflow-hidden">
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
              src={IMAGES[activeImageIndex]}
              alt="Slide"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => swipeToImage(-1)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          PREV
        </button>
        <button
          onClick={() => swipeToImage(1)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          NEXT
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-4 flex gap-2">
        {IMAGES.map((image, i) => (
          <div
            key={i}
            onClick={() => skipToImage(i)}
            className="cursor-pointer border-2 border-transparent hover:border-gray-600 rounded"
          >
            <Image
              src={image}
              alt={`Thumbnail ${i + 1}`}
              width={80}
              height={50}
              className={`rounded ${
                i === activeImageIndex ? "border-2 border-blue-500" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Scroll;
