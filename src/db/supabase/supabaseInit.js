import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owkcbhgtgvmqmqbyntsz.supabase.co'
const supabaseKey = import.meta.env.SUPABASE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }