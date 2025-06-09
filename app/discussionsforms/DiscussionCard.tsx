"use client"
import React, { useState } from 'react';
import { Discussion } from './types/page';
import { useAuth } from '@/store/AuthContext';
import ReplySection from './ReplySection';
import api from './types/axios';
import { algebraTopics } from './types/topics';
import { formatDistanceToNow } from 'date-fns';

interface DiscussionCardProps {
    discussion: Discussion;
    onDelete: () => void;
    onUpdate?: (updatedDiscussion: Discussion) => void;
}

export default function DiscussionCard({ discussion, onDelete, onUpdate }: DiscussionCardProps) {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(discussion.title);
    const [selectedTopic, setSelectedTopic] = useState(() => {
        const [topicName, subtopicName] = discussion.lesson.split(' - ');
        return algebraTopics.find(t => t.name === topicName) || null;
    });
    const [selectedSubtopic, setSelectedSubtopic] = useState(() => {
        if (!selectedTopic) return null;
        const [_, subtopicName] = discussion.lesson.split(' - ');
        return selectedTopic.subtopics.find(st => st.name === subtopicName) || null;
    });
    const [description, setDescription] = useState(discussion.description);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        setIsUpdating(true);
        try {
            const response = await api.put(`/discussions/${discussion.id}`, {
                title,
                lesson: selectedTopic ? `${selectedTopic.name} - ${selectedSubtopic?.name}` : '',
                description
            });

            const updatedDiscussion = {
                ...discussion,
                title,
                lesson: selectedTopic ? `${selectedTopic.name} - ${selectedSubtopic?.name}` : '',
                description
            };

            if (onUpdate) {
                onUpdate(updatedDiscussion);
            }

            setIsEditing(false);
        } catch (error) {
            console.error('Error updating discussion:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this discussion?')) {
            try {
                await api.delete(`/discussions/${discussion.id}`);
                onDelete();
            } catch (error) {
                console.error('Error deleting discussion:', error);
            }
        }
    };

    return (
        <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
            {isEditing ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Topic
                        </label>
                        <select
                            value={selectedTopic?.name || ''}
                            onChange={(e) => {
                                const topic = algebraTopics.find(t => t.name === e.target.value);
                                setSelectedTopic(topic || null);
                                setSelectedSubtopic(null);
                            }}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select a topic</option>
                            {algebraTopics.map((topic) => (
                                <option key={topic.name} value={topic.name}>
                                    {topic.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedTopic && (
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Subtopic
                            </label>
                            <select
                                value={selectedSubtopic?.name || ''}
                                onChange={(e) => {
                                    const subtopic = selectedTopic.subtopics.find(st => st.name === e.target.value);
                                    setSelectedSubtopic(subtopic || null);
                                }}
                                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select a subtopic</option>
                                {selectedTopic.subtopics.map((subtopic) => (
                                    <option key={subtopic.name} value={subtopic.name}>
                                        {subtopic.name}
                                    </option>
                                ))}
                            </select>
                            {selectedSubtopic && (
                                <p className="mt-1 text-sm text-gray-400">{selectedSubtopic.description}</p>
                            )}
                        </div>
                    )}

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        rows={4}
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-4 py-2 text-gray-400 hover:text-white"
                            disabled={isUpdating}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            disabled={isUpdating}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {isUpdating ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-blue-400">{discussion.title}</h2>
                            <div className="mt-2">
                                <p className="text-gray-300 font-medium">Topic: {discussion.lesson}</p>
                                {selectedSubtopic && (
                                    <p className="text-sm text-gray-400 mt-1">{selectedSubtopic.description}</p>
                                )}
                            </div>
                        </div>
                        <div className="text-right ml-4">
                            <p className="text-sm text-gray-400">
                                Posted by <span className="text-blue-400">{discussion.user?.firstName + ' ' + discussion.user?.lastName || 'Anonymous'}</span>
                            </p>
                            <p className="text-xs text-gray-500">
                                {formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true })}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-4">{discussion.description}</p>
                    {user?.id === discussion.userId && (
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-4 py-2 text-blue-400 hover:text-blue-300"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-red-400 hover:text-red-300"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </>
            )}
            <ReplySection discussionId={discussion.id} />
        </div>
    );
}
