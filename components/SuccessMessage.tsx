"use client"
import React from 'react';

export default function SuccessMessage({ message }: { message: string }) {
    if (!message) return null;
    return (
        <div className="text-green-400 mb-2 text-center bg-green-100 bg-opacity-10 border border-green-400 rounded p-2">
            {message}
        </div>
    );
} 