import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
    const conc_words = similarity("Chaud","Froid");
    return new Response("Hello World" + JSON.stringify(conc_words));
}

async function similarity(word1:string , word2:string) {

    const response = await fetch("http://nlp.polytechnique.fr/similarityscore",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sim1: word1,
            sim2: word2,
            lang: 'fr',
            type: 'General Word2Vec'

        }),
    });

    const similarityResponseJson = await response.json();

    return (similarityResponseJson.simscore);
}
    
    

    
    
    




serve(handler);