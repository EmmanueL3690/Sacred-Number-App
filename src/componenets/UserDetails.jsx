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
} from "firebase/firestore";

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = query(collection(db, "userDetails"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "userDetails", id));
  };

  // ✅ Search filter
  const filteredUsers = users.filter((user) =>
    search.trim() === ""
      ? true
      : user.numberPicked?.some((num) =>
          num.toString().includes(search.trim())
        )
  );

  // ✅ Copy ALL users
  const copyAllToClipboard = () => {
    const notepadContent = filteredUsers
      .map(
        (user) => `Name: ${user.name}
Age: ${user.age}
Location: ${user.location}
Email: ${user.email}
Phone: ${user.phone}
Picked Numbers: ${user.numberPicked?.join(", ")}
-----------------------------`
      )
      .join("\n\n");

    navigator.clipboard.writeText(
      notepadContent || "No user data available."
    );
    alert("All user details copied!");
  };

  // ✅ Copy single user
  const copyUser = (user) => {
    const userContent = `Name: ${user.name}
Age: ${user.age}
Location: ${user.location}
Email: ${user.email}
Phone: ${user.phone}
Picked Numbers: ${user.numberPicked?.join(", ")}`;
    navigator.clipboard.writeText(userContent);
    alert(`Copied ${user.name}'s details!`);
  };

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
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.6)] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.2),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
              <p className="text-sm text-gray-600">📅 Age: {user.age}</p>
              <p className="text-sm text-gray-600">📍Location: {user.location}</p>
              <p className="text-sm text-gray-600">✉️ Email: {user.email}</p>
              <p className="text-sm text-gray-600">📞 Phone: {user.phone}</p>
              <p className="text-sm text-gray-600">
                🔢 Number Picked: {user.numberPicked?.join(", ")}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => copyUser(user)}
                  className="flex-1 bg-green-500 text-white px-3 py-2 rounded-xl shadow hover:bg-green-600 transition"
                >
                  📋 Copy
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="flex-1 bg-red-500 text-white px-3 py-2 rounded-xl shadow hover:bg-red-600 transition"
                >
                  🗑 Delete
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
          onClick={copyAllToClipboard}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition"
        >
          📋 Copy All
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
