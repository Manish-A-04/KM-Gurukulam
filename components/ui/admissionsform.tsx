'use client'

import { useState } from 'react'
import { submitAdmissionForm, AdmissionFormData } from '@/lib/supabase'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const programs = [
  "Playgroup Program (1.5 – 3.5 yrs)",
  "Daycare Services",
  "Pre-K Program",
  "Toddler Learning Program"
]

export default function AdmissionForm() {
  const [formData, setFormData] = useState<AdmissionFormData>({
    student_name: '',
    student_age: 0,
    parent_name: '',
    email: '',
    phone_number: '', // <--- CORRECTED: Changed from 'phone' to 'phone_number'
    preferred_program: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'student_age' ? parseInt(value) || 0 : value
    }))
  }

  const validateForm = (): boolean => {
    // <--- CORRECTED: Destructure phone_number here instead of phone
    const { student_name, student_age, parent_name, email, phone_number, preferred_program } = formData

    if (!student_name.trim() || !parent_name.trim() || !email.trim() || !phone_number.trim() || !preferred_program) { // <--- CORRECTED: Use phone_number
      setSubmitError('Please fill in all required fields.')
      setSubmitSuccess(false);
      return false
    }

    if (student_age === 0) {
      setSubmitError('Please enter the student\'s age.')
      setSubmitSuccess(false);
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setSubmitError('Please enter a valid email address.')
      setSubmitSuccess(false);
      return false
    }

    // <--- CORRECTED: Clean phone_number here instead of phone
    const cleanedPhone = phone_number.replace(/[\s-]/g, '');
    if (!/^\d{10,}$/.test(cleanedPhone)) {
      setSubmitError('Phone number must be at least 10 digits long and contain only numbers.')
      setSubmitSuccess(false);
      return false
    }

    if (student_age <= 0 || student_age > 10) {
      setSubmitError('Please enter a valid student age between 1 and 10 years.')
      setSubmitSuccess(false);
      return false
    }
    
    setSubmitError(null);
    return true
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setSubmitSuccess(false)
    setSubmitError(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const dataToSubmit: AdmissionFormData = {
        ...formData,
        phone_number: formData.phone_number.replace(/[\s-]/g, ''), // <--- CORRECTED: Use phone_number
        student_age: Number(formData.student_age)
      };
      
      await submitAdmissionForm(dataToSubmit)
      
      setSubmitSuccess(true)
      setFormData({
        student_name: '',
        student_age: 0,
        parent_name: '',
        email: '',
        phone_number: '', // <--- CORRECTED: Reset phone_number
        preferred_program: ''
      })
    } catch (err: any) {
      console.error('Admission form submission failed:', err)
      setSubmitError(err.message || 'An unexpected error occurred during submission. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admission Form</h2>
      
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <p className="text-green-800 font-medium">Application submitted successfully!</p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="student_name">Student Name <span className="text-red-500">*</span></Label>
          <Input 
            id="student_name"
            name="student_name" 
            value={formData.student_name} 
            onChange={handleChange}
            placeholder="Enter student's full name"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <Label htmlFor="student_age">Student Age <span className="text-red-500">*</span></Label>
          <Input 
            id="student_age"
            type="number" 
            name="student_age" 
            value={formData.student_age === 0 ? '' : formData.student_age} 
            onChange={handleChange}
            min="1"
            max="10"
            placeholder="Age in years (1-10)"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <Label htmlFor="parent_name">Parent Name <span className="text-red-500">*</span></Label>
          <Input 
            id="parent_name"
            name="parent_name" 
            value={formData.parent_name} 
            onChange={handleChange}
            placeholder="Enter parent's full name"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <Input 
            id="email"
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            placeholder="Enter email address"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <Label htmlFor="phone_number">Phone Number <span className="text-red-500">*</span></Label> {/* <--- CORRECTED: Label htmlFor */}
          <Input 
            id="phone_number" // <--- CORRECTED: id should match htmlFor for accessibility
            name="phone_number" // <--- CORRECTED: name should be phone_number
            value={formData.phone_number} // <--- CORRECTED: value should be formData.phone_number
            onChange={handleChange}
            placeholder="e.g., 9876543210 (10 digits minimum)"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <Label htmlFor="preferred_program">Preferred Program <span className="text-red-500">*</span></Label>
          <select
            id="preferred_program"
            name="preferred_program"
            value={formData.preferred_program}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-required="true"
          >
            <option value="">Select a program</option>
            {programs.map((program) => (
              <option key={program} value={program}>{program}</option>
            ))}
          </select>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Admission'}
        </Button>
      </form>
    </div>
  )
}