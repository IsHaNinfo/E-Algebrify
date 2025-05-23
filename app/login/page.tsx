"use client"
import React, { useState } from 'react';
import { useAuth } from '@/store/AuthContext';
import { loginUser } from '@/services/api';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@/components/ErrorMessage';

const LoginPage = () => {
    const { setToken } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            console.log(email, password);
            const { token } = await loginUser(email, password);

            setToken(token);
            router.push('/');
        } catch (err: any) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center ">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <span className="text-2xl font-bold text-white">Algebrify</span>
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Welcome back</h2>
                <ErrorMessage message={error} />
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="********"
                            required
                        />
                    </div>
                    <div className="flex justify-between text-sm">
                        <a href="#" className="text-gray-400 hover:underline">Forgot your password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center text-gray-400 text-sm">
                    Don't have an account? <a href="/register" className="text-black-600 hover:underline">Register</a>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
