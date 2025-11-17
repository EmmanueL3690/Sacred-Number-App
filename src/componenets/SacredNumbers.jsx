"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import combinations from "../combinations";
import { readings } from "../readings";
import testimoniesData from "../testimoniesData";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";

export default function SacredNumbers() {
  const [show, setShow] = useState(false);
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");


  const uniqueCombinations = [...new Set(combinations)];

  // 🔍 Search / Modal logic
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter testimonies
  const filteredResults = Object.values(testimoniesData).filter((item) =>
    [item.id, item.title, item.content, item.category]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (testimony) => {
    setSelectedTestimony(testimony);
    setIsModalOpen(true);
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

    {/* ===== Sacred Number Combinations ===== */}
    <section className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
        Sacred Number Combinations
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search e.g. 1+3=6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto p-3 border border-orange-400 rounded-xl shadow mb-6 text-center"
      />

      {/* Results */}
      <div className="mt-6 grid grid-cols-1 gap-4">
        {combinations
          .filter((item) =>
            item.items.some((combo) =>
              combo.replace(/\s+/g, "").includes(search.replace(/\s+/g, ""))
            )
          )
          .map((item) => (
            <div
              key={item.row}
              className="p-4 bg-white/80 backdrop-blur border border-orange-300 rounded-xl shadow"
            >
              <h3 className="font-bold text-lg text-orange-700 mb-2">
                ROW {item.row}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {item.items.map((combo, index) => (
                  <div
                    key={index}
                    className="p-3 bg-orange-50 border border-orange-300 rounded-lg shadow text-sm font-bold text-gray-800"
                  >
                    {combo}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>



        {/* ===== Accordion: Sacred Numbers Meanings ===== */}
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

        {/* ===== Sacred Solutions Search ===== */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Sacred Solutions Search
            </h2>
            <p className="text-base sm:text-lg font-bold text-black drop-shadow-md">
              Search wisdom through the mystical number-letter combinations
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by number, letter, title, category, or keywords..."
              className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded-xl border-2 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-md"
            />
          </div>

          {/* Results */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-white via-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="font-black text-lg text-orange-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {item.content}
                  </p>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full mt-2 inline-block">
                    {item.category}
                  </span>
                  <div className="mt-4 flex justify-between">
                    <Button
                      onClick={() => handleOpenModal(item)}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 text-sm font-bold rounded-lg"
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No results found for "{searchTerm}"
              </p>
            )}
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

