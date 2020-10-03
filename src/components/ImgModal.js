import React from 'react';
import { motion } from 'framer-motion';

export const ImgModal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      onClick={handleClick}
    >
      <img src={selectedImg && selectedImg.url} alt="enlarged version" />
    </motion.div>
  );
};
