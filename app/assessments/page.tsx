import React from 'react'
import Sidebar from './Sidebar'

const AssessmentsPage = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-4">Assessments</h1>
                <p>Select an assessment or topic from the sidebar to begin.</p>
            </div>
        </div>
    )
}

export default AssessmentsPage
