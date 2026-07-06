import React, { useState } from "react";

function SearchFilter() {
  // Student names array
  const students = [
    "Ali",
    "Ahmed",
    "Ayesha",
    "Fatima",
    "Hassan",
    "Sara",
    "Usman"
  ];

  // State for search input
  const [search, setSearch] = useState("");

  // Filter names (case-insensitive)
  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Student Search</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display Filtered List */}
      {filteredStudents.length > 0 ? (
        <ul>
          {filteredStudents.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchFilter;