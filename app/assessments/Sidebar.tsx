"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { assessmentRoutes } from './routeConfig';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="w-64 bg-black text-white p-4 border-r border-gray-800 h-full">
            <ul>
                {assessmentRoutes.map((assessment) => (
                    <li key={assessment.path} className="mb-2">
                        <Link
                            href={assessment.path}
                            className="block py-2 px-2 hover:bg-gray-800 rounded text-sm text-white font-semibold"
                        >
                            {assessment.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar; 