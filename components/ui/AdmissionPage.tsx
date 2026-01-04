import React, { useState } from 'react';
import { db } from '../../firebase'; // Adjust path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childDOB: '',
    classApplying: 'Playgroup', // Default value
    phone: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Add data to 'admissions' collection in Firebase
      await addDoc(collection(db, "admissions"), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: "New"
      });

      setMessage({ type: 'success', text: 'Application submitted successfully! We will contact you shortly.' });
      setFormData({ parentName: '', childName: '', childDOB: '', classApplying: 'Playgroup', phone: '', email: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* --- SECTION 1: INSTRUCTIONS (From Image) --- */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white text-center">
            Admissions Open: Academic Year 2026–2027
          </h1>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Important Instructions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              <li>
                <strong>Submission Dates: </strong><span className="font-bold text-red-600">25th March 2026</span> to <span className="font-bold text-red-600">31st March 2026</span>.
              </li>
              <li>
                <strong>Eligibility (LKG):</strong> Minimum age of 3.5 years completed as on 31.03.2025.
              </li>
              <li>
                <strong>Required Documents:</strong> Xerox copy of Birth Certificate, Aadhar Copy, and Passport size photo.
              </li>
              <li>
                <strong>Available Classes:</strong> Playgroup, Pre-KG, LKG & UKG
              </li>
              <li>
                <strong>School Timing:</strong> 9:30 AM to 12:30 PM.
              </li>
              
              

              <li className="italic text-gray-500">
                *Note: While the official process requires offline submission, please fill this form to block your inquiry.
              </li>
              <p className="mt-4 font-semibold text-red-600 text-sm md:text-base">
                Limited seats available. Register now to block your seat.
              </p>
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* --- SECTION 2: ADMISSION FORM --- */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Online Pre-Registration Form</h2>
            
            {message.text && (
              <div className={`p-4 mb-4 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Parent Name */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Parent / Guardian Name</label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Child Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Child's Name</label>
                <input
                  type="text"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Child DOB */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="childDOB"
                  required
                  value={formData.childDOB}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Class Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Class Applying For</label>
                <select
                  name="classApplying"
                  value={formData.classApplying}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                >
                  <option value="Playgroup">Playgroup</option>
                  <option value="Pre-KG">Pre-KG</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10 digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;