"use client";
import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function ReportsDashboard() {
  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null); // currently editing
  const [editNumbers, setEditNumbers] = useState("");
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "userReports"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setReports(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      await deleteDoc(doc(db, "userReports", id));
    }
  };

  // ✅ Open edit popup
  const handleEdit = (report) => {
    setEditingReport(report);
    setEditNumbers(report.numbers?.join(", ") || "");
    setEditText(report.report || "");
  };

  // ✅ Save updated report
  const handleSaveEdit = async () => {
    if (!editingReport) return;

    const ref = doc(db, "userReports", editingReport.id);
    await updateDoc(ref, {
      numbers: editNumbers.split(",").map((n) => n.trim()),
      report: editText,
    });

    setEditingReport(null);
    setEditNumbers("");
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 p-6 sm:p-10">
      <h2 className="text-3xl font-extrabold text-red-700 text-center mb-8">
        📝 Saved Reports
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reports.length > 0 ? (
          reports.map((report) => (
            <div
              key={report.id}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {report.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  🔢 Numbers: {report.numbers?.join(", ")}
                </p>
                <p className="text-sm text-gray-700 italic whitespace-pre-wrap">
                  {report.report}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  📅{" "}
                  {report.createdAt?.seconds
                    ? new Date(report.createdAt.seconds * 1000).toLocaleString()
                    : "No date"}
                </p>
              </div>

              {/* ✅ Edit & Delete Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(report)}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(report.id)}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 font-medium col-span-full">
            No reports found yet.
          </p>
        )}
      </div>

      {/* ✅ Edit Popup */}
      {editingReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ✏️ Edit Report
            </h3>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Numbers (comma separated)
            </label>
            <input
              type="text"
              value={editNumbers}
              onChange={(e) => setEditNumbers(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Report Text
            </label>
            <textarea
              rows={4}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingReport(null)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                ❌ Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
              >
                💾 Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
