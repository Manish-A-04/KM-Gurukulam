'use client';

import React from 'react';
import AdmissionPage from '@/components/ui/AdmissionPage'; // Verify this path matches your form component

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
       {/* You can add a Navbar here if you want */}
       
       <div className="pt-10">
         <AdmissionPage />
       </div>

    </div>
  );
}