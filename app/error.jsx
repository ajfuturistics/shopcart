"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">{error.name}</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {error.message || "Something went wrong"}
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
