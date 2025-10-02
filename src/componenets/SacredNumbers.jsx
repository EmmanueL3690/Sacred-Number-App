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
    1: [
      "1@1","1@2","1@3","1@4","1@5", "1@6","1@7","1@8","1@9","1@10","1@11","1@12","1@13","1@14","1@15","1@16","1@5,6","1,1","2,1","3,1","4,1","5,1","6,1","7,1","8,1","9,1","10,1","11,1","12,1","13,1","14,1","15,1","16,1","1A"
    ],
    2: [
    "2@1", "2@2", "2@3", "2@4", "2&4@5", "2@6", "2@7", "2@8", "2@9", "2@10",
    "2@11", "2@12", "2@13", "2@14", "2@16", "1,2", "2,2", "4,2", "5,2", "6,2",
    "7,2", "8,2", "9,2", "10,2", "11,2", "12,2", "13,2", "13,2_alt", "14,2",
    "15,2", "16,2", "2A"
    ],
    3: [
        "3@1","3@2","3@3","3@4","3@5","3@6","3@7","3@8","3@9","3@10","3@11","3@12","3@13","3@14","3@15","3@16",
        "1,3","2,3","3,3","4,3",
    ],
    4: [
        "4@1","4@2","4@3","4@4","4@5","4@6","4@7","4@8","4@9","4@10","4@11","4@12","4@13","4@14","4@15","4@16",
        "ISE","AISAN",
        "IRINAJO-1","IRINAJO-2","IRINAJO-3","IRINAJO-4","IRINAJO-5","IRINAJO-6","IRINAJO-7","IRINAJO-8","IRINAJO-9","IRINAJO-10","IRINAJO-11","IRINAJO-12","IRINAJO-13","IRINAJO-14","IRINAJO-15",
        "ILE-OMO"
    ],
    5: [
          "6@1","6@2","6@3","6@4","6@5","6@6","6@7","6@8","6@9","6@10","6@11","6@12","6@13","6@14","6@15","6@16",
          "6A"
    ],
    6: [
        "6@1","6@2","6@3","6@4","6@5","6@6","6@7","6@8","6@9","6@10","6@11","6@12","6@13","6@14","6@15","6@16",
        "6A"
    ],
    7: [
       "7@1","7@2","7@3","7@4","7@5","7@6","7@7","7@8","7@9","7@10",
        "7@11","7@12","7@13","7@14","7@15","7@16",
    ],
    // GG: [
    //   "1GG","2GG","3GG","4GG","5GG","6GG","7GG","8GG","9GG","10GG"
    // ],
    8: [
        "8@1","8@2","8@3","8@4","8@5","8@6","8@7","8@8","8@9","8@10",
        "8@11","8@12","8@13","8@14","8@16","8A","8B"
    ],
    // HH: ["1HH","2HH","3HH","4HH","5HH","6HH","7HH","8HH"],
    // HA: ["1HA","2HA","3HA"],
    // HB: ["1HB","2HB"],
    9: [
        "9@1", "9@2", "9@3", "9@4", "9@5", "9@6", "9@7", "9@8", "9@9", "9@10",
        "9@11", "9@12", "9@13", "9@14", "9@15", "9@16", "9A",
        "2,9", "3,9", "4,9", "5,9", "6,9", "7,9", "8,9", "9,9",
        "10,9", "11,9", "12,9", "13,9", "14,9", "15,9", "16,9",
    ],
    // II: ["1II","2II","3II","4II","5II","6II"],
    10: [
      "10@1", "10@2", "10@3", "10@4", "10@5", "10@6", "10@7", "10@8", "10@9", "10@10",
      "10@11", "10@12", "10@13", "10@14", "10@15", "10@16",
      "10,2", "10,7", "10,10", "10,12", "10,13", "10,14",
      "10A",
      "1,10", "2,10", "3,10", "4,10", "5,10", "6,10", "7,10", "8,10", "9,10", "10,10b",
      "11,10", "12,10", "13,10", "14,10", "15,10", "16,10"
    ],
    11: [
      "11@1","11@2","11@3","11@4","11@5","11@6","11@7","11@8","11@9","11@10",
      "11@11","11@12","11@13","11@14","11@15","11@16","11A",
      "1,11","2,11","3,11","4,11","5,11","6,11","7,11","8,11","9,11","10,11",
      "11,11","12,11","13,11","14,11","15,11","16,11",
    ],
    12: [
      "12@1","12@2","12@3","12@4","12@5","12@6","12@7","12@8","12@9","12@10",
      "12@11","12@12","12@13","12@14","12@15","12@16",
      "12A","12B"
    ],
    // M: [
    //   "1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","12M","13M","14M","15M","16M",
    //   "13,5M","13,7M","13,8M","13,15M","13,16M","13MA","13Mb",
    //   "2,13M","3,13M","4,13M","5,13M","6,13M","7,13M","8,13M","9,13M","10,13M","11,13M","12,13M","14,13M","15,13M","16,13M"
    // ],
    // N: [
    //   "1N","2N","3N","4N","5N","6N","7N","8N","9N","10N","11N","12N","13N","14N","15N","16N"
    // ],
    // O: [
    //   "1O","2O","3O","4O","5O","6O","7O","8O","9O","10O","11O","12O","13O","14O","15O","16O"
    // ],
    // P: [
    //   "1P","2P","3P","4P","5P","6P","7P","8P","9P","10P","11P","12P","13P","14P","15P","16P"
    // ],
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
          Series  Complete
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
