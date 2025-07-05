// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface AdmissionFormData {
  student_name: string
  student_age: number
  parent_name: string
  email: string
  phone_number: string; // <-- CORRECTED: Matches your Supabase table column
  preferred_program: string
}

export async function submitAdmissionForm(data: AdmissionFormData) {
  console.log('Attempting to insert admission data:', data);

  try {
    const { data: result, error } = await supabase
      .from('admission') // <-- Confirm this table name matches your Supabase table
      .insert([
        {
          student_name: data.student_name,
          student_age: data.student_age,
          parent_name: data.parent_name,
          email: data.email,
          phone_number: data.phone_number, // <-- CORRECTED: Matches your Supabase table column
          preferred_program: data.preferred_program,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase insertion error details:', error);
      let errorMessage = 'Failed to submit admission form. Please try again.';

      if (error.code === '42P01') {
        errorMessage = 'Database table "admission" not found. Please check your Supabase schema.';
      } else if (error.code === '23505') {
        errorMessage = 'A record with this email or phone number might already exist.';
      } else if (error.code === '23502') {
        errorMessage = `Missing a required field: ${error.details || error.message}`;
      } else if (error.code === 'PGRST116') {
        errorMessage = 'The "admission" table could not be accessed. Check your RLS policies or table name.';
      }

      throw new Error(errorMessage);
    }

    console.log('Admission successfully inserted:', result);
    return result;
  } catch (error: any) {
    console.error('Error in submitAdmissionForm utility:', error);
    throw error;
  }
}