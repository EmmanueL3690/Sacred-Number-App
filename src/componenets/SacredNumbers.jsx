// file: src/componenets/SacredNumbers.jsx
"use client";
import { useState } from "react";
import { combinations } from "../combinations";

export default function SacredNumbers() {
  const [show, setShow] = useState(false);

  // Unique list (already clean, but safe)
  const uniqueCombinations = [...new Set(combinations)];

  return (
    <section className="mt-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
        Sacred Number Combinations
      </h2>
      <button
        onClick={() => setShow(!show)}
        className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition"
      >
        TB
      </button>

      {show && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {uniqueCombinations.map((combo, index) => (
            <div
              key={index}
              className="p-3 bg-white border border-orange-300 rounded-lg shadow text-sm font-bold text-gray-800"
            >
              ({combo})
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
