'use client';

import { CalendarDays, FileText, Clock, MapPin, PhoneCall } from 'lucide-react';

export default function AdmissionsInfo() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 border border-pink-200">
      
      <h2 className="text-3xl font-bold text-pink-600 text-center">
        Admissions Open 🎉
      </h2>

      {/* Key Dates */}
      <div>
        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
          <CalendarDays size={18} /> Key Dates
        </h4>
        <p className="text-gray-600 text-sm mt-1">
          <strong>25 March 2026 – 31 March 2026</strong><br />
          <span className="text-xs text-red-500">(No extensions allowed)</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Classes: <strong>3 April – 28 April 2026</strong>
        </p>
      </div>

      {/* Eligibility */}
      <div>
        <h4 className="font-semibold text-gray-800">🧒 Eligibility</h4>
        <p className="text-sm text-gray-600">
          LKG: Child must be at least <strong>3.5 years old</strong> as of
          31st March 2025
        </p>
      </div>

      {/* Registration */}
      <div>
        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
          <FileText size={18} /> Registration Details
        </h4>
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 mt-1">
          <li>Offline registration only</li>
          <li>Birth Certificate (Xerox)</li>
          <li>Aadhar Copy</li>
          <li>Passport-size Photograph</li>
          <li>Registration form submission is mandatory</li>
        </ul>
      </div>

      {/* Timings */}
      <div>
        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
          <Clock size={18} /> School Timings
        </h4>
        <p className="text-sm text-gray-600">9:30 AM – 12:30 PM</p>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
          <MapPin size={18} /> Contact
        </h4>
        <p className="text-sm text-gray-600">
          NO. 11/1/1, Ganapathy Colony,<br />
          1st Street, Gopalapuram,<br />
          Chennai 
        </p>
        <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
          <PhoneCall size={16} /> 9003124400
        </p>
      </div>

      
    </div>
  );
}
