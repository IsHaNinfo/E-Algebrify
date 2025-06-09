"use client"
import React, { useState, useEffect } from 'react';
import { Reply } from './types/page';
import api from './types/axios';
import { formatDistanceToNow } from 'date-fns';

interface ReplySectionProps {
    discussionId: string;
}

export default function ReplySection({ discussionId }: ReplySectionProps) {
    const [replies, setReplies] = useState<Reply[]>([]);
    const [newReply, setNewReply] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchReplies();
    }, [discussionId]);

    const fetchReplies = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await api.get(`/discussions/${discussionId}/replies`);
            const data = Array.isArray(response.data.data) ? response.data.data : [];
            setReplies(data);
        } catch (error) {
            console.error('Error fetching replies:', error);
            setError('Failed to load replies');
            setReplies([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmitReply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReply.trim()) return;

        try {
            await api.post(`/discussions/${discussionId}/replies`, {
                content: newReply,
            });
            setNewReply('');
            fetchReplies();
        } catch (error) {
            console.error('Error posting reply:', error);
            setError('Failed to post reply');
        }
    };

    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Replies</h3>

            <form onSubmit={handleSubmitReply} className="mb-6">
                <textarea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    rows={3}
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Post Reply
                </button>
            </form>

            {isLoading ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            ) : error ? (
                <div className="text-red-500 text-center py-4">{error}</div>
            ) : replies.length === 0 ? (
                <div className="text-center py-4 text-gray-400">
                    No replies yet. Be the first to reply!
                </div>
            ) : (
                <div className="space-y-4">
                    {replies.map((reply) => (
                        <div key={reply.id} className="bg-gray-800 p-4 rounded">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <p className="text-gray-200">{reply.content}</p>
                                </div>
                                <div className="text-right ml-4 min-w-[150px]">
                                    <p className="text-sm text-gray-400">
                                        By <span className="text-blue-400">{reply.user?.firstName + ' ' + reply.user?.lastName || 'Anonymous'}</span>
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
