"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [reportText, setReportText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "userDetails"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  // ✅ Save Report
  const handleSaveReport = async () => {
    if (!reportText.trim()) return alert("Please write a report first.");

    await addDoc(collection(db, "userReports"), {
      userId: selectedUser.id,
      name: selectedUser.name,
      numbers: selectedUser.numberPicked,
      report: reportText,
      createdAt: new Date(),
    });

    alert("✅ Report saved successfully!");
    setReportText("");
    setIsModalOpen(false);
  };

  // ✅ Search filter
  const filteredUsers = users.filter((user) =>
    search.trim() === ""
      ? true
      : user.numberPicked?.some((num) =>
          num.toString().includes(search.trim())
        )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-6 sm:p-10">
      <h2 className="text-3xl font-extrabold text-orange-700 text-center mb-8 drop-shadow-lg">
        👥 User Details Dashboard
      </h2>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search by number (e.g. 56)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border-none rounded-2xl shadow-lg bg-white/70 backdrop-blur-lg focus:ring-4 focus:ring-orange-300 outline-none"
        />
      </div>

      {/* User Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
              <p className="text-sm text-gray-600">📅 Age: {user.age}</p>
              <p className="text-sm text-gray-600">📍 Location: {user.location}</p>
              <p className="text-sm text-gray-600">✉️ Email: {user.email}</p>
              <p className="text-sm text-gray-600">📞 Phone: {user.phone}</p>
              <p className="text-sm text-gray-600">
                🔢 Number Picked: {user.numberPicked?.join(", ")}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 bg-yellow-500 text-white px-3 py-2 rounded-xl shadow hover:bg-yellow-600 transition"
                >
                  📝 Report
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 font-medium col-span-full">
            No user details found.
          </p>
        )}
      </div>

      {/* Global Buttons */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => navigate("/reports-dashboard")}
          className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-purple-700 transition"
        >
          📑 View Reports
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition"
        >
          ⬅ Back
        </button>
      </div>

      {/* Report Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl w-[90%] max-w-lg">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              Report for {selectedUser.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Numbers Picked:{" "}
              <span className="font-bold">{selectedUser.numberPicked?.join(", ")}</span>
            </p>
            <textarea
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="Write your report here..."
              className="w-full p-3 rounded-xl border border-orange-300 shadow-inner focus:ring-2 focus:ring-orange-400 min-h-[120px] resize-none"
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSaveReport}
                className="flex-1 bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition"
              >
                💾 Save Report
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-600 transition"
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
