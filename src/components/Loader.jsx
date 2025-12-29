import React from "react";
import './Loader.css'; // We'll create the heart-beat animation in CSS

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="heart"></div>
    </div>
  );
};

export default Loader;
