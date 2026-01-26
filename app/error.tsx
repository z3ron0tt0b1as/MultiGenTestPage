
'use client';
export const metadata = {
  title: "Error | MultiGen",
  description: "An error occurred. Please try again or return to the MultiGen homepage.",
};
import React from 'react';

export default function Error({ error, reset }: { error: any; reset: () => void }) {
  // Map error codes to messages
  const errorMap: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    408: 'Request Timeout',
    409: 'Conflict',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    509: 'Bandwidth Limit Exceeded',
  };
  let code = error?.status || 500;
  let message = errorMap[code] || 'Unknown Error';
  let description = 'Something went wrong. Please try again later.';
  if (code === 400) description = 'The request could not be understood by the server.';
  if (code === 401) description = 'You are not authorized to access this resource.';
  if (code === 403) description = 'Access to this resource is forbidden.';
  if (code === 404) description = 'The page you are looking for does not exist or has been moved.';
  if (code === 405) description = 'This endpoint only accepts certain HTTP methods.';
  if (code === 408) description = 'The server timed out waiting for the request.';
  if (code === 409) description = 'There was a conflict with your request.';
  if (code === 501) description = 'This feature is not implemented.';
  if (code === 502) description = 'The server received an invalid response from an upstream server.';
  if (code === 503) description = 'The server is currently unavailable.';
  if (code === 504) description = 'The server did not receive a timely response.';
  if (code === 509) description = 'Bandwidth limit exceeded.';
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1a0022] via-[#2a003a] to-[#0a0a1a] relative overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-[#ff0055]/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-2/3 left-2/4 w-4 h-4 bg-[#00eaff]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-[#fff]/10 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6 py-16">
        <div className="mb-8">
          <span className="block text-6xl font-extrabold text-white text-center leading-tight">
            <span className="bg-gradient-to-r from-[#ff0055] via-[#b86fff] to-[#00eaff] bg-clip-text text-transparent drop-shadow-[0_0_24px_#ff0055]">Error {code}</span>
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#ff0055] via-[#b86fff] to-[#00eaff] bg-clip-text text-transparent drop-shadow-[0_0_24px_#ff0055]">{message}</h1>
        <div className="text-lg md:text-xl text-white/80 text-center mb-8 max-w-xl mx-auto font-medium">{description}</div>
        <button className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff0055] via-[#b86fff] to-[#00eaff] text-white font-bold shadow-lg hover:scale-105 transition-all text-lg" onClick={reset}>Try Again</button>
      </div>
    </div>
  );
}
