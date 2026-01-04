'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import * as XLSX from 'xlsx';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 1. SIMPLE SECURITY (Replace '1234' with a hard password)
  const handleLogin = () => {
    if (password === 'kmgurukulam@25') { 
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Wrong Password!");
    }
  };

  // 2. FETCH DATA FROM FIREBASE
  const fetchData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "admissions"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Check console.");
    }
    setLoading(false);
  };

  // 3. EXPORT TO EXCEL FUNCTION
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admissions");
    XLSX.writeFile(workbook, "KM_Gurukulam_Admissions.xlsx");
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            className="border p-2 rounded w-full mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  // --- DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admissions Dashboard</h1>
          <button 
            onClick={downloadExcel}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 flex items-center gap-2"
          >
            Download Excel File
          </button>
        </div>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Parent Name</th>
                  <th className="px-6 py-3">Child Name</th>
                  <th className="px-6 py-3">Class</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{student.parentName}</td>
                    <td className="px-6 py-4">{student.childName}</td>
                    <td className="px-6 py-4">{student.classApplying}</td>
                    <td className="px-6 py-4">{student.phone}</td>
                    <td className="px-6 py-4">
                      {/* Convert Timestamp to readable date if needed */}
                      {student.submittedAt?.seconds ? new Date(student.submittedAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}