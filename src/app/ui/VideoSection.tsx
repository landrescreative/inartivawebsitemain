"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    if (videoRef.current) {
      // Ensure the video plays when unmuted
      if (isMuted) {
        videoRef.current.play();
      }
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="">
      {/* Video Section */}
      <section className="pb-12 md:py-10 px-2 md:px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:container mx-auto text-center"
        >
          <div className="overflow-hidden rounded-lg shadow-lg relative">
            <motion.video
              ref={videoRef}
              src="/IntroInartivaoptimizado.mp4"
              autoPlay
              loop
              playsInline
              muted={isMuted}
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleToggleMute}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <AnimatePresence>
              {!isMuted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded"
                >
                  Click o tap para mutear
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isMuted && (
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleToggleMute}
                  className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                >
                  <FaVolumeMute size={24} />
                </motion.button>
              )}
            </AnimatePresence>
            <BorderBeam size={700} borderWidth={4} colorFrom="#2518FF" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default VideoSection;
