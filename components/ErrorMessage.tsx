"use client"
import React from 'react';

export default function ErrorMessage({ message }: { message: string }) {
    if (!message) return null;
    return (
        <div className="text-red-400 mb-2 text-center bg-red-100 bg-opacity-10 border border-red-400 rounded p-2">
            {message}
        </div>
    );
} 