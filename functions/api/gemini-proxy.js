// This is the Cloudflare Pages Function that will act as a secure proxy.

export async function onRequest(context) {
  // The 'context' object contains the request, environment variables, etc.

  // 1. Get the secret API key from the environment variable you set in the Cloudflare dashboard.
  //    Make sure the name matches EXACTLY what you created ("GeminiAPI").
  const GEMINI_API_KEY = context.env.GeminiAPI;

  // 2. Get the prompt data that was sent from the browser.
  const requestBody = await context.request.json();

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    // 3. Securely call the Gemini API from the serverless function.
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody.payload), // Pass the original payload
    });

    if (!response.ok) {
      throw new Error(
        `Gemini API request failed with status ${response.status}`
      );
    }

    const data = await response.json();

    // 4. Send the result from the Gemini API back to the browser.
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle any errors that occur.
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
// This function will be deployed to Cloudflare Pages and will securely handle requests to the Gemini API.
// It uses the API key stored in the environment variable "GeminiAPI" to authenticate requests.
// The function receives a JSON payload from the browser, forwards it to the Gemini API, and
// returns the response back to the browser.
// Make sure to set the "GeminiAPI" environment variable in your Cloudflare Pages project
// with your actual Gemini API key before deploying this function.
// --- END OF DATA ---
// --- IGNORE ---
// This is the Cloudflare Pages Function that will act as a secure proxy.