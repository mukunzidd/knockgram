import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export const ImgGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            key={doc.id}
          >
            <img
              src={doc.url}
              alt="uploaded pic"
              onClick={() => setSelectedImg(doc)}
            />
          </motion.div>
        ))}
    </div>
  );
};
