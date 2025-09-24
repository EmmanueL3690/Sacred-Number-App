"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { combinations } from "../combinations";
import { readings } from "../readings";
import testimoniesData from "../testimoniesData"; // ✅ moved here
import { Button } from "./ui/Button";
import jsPDF from "jspdf";  
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";

export default function SacredNumbers() {
  const [show, setShow] = useState(false);
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const uniqueCombinations = [...new Set(combinations)];
  const seriesData = {
    A: [
      "1A","2A","3A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A",
      "18A","19A","20A","21A","22A","23A","24A","25A","26A","27A","28A","29A","30A","31A","32A","33A","34A"
    ],
    B: [
      "1B","2B","3B","4B","5B","6B","7B","8B","9B","10B","11B","12B","13B","14B","15B","16B",
      "1,2B","2,2B","3,2B","4,2B","5,2B","6,2B","7,2B","8,2B","9,2B","10,2B","11,2B","12,2B","13,2B","14,2B","15,2B","16,2B",
      "2AA","2AB"
    ],
    C: [
      "1C","2C","3C","4C","5C","6C","7C","8C","9C","10C","11C","12C","13C","14C","15C","16C",
      "1,3C","2,3C","3,3C","4,3C","5,3C","8,3C","12,3C","13,3C","14,3C","15,3C","16,3C"
    ],
    D: [
      "1D","2D","3D","4D","5D","6D","7D","8D","9D","10D","11D","12D","13D","14D","15D","16D",
      "41D","42D","43D","44D","45D","46D","48D","49D","410D","411D","414D","415D","4DA","4Db"
    ],
    E: [
      "2E","3E","4E","5E","6E","7E","8E","9E","10E","11E","12E","13E","14E","15E","16E","5E1","5A2"
    ],
    F: [
      "1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F","12F","13F","14F","15F","16F","6F1","6F2"
    ],
    G: [
      "1G","2G","3G","4G","5G","6G","7G","8G","9G","10G","11G","12G","13G","14G","15G","16G"
    ],
    GG: [
      "1GG","2GG","3GG","4GG","5GG","6GG","7GG","8GG","9GG","10GG"
    ],
    H: [
      "1H","2H","3H","4H","5H","6H","7H","8H","9H","10H","11H","12H","13H","14H","15H","16H"
    ],
    HH: ["1HH","2HH","3HH","4HH","5HH","6HH","7HH","8HH"],
    HA: ["1HA","2HA","3HA"],
    HB: ["1HB","2HB"],
    I: [
      "1I","2I","3I","4I","5I","6I","7I","8I","9I","10I","11I","12I","13I","14I","15I","16I"
    ],
    II: ["1II","2II","3II","4II","5II","6II"],
    J: [
      "1J","2J","3J","4J","5J","6J","7J","8J","9J","10J","11J","12J","13J","14J","15J","16J",
      "10,2J","10,7J","10,10J","10,12J","10,13J","10,14J","10JA","10Jb",
      "1,10J","2,10J","3,10J","4,10J","5,10J","6,10J","7,10J","8,10J","9,10J","10,10J","11,10J","12,10J","13,10J","14,10J","15,10J","16,10J"
    ],
    K: [
      "1K","2K","3K","4K","5K","6K","7K","8K","9K","10K","11K","12K","13K","14K","15K","16K",
      "11,3K","11,7K","11,15K","11KA","11Kb",
      "1,11K","2,11K","3,11K","4,11K","5,11K","6,11K","7,11K","8,11K","9,11K","10,11K","11,11K","12,11K","13,11K","14,11K","15,11K","16,11K"
    ],
    L: [
      "1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","14L","15L","16L",
      "12,11L","12,12L","12,13L","12,14L","12AL","12bL",
      "1,12L","2,12L","3,12L","4,12L","6,12L","7,12L","8,12L","9,12L","10,12L","11,12L","12,12L","13,12L","14,12L","15,12L","16,12L"
    ],
    M: [
      "1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","12M","13M","14M","15M","16M",
      "13,5M","13,7M","13,8M","13,15M","13,16M","13MA","13Mb",
      "2,13M","3,13M","4,13M","5,13M","6,13M","7,13M","8,13M","9,13M","10,13M","11,13M","12,13M","14,13M","15,13M","16,13M"
    ],
    N: [
      "1N","2N","3N","4N","5N","6N","7N","8N","9N","10N","11N","12N","13N","14N","15N","16N"
    ],
    O: [
      "1O","2O","3O","4O","5O","6O","7O","8O","9O","10O","11O","12O","13O","14O","15O","16O"
    ],
    P: [
      "1P","2P","3P","4P","5P","6P","7P","8P","9P","10P","11P","12P","13P","14P","15P","16P"
    ],
  };

  // flatten all IDs for export
  const allIds = Object.entries(seriesData)
    .map(([key, values]) => `${key}: ${values.join(", ")}`)
    .join("\n\n");

  // ✅ Search / Modal logic
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
   <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* ===== ACTION BUTTONS ===== */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => window.print()}
            className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Print
          </button>
          <button
            onClick={() => {
              const doc = new jsPDF();
              doc.text(allIds, 10, 10);
              doc.save("series-ids.pdf");
            }}
            className="px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Export PDF
          </button>
          <button
            onClick={() => {
              const blob = new Blob([allIds], { type: "text/plain" });
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = "series-ids.txt";
              link.click();
            }}
            className="px-5 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Download IDs (.txt)
          </button>
        </div>

        {/* ===== SERIES DISPLAY ===== */}
        <div className="space-y-10">
          {Object.entries(seriesData).map(([letter, ids]) => (
            <div key={letter}>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Series {letter}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {ids.map((id) => (
                  <div
                    key={id}
                    className="p-3 text-center rounded-lg bg-white shadow hover:bg-indigo-50 transition"
                  >
                    {id}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== FOOTER ===== */}
        <div className="text-center border-t pt-6 text-gray-500 italic">
          Series A–P Complete
        </div>
      </div>
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

        {/* 🔹 Testimonies Search (replaced Grid) */}
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
                  <h3 className="font-black text-lg text-orange-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 line-clamp-3">{item.content}</p>
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
