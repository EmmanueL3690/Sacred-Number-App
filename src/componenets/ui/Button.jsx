"use client";

import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-xl px-4 py-2 font-bold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
