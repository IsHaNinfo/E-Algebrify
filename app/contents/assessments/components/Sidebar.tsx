"use client"
// import React, { useState } from 'react';
import Link from 'next/link';
import { assessmentRoutes } from '../../../assessments/routeConfig';

const Sidebar = () => {
    // const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

    // const toggleSection = (title: string) => {
    //     setOpenSections((prev) => ({
    //         ...prev,
    //         [title]: !prev[title],
    //     }));
    // };

    return (
        <div className="w-64 bg-gray-900 text-white p-4 border-r border-gray-800 h-screen">
            <h2 className="text-xl font-bold text-blue-400 mb-4">Assessments</h2>
            <ul className="space-y-2">
                {assessmentRoutes.map((assessment) => (
                    <li key={assessment.path}>
                        <Link
                            href={assessment.path}
                            className="block py-2 px-3 hover:bg-gray-800 rounded text-sm text-blue-200 font-medium transition-colors duration-200"
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