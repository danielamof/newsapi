import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 w-full max-w-xs md:max-w-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-lg font-bold mb-2 text-center ${className}`}>
      {children}
    </h2>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`text-gray-700 text-center ${className}`}>
      {children}
    </div>
  );
};
