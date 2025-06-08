"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type AuthContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check for token in localStorage
        const stored = localStorage.getItem('token');

        if (!stored) {
            // If no token, redirect to login
            router.push('/login');
            return;
        }

        // If token exists, check if it's expired
        try {
            const tokenData = JSON.parse(atob(stored.split('.')[1]));
            if (tokenData.exp * 1000 < Date.now()) {
                // Token is expired
                setTokenState(null);
                localStorage.removeItem('token');
                router.push('/login');
            } else {
                setTokenState(stored);
            }
        } catch {
            // Invalid token
            setTokenState(null);
            localStorage.removeItem('token');
            router.push('/login');
        }
    }, [router]);

    const setToken = (token: string | null) => {
        setTokenState(token);
        if (token) {
            localStorage.setItem('token', token);
            // Set cookie for middleware
            document.cookie = `token=${token}; path=/`;
        } else {
            localStorage.removeItem('token');
            // Remove cookie
            document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            router.push('/login');
        }
    };

    const logout = () => {
        setToken(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
