'use client';
import React, { useState } from 'react';
import { db } from '../../firebase'; 
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import * as XLSX from 'xlsx';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  // --- SEARCH & FILTER STATE ---
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // --- 1. LOGIN HANDLING ---
  const handleLogin = () => {
    if (password === 'kmgurukulam@25') { 
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Wrong Password!");
    }
  };

  // --- 2. FETCH DATA FROM FIREBASE ---
  const fetchData = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "admissions"), orderBy("submittedAt", "desc"));
      const querySnapshot = await getDocs(q);
      
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        
        let formattedDate = 'N/A';
        let formattedTime = 'N/A';
        let jsDate = null;
        
        if (docData.submittedAt && docData.submittedAt.seconds) {
          // Create a JS Date object for filtering
          jsDate = new Date(docData.submittedAt.seconds * 1000);
          formattedDate = jsDate.toLocaleDateString('en-GB'); // DD/MM/YYYY
          formattedTime = jsDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        }

        return {
          id: doc.id,
          parentName: docData.parentName || '',
          childName: docData.childName || '',
          childDOB: docData.childDOB || '',
          classApplying: docData.classApplying || '',
          phone: docData.phone || '',
          date: formattedDate,
          time: formattedTime,
          jsDate: jsDate // We keep the real date object hidden for filtering logic
        };
      });

      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Check console.");
    }
    setLoading(false);
  };

  // --- 3. FILTER LOGIC (Name + Date Range) ---
  const filteredStudents = students.filter(student => {
    // 1. Check Name Search
    const matchesName = student.childName.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Check Date Range
    let matchesDate = true;
    
    if (student.jsDate) {
      // Create date objects for comparison (resetting time to 00:00:00 to compare dates only)
      const studentDate = new Date(student.jsDate);
      studentDate.setHours(0, 0, 0, 0);

      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        if (studentDate < start) matchesDate = false;
      }

      if (endDate) {
        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);
        if (studentDate > end) matchesDate = false;
      }
    }

    return matchesName && matchesDate;
  });

  // --- 4. EXPORT TO EXCEL ---
  const downloadExcel = () => {
    // We export only the FILTERED students (so you can download just specific dates)
    const excelData = filteredStudents.map(student => ({
      "Parent Name": student.parentName,
      "Child Name": student.childName,
      "DOB": student.childDOB,
      "Class": student.classApplying,
      "Phone": student.phone,
      "Submitted Date": student.date,
      "Submitted Time": student.time
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admissions");
    XLSX.writeFile(workbook, "KM_Gurukulam_Admissions.xlsx");
  };

  // --- RENDER: LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            className="border p-3 rounded w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
          <button 
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  // --- RENDER: DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Admissions Dashboard</h1>
          <div className='flex gap-2'>
            <div className='bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold'>
               Total: {filteredStudents.length}
            </div>
            <button 
                onClick={downloadExcel}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 shadow-md font-semibold transition"
            >
                Download Excel
            </button>
          </div>
        </div>

        {/* --- FILTERS SECTION --- */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 1. Name Search */}
                <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">SEARCH CHILD NAME</label>
                    <input
                        type="text"
                        placeholder="enter name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* 2. Start Date */}
                <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">FROM DATE</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* 3. End Date */}
                <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">TO DATE</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            
            {/* Clear Filters Button (Only shows if filters are active) */}
            {(searchQuery || startDate || endDate) && (
                <div className="mt-3 text-right">
                    <button 
                        onClick={() => { setSearchQuery(''); setStartDate(''); setEndDate(''); }}
                        className="text-sm text-red-500 hover:text-red-700 underline"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading data...</div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4">Submitted On</th>
                    <th className="px-6 py-4">Parent Name</th>
                    <th className="px-6 py-4">Child Name</th>
                    <th className="px-6 py-4">DOB</th>
                    <th className="px-6 py-4">Class</th>
                    <th className="px-6 py-4">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {student.date} <br/> 
                        <span className="text-xs text-gray-400">{student.time}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold">{student.parentName}</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">{student.childName}</td>
                      <td className="px-6 py-4">{student.childDOB}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {student.classApplying}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-700">{student.phone}</td>
                    </tr>
                  ))}
                  
                  {filteredStudents.length === 0 && (
                     <tr>
                       <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                         No admissions found matching your filters.
                       </td>
                     </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}