import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient("https://wwgrhgsewkbmnscpxzrr.supabase.co/", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3Z3JoZ3Nld2tibW5zY3B4enJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MDgxMTQsImV4cCI6MjA0MjA4NDExNH0.mJzto3AFOAcJWe3Fzyaq6FSGZh2dSPr_72rAn9Hhr2A"
);

export default supabase;
