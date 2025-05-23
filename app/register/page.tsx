"use client"
import React, { useState } from 'react';
import { registerUser } from '@/services/api';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@/components/ErrorMessage';
import SuccessMessage from '@/components/SuccessMessage';
import { AxiosError } from 'axios';

interface ApiErrorResponse {
    message: string;
    status: number;
}

interface RegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

const RegisterPage = () => {
    const router = useRouter();
    const [form, setForm] = useState<RegisterForm>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const { status, message } = await registerUser(
                form.firstName,
                form.lastName,
                form.email,
                form.phoneNumber,
                form.password
            );
            if (status === 201 || status === 200) {
                setSuccess(message || 'Registration successful! Redirecting to login...');
                setTimeout(() => router.push('/login'), 1500);
            } else {
                setError(message || 'Registration failed');
            }
        } catch (err) {
            if (err instanceof AxiosError && err.response?.data) {
                const errorData = err.response.data as ApiErrorResponse;
                setError(errorData.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <span className="text-2xl font-bold text-white">Algebrify</span>
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Create your account</h2>
                <ErrorMessage message={error} />
                <SuccessMessage message={success} />
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-400 mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="user@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                            placeholder="+94771234568"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-gray-400 mb-1">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white pr-10"
                            placeholder="Password@123"
                            required
                        />
                        <span
                            className="absolute right-3 top-9 cursor-pointer text-gray-400"
                            onClick={() => setShowPassword((v) => !v)}
                            title={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12.001c1.636 4.01 5.735 6.999 10.066 6.999 2.042 0 3.97-.613 5.566-1.662M6.455 6.455A9.956 9.956 0 0112 5c4.332 0 8.43 2.989 10.066 6.999a10.477 10.477 0 01-1.67 2.523M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.121 6.121L3.879 3.879" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.86-.7 1.664-1.25 2.385M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.121 6.121L3.879 3.879" />
                                </svg>
                            )}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center text-gray-400 text-sm">
                    Already have an account? <a href="/login" className="text-black-600 hover:underline">Login</a>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
