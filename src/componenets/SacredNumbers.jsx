"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { combinations } from "../combinations";
import { readings } from "../readings";
import testimoniesData from "../testimoniesData"; // ✅ moved here
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";

export default function SacredNumbers() {
  const [show, setShow] = useState(false);
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const uniqueCombinations = [...new Set(combinations)];

  // ✅ TestimoniesGrid logic
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numbers = Array.from({ length: 34 }, (_, i) => i + 1);
  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];

  const handleCellClick = (number, letter) => {
    const key = `${number}${letter}`;
    const testimony = testimoniesData[key];
    if (testimony) {
      setSelectedTestimony(testimony);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.4)] rounded-b-2xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent drop-shadow">
          Sacred Number App
        </h1>
        <button
          onClick={() => navigate("/user-details")}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          View User Details
        </button>
      </header>

      {/* 🔹 Main */}
      <main className="p-6 sm:p-10 space-y-12">
        {/* Combinations */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
            Sacred Number Combinations
          </h2>
          <button
            onClick={() => setShow(!show)}
            className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition"
          >
            Show Numbers
          </button>

          {show && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {uniqueCombinations.map((combo, index) => (
                <div
                  key={index}
                  className="p-3 bg-white/70 backdrop-blur-md border border-orange-300 rounded-lg shadow text-sm font-bold text-gray-800 hover:scale-105 transition"
                >
                  ({combo})
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Accordion */}
        <section>
          <h2 className="text-xl font-black mb-4 text-center">
            Sacred Numbers – Meanings
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {readings.map((item) => (
              <div
                key={item.id}
                className={`border-l-4 rounded-xl overflow-hidden bg-white/70 backdrop-blur-lg shadow hover:shadow-lg transition ${item.color}`}
              >
                <button
                  onClick={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
                >
                  <span>
                    {item.id}. {item.title}
                  </span>
                  <span className="text-xl">
                    {openId === item.id ? "×" : "+"}
                  </span>
                </button>

                {openId === item.id && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-1">
                    {item.content.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Testimonies Grid (moved here) */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Sacred Solutions Archive
            </h2>
            <p className="text-base sm:text-lg font-bold text-black drop-shadow-md">
              Discover wisdom through the mystical number-letter combinations
            </p>
          </div>

          <div className="overflow-x-auto bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-orange-200 shadow-xl p-4 sm:p-6">
            <div className="min-w-[800px]">
              {/* Header with letters */}
              <div className="grid grid-cols-17 gap-1 mb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12"></div>
                {letters.map((letter) => (
                  <div
                    key={letter}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg flex items-center justify-center font-black text-xs sm:text-sm shadow-lg"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              {/* Number rows */}
              {numbers.map((number) => (
                <div key={number} className="grid grid-cols-17 gap-1 mb-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg flex items-center justify-center font-black text-xs sm:text-sm shadow-lg">
                    {number}
                  </div>

                  {letters.map((letter) => {
                    const key = `${number}${letter}`;
                    const hasData = testimoniesData[key];
                    return (
                      <button
                        key={key}
                        onClick={() => handleCellClick(number, letter)}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-black text-xs transition-all duration-200 border-2 min-h-[40px] min-w-[40px] ${
                          hasData
                            ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600 hover:scale-110 hover:shadow-xl cursor-pointer"
                            : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                        }`}
                        disabled={!hasData}
                      >
                        {key}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded border-2 border-green-600"></div>
              <span className="text-sm font-bold text-black">
                Available Solutions
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-gray-100 rounded border-2 border-gray-300"></div>
              <span className="text-sm font-bold text-black">Coming Soon</span>
            </div>
          </div>

          {/* Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-[95vw] sm:max-w-2xl bg-gradient-to-br from-white via-orange-50 to-yellow-50 border-2 border-orange-300 mx-4 sm:mx-auto">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent text-center">
                  {selectedTestimony?.title}
                </DialogTitle>
              </DialogHeader>

              {selectedTestimony && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-200 shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-black text-sm">
                          {selectedTestimony.id}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full text-center">
                        {selectedTestimony.category}
                      </span>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-4 border-l-4 border-orange-500">
                      <p className="text-base sm:text-lg font-bold text-gray-900 leading-relaxed">
                        {selectedTestimony.content}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-2 sm:py-3 font-black shadow-xl min-h-[44px] w-full sm:w-auto"
                    >
                      Close Sacred Message
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </section>
      </main>
    </div>
  );
}
