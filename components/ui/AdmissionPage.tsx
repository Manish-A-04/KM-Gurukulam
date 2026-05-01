import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdmissionPage() {
  const [showPopup, setShowPopup] = useState(true);

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childDOB: "",
    classApplying: "Playgroup",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await addDoc(collection(db, "admissions"), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: "New",
      });

      setMessage({
        type: "success",
        text: "Application submitted successfully! We will contact you shortly.",
      });

      setFormData({
        parentName: "",
        childName: "",
        childDOB: "",
        classApplying: "Playgroup",
        phone: "",
        email: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg relative">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              📢 Admissions Notice
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Admissions for{" "}
              <span className="font-semibold text-blue-600">
                Little Orchids Preschool
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                KM Gurukulam
              </span>{" "}
              are handled through this application form.
            </p>

            <p className="text-sm text-gray-500 mt-3">
              Please fill the form to apply for either school.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-full text-sm"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

        {/* HEADER */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-white text-center">
            🎓 Admissions Open 2026–2027
          </h1>
        </div>

        <div className="p-6 md:p-8">

          {/* TOP NOTE */}
          <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm p-3 rounded-md text-center mb-6">
            🎓 <strong>Little Orchids & KM Gurukulam</strong> Admission Application Panel
          </div>

          {/* FLEX LAYOUT */}
          <div className="flex flex-col md:flex-row gap-8">

            {/* LEFT - INSTRUCTIONS */}
            <div className="md:w-1/2 space-y-6 order-2 md:order-1">

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Important Instructions
                </h2>

                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">

                  <li>Available Classes: Playgroup, Pre-KG, LKG & UKG</li>
                  <li>School Timing: 9:30 AM to 12:30 PM</li>

                  <li>
                    <strong>KM Gurukulam Reopening:</strong>{" "}
                    <span className="text-blue-600 font-semibold">
                      June 3, 2026
                    </span>
                  </li>

                  <li>
                    <strong>Little Orchids Reopening:</strong>{" "}
                    <span className="text-red-600 font-semibold">
                      June 4, 2026
                    </span>
                  </li>

                  <li className="italic text-gray-500">
                    Limited seats available. Submit early to secure admission.
                  </li>

                </ul>
              </div>

            </div>

            {/* RIGHT - FORM */}
            <div className="md:w-1/2 order-1 md:order-2">

              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
                Online Pre-Registration Form
              </h2>

              {message.text && (
                <div
                  className={`p-3 mb-4 rounded ${
                    message.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent Name"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  name="childName"
                  placeholder="Child Name"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="date"
                  name="childDOB"
                  required
                  value={formData.childDOB}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <select
                  name="classApplying"
                  value={formData.classApplying}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>Playgroup</option>
                  <option>Pre-KG</option>
                  <option>LKG</option>
                  <option>UKG</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}