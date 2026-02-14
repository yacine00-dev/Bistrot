import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wkjwcduzbqnuvmmammff.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrandjZHV6YnFudXZtbWFtbWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MTAzODYsImV4cCI6MjA4NjA4NjM4Nn0.1Z6GDRBXhe51vEm8yBS-1Jzt1js9_7uT9ZXQ9uniEpE' // Elle commence par eyJ...

export const supabase = createClient(supabaseUrl, supabaseAnonKey)