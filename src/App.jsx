// file: App.jsx
"use client";

import React from "react";
import TestimoniesGrid from "./componenets/TestimoniesGrid";
import SacredNumbers from "./componenets/SacredNumbers"; // ✅ new

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex flex-col items-center justify-start p-6 sm:p-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
          Sacred Number App
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-800">
          Explore divine wisdom through sacred number-letter codes ✨
        </p>
      </header>

      <main className="w-full max-w-6xl">
        <TestimoniesGrid />
        <SacredNumbers /> {/* ✅ added here */}
      </main>

      <footer className="mt-12 text-center text-sm font-bold text-gray-600">
        © {new Date().getFullYear()} Sacred Solutions Archive. All rights reserved.
      </footer>
    </div>
  );
}

