// // frontend/src/supabaseClient.js
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// // --- THESE ARE THE CRITICAL DEBUGGING LINES ---
// console.log('DEBUG: Supabase URL from .env:', supabaseUrl);
// console.log('DEBUG: Supabase Anon Key from .env (first 10 chars):', supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + '...' : 'NOT LOADED');
// console.log('DEBUG: Supabase Anon Key Length:', supabaseAnonKey ? supabaseAnonKey.length : 'N/A');
// // ---------------------------------------------

// if (!supabaseUrl || !supabaseAnonKey) {
//     console.error('Supabase URL or Anon Key is missing. Please ensure your .env file is correctly set up and your React app is restarted.');
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);