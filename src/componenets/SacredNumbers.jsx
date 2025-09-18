// file: src/componenets/SacredNumbers.jsx
// "use client";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ add this at top
// import { combinations } from "../combinations";
// import { readings } from "../readings"; 

// export default function SacredNumbers() {
//   const [show, setShow] = useState(false);
//   const [openId, setOpenId] = useState(null); // ✅ Added for accordion toggle

//   // Unique list (already clean, but safe)
//   const uniqueCombinations = [...new Set(combinations)];

//   return (
//     <div className="mt-12 space-y-12">
//       {/* Combinations Section */}
//       <section className="text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
//           Sacred Number Combinations
//         </h2>
//         <button
//           onClick={() => setShow(!show)}
//           className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition"
//         >
//           TB
//         </button>

//         {show && (
//           <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
//             {uniqueCombinations.map((combo, index) => (
//               <div
//                 key={index}
//                 className="p-3 bg-white border border-orange-300 rounded-lg shadow text-sm font-bold text-gray-800"
//               >
//                 ({combo})
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Accordion Section */}
//       <section>
//         <h2 className="text-xl font-black mb-4 text-center">
//           Sacred Numbers – Meanings
//         </h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {readings.map((item) => (
//             <div
//               key={item.id}
//               className={`border-l-4 rounded-md overflow-hidden ${item.color}`}
//             >
//               <button
//                 onClick={() => setOpenId(openId === item.id ? null : item.id)}
//                 className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
//               >
//                 <span>
//                   {item.id}. {item.title}
//                 </span>
//                 <span className="text-xl">
//                   {openId === item.id ? "×" : "+"}
//                 </span>
//               </button>

//               {openId === item.id && (
//                 <div className="px-4 pb-4 text-sm text-gray-700 space-y-1">
//                   {item.content.map((line, i) => (
//                     <div key={i}>{line}</div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { combinations } from "../combinations";
// import { readings } from "../readings.js";
// import { db } from "../firebase.js"; // ✅ adjust path if needed
// import {
//   collection,
//   query,
//   orderBy,
//   onSnapshot,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// export default function SacredNumbers() {
//   const [show, setShow] = useState(false);
//   const [openId, setOpenId] = useState(null); // accordion toggle
//   const [users, setUsers] = useState([]); // Firestore users
//   const [search, setSearch] = useState(""); // search input

//   // Unique list
//   const uniqueCombinations = [...new Set(combinations)];

//   // Fetch user details from Firestore
//   useEffect(() => {
//     const q = query(collection(db, "userDetails"), orderBy("createdAt", "desc"));
//     const unsub = onSnapshot(q, (snapshot) => {
//       setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     });
//     return unsub;
//   }, []);

//   // Delete function
//   const handleDelete = async (collectionName, id) => {
//     await deleteDoc(doc(db, collectionName, id));
//   };

//   // Filter users based on search
//   const filteredUsers = users.filter((user) =>
//     search.trim() === ""
//       ? true
//       : user.numberPicked?.some((num) =>
//           num.toString().includes(search.trim())
//         )
//   );

//   return (
//     <div className="mt-12 space-y-12">
//       {/* 🔹 Combinations Section */}
//       <section className="text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
//           Sacred Number Combinations
//         </h2>
//         <button
//           onClick={() => setShow(!show)}
//           className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition"
//         >
//           TB
//         </button>

//         {show && (
//           <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
//             {uniqueCombinations.map((combo, index) => (
//               <div
//                 key={index}
//                 className="p-3 bg-white border border-orange-300 rounded-lg shadow text-sm font-bold text-gray-800"
//               >
//                 ({combo})
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* 🔹 Accordion Section */}
//       <section>
//         <h2 className="text-xl font-black mb-4 text-center">
//           Sacred Numbers – Meanings
//         </h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {readings.map((item) => (
//             <div
//               key={item.id}
//               className={`border-l-4 rounded-md overflow-hidden ${item.color}`}
//             >
//               <button
//                 onClick={() => setOpenId(openId === item.id ? null : item.id)}
//                 className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
//               >
//                 <span>
//                   {item.id}. {item.title}
//                 </span>
//                 <span className="text-xl">
//                   {openId === item.id ? "×" : "+"}
//                 </span>
//               </button>

//               {openId === item.id && (
//                 <div className="px-4 pb-4 text-sm text-gray-700 space-y-1">
//                   {item.content.map((line, i) => (
//                     <div key={i}>{line}</div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔹 User Details Section */}
//       <section>
//         <h2 className="text-xl font-black mb-4">👥 User Details</h2>

//         {/* Search bar */}
//         <input
//           type="text"
//           placeholder="Search by number (e.g. 56)"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="mb-6 w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
//         />

//         {filteredUsers.length === 0 ? (
//           <p className="text-gray-600">No user details found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {filteredUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className="p-4 relative bg-gradient-to-br from-yellow-50 to-orange-100 shadow-lg rounded-xl border-2 border-orange-200"
//               >
//                 <p className="font-bold text-lg">
//                   {user.name} ({user.age})
//                 </p>
//                 <p className="text-sm text-gray-700">{user.location}</p>
//                 <p className="text-sm text-gray-700">{user.email}</p>
//                 <p className="text-sm text-gray-700">{user.phone}</p>
//                 <p className="mt-2 font-semibold text-orange-600">
//                   Picked Numbers: {user.numberPicked?.join(", ")}
//                 </p>
//                 <button
//                   onClick={() => handleDelete("userDetails", user.id)}
//                   className="absolute top-2 right-2 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { combinations } from "../combinations";
import { readings } from "../readings";

export default function SacredNumbers() {
  const [show, setShow] = useState(false);
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate();

  const uniqueCombinations = [...new Set(combinations)];

  return (
    <div className="mt-12 space-y-12">
      {/* 🔹 Combinations Section */}
      <section className="text-center">
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

      {/* 🔹 Accordion Section */}
      <section>
        <h2 className="text-xl font-black mb-4 text-center">
          Sacred Numbers – Meanings
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {readings.map((item) => (
            <div
              key={item.id}
              className={`border-l-4 rounded-md overflow-hidden ${item.color}`}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
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

      {/* 🔹 Navigate Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/user-details")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-700 transition"
        >
          View User Details
        </button>
      </div>
    </div>
  );
}
