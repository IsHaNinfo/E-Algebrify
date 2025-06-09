"use client"
import React, { useState, useEffect } from 'react';
import { Discussion } from './types/page';
import DiscussionCard from './DiscussionCard';
import CreateDiscussionModal from './CreateDiscussionModal';
import SearchBar from './SearchBar';
import api from './types/axios';

export default function DiscussionsPage() {
    // Initialize discussions as an empty array
    const [discussions, setDiscussions] = useState<Discussion[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchDiscussions();
    }, []);

    const fetchDiscussions = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await api.get('/discussions');
            const data = Array.isArray(response.data.data) ? response.data.data : [];
            setDiscussions(data);
        } catch (error) {
            console.error('Error fetching discussions:', error);
            setError('Failed to load discussions');
            setDiscussions([]); // Set to empty array on error
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = async (searchTerm: string) => {
        try {
            setIsLoading(true);
            setError(null);

            // If search term is empty, fetch all discussions
            if (!searchTerm.trim()) {
                await fetchDiscussions();
                return;
            }

            const response = await api.get(`/discussions/search?searchTerm=${encodeURIComponent(searchTerm)}`);
            const data = Array.isArray(response.data.data) ? response.data.data : [];
            setDiscussions(data);
        } catch (error) {
            console.error('Error searching discussions:', error);
            setError('Failed to search discussions');
            setDiscussions([]); // Set to empty array on error
        } finally {
            setIsLoading(false);
        }
    };

    const handleDiscussionUpdate = (updatedDiscussion: Discussion) => {
        setDiscussions(prevDiscussions =>
            prevDiscussions.map(discussion =>
                discussion.id === updatedDiscussion.id ? updatedDiscussion : discussion
            )
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white">Discussions</h1>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    New Discussion
                </button>
            </div>

            <SearchBar onSearch={handleSearch} />

            {isLoading ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            ) : error ? (
                <div className="text-red-600 text-center py-4">{error}</div>
            ) : discussions.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    No discussions found
                </div>
            ) : (
                <div className="grid gap-6 mt-6">
                    {discussions.map((discussion) => (
                        <DiscussionCard
                            key={discussion.id}
                            discussion={discussion}
                            onDelete={fetchDiscussions}
                            onUpdate={handleDiscussionUpdate}
                        />
                    ))}
                </div>
            )}

            <CreateDiscussionModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSuccess={() => {
                    setIsCreateModalOpen(false);
                    fetchDiscussions();
                }}
            />
        </div>
    );
}
