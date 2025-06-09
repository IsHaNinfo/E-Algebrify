"use client"
import React, { useState } from 'react';
import api from './types/axios';
import { algebraTopics, Topic, SubTopic } from './types/topics';

interface CreateDiscussionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function CreateDiscussionModal({
    isOpen,
    onClose,
    onSuccess,
}: CreateDiscussionModalProps) {
    const [title, setTitle] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [selectedSubtopic, setSelectedSubtopic] = useState<SubTopic | null>(null);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await api.post('/discussions', {
                title,
                lesson: selectedTopic ? `${selectedTopic.name} - ${selectedSubtopic?.name}` : '',
                description
            });
            setTitle('');
            setSelectedTopic(null);
            setSelectedSubtopic(null);
            setDescription('');
            onSuccess();
        } catch (error) {
            console.error('Error creating discussion:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 text-white rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Create New Discussion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Discussion Title"
                                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

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
                                required
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
                                    required
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

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe your question or discussion topic..."
                                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                rows={6}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-300 hover:text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Creating...' : 'Create Discussion'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 