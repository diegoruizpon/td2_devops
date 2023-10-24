import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
    const conc_words = similarity("Hola","Mundo");
    return new Response("Hello World" + conc_words);
}

function similarity(word1:string , word2:string) {
    
    return (word1+word2);
    
}

serve(handler);