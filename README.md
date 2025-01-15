# Next.js 15 API Route Silent Failure with Invalid JSON Request Body

This repository demonstrates a subtle bug in Next.js 15 API routes where a malformed JSON request body can lead to a silent failure, without providing helpful error messages. This can be difficult to debug.

## Problem

When an API route attempts to access `req.body` directly, if the request body isn't a valid JSON object, the server fails silently.  There are no helpful error messages in the console or the response to assist in debugging.

## Solution

The solution involves explicitly parsing the request body using the `json()` method and handling potential errors during the parsing process.  This provides more robust error handling and makes debugging significantly easier.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Send a non-JSON request body to `/api/data`.  Observe the lack of a proper error response.
5. Compare this behavior to the corrected version in `bugSolution.js`.