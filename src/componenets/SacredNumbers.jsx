"use client";

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import combinations from "../combinations";
import { readings } from "../readings";
import testimoniesData from "../testimoniesData";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";

export default function SacredNumbers() {
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ---------------- IMPROVED TESTIMONY SEARCH ---------------- */
  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return Object.values(testimoniesData);

    const keyword = searchTerm.toLowerCase().trim();

    return Object.values(testimoniesData).filter((item) => {
      const searchableText = `
        ${item.id}
        ${item.title}
        ${item.content}
        ${item.category}
      `
        .toLowerCase()
        .replace(/\s+/g, " ");

      return searchableText.includes(keyword);
    });
  }, [searchTerm]);

  const handleOpenModal = (testimony) => {
    setSelectedTestimony(testimony);
    setIsModalOpen(true);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md shadow rounded-b-2xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
          Sacred Number App
        </h1>

        <button
          onClick={() => navigate("/user-details")}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          View User Details
        </button>
      </header>

      <main className="p-6 sm:p-10 space-y-12">

        {/* ===== Sacred Number Combinations ===== */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
            Sacred Number Combinations
          </h2>

          <input
            type="text"
            placeholder="Search e.g. 1+3=6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto p-3 border border-orange-400 rounded-xl shadow mb-6 text-center"
          />

          <div className="grid gap-4">
            {combinations
              .filter((row) =>
                row.items.some((combo) =>
                  combo.replace(/\s+/g, "").includes(
                    search.replace(/\s+/g, "")
                  )
                )
              )
              .map((row) => (
                <div
                  key={row.row}
                  className="p-4 bg-white/80 border border-orange-300 rounded-xl shadow"
                >
                  <h3 className="font-bold text-lg text-orange-700 mb-2">
                    ROW {row.row}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {row.items.map((combo, index) => (
                      <div
                        key={index}
                        className="p-3 bg-orange-50 border border-orange-300 rounded-lg text-sm font-bold"
                      >
                        {combo}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ===== Sacred Numbers Meanings ===== */}
        <section>
          <h2 className="text-xl font-black mb-4 text-center">
            Sacred Numbers – Meanings
          </h2>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {readings.map((item) => (
              <div
                key={item.id}
                className={`border-l-4 rounded-xl bg-white/70 shadow ${item.color}`}
              >
                <button
                  onClick={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                  className="w-full flex justify-between px-4 py-3 font-semibold"
                >
                  <span>{item.id}. {item.title}</span>
                  <span>{openId === item.id ? "×" : "+"}</span>
                </button>

                {openId === item.id && (
                  <div className="px-4 pb-4 text-sm text-gray-700">
                    {item.content.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===== Sacred Solutions Search (IMPROVED) ===== */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              Sacred Solutions Search
            </h2>
            <p className="font-bold">
              Search by number, title, category, or keywords
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type anything…"
              className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded-xl border-2 border-orange-300 shadow"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResults.length ? (
              filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-orange-200 rounded-xl p-4 shadow"
                >
                  <h3 className="font-black text-lg text-orange-700">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 line-clamp-3">
                    {item.content}
                  </p>

                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full inline-block mt-2">
                    {item.category}
                  </span>

                  <div className="mt-4">
                    <Button onClick={() => handleOpenModal(item)}>
                      View
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No results found for “{searchTerm}”
              </p>
            )}
          </div>
        </section>
      </main>

      {/* ===== MODAL ===== */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-black">
              {selectedTestimony?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedTestimony && (
            <div className="space-y-4">
              <p className="font-bold">{selectedTestimony.content}</p>
              <Button onClick={() => setIsModalOpen(false)} className="w-full">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}




