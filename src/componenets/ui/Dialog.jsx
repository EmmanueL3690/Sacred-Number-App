"use client";

import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg">{children}</div>
    </div>
  );
}

export function DialogContent({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl shadow-2xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="p-4 border-b border-orange-200">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3 className="text-lg font-bold">{children}</h3>;
}
