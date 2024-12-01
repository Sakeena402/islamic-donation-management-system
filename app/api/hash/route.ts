// app/api/hash/route.js

// Set runtime to edge
export const runtime = 'edge';

export async function GET(req) {
  // Example of using the Web Crypto API to hash data
  const data = new TextEncoder().encode('some data');  // Convert string to Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Using Web Crypto API

  // Convert the hash to a hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  // Return the hash in the response
  return new Response(JSON.stringify({ hash: hashHex }), { status: 200 });
}
