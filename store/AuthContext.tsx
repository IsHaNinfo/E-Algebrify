"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { jwtDecode } from "jwt-decode";

// Define custom JWT payload type
interface CustomJwtPayload {
    id: string;
    email: string;
    name: string;
    exp: number;
    iat: number;
    // Add other properties from your JWT token
}

type AuthContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
    user: CustomJwtPayload | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(null);
    const [user, setUser] = useState<CustomJwtPayload | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const checkUserInDB = async (userId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('User not found');
            }
            console.log(response);
            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Error checking user:', error);
            return null;
        }
    };

    useEffect(() => {
        const validateToken = async () => {
            const stored = localStorage.getItem('token');

            if (!stored) {
                // Don't redirect if we're on the register page
                if (pathname !== '/register') {
                    router.push('/login');
                }
                return;
            }

            try {
                // Decode token using jwt-decode with custom type
                const decoded = jwtDecode<CustomJwtPayload>(stored);
                console.log(decoded);
                // Check if token is expired
                if (decoded.exp * 1000 < Date.now()) {
                    setTokenState(null);
                    setUser(null);
                    localStorage.removeItem('token');
                    if (pathname !== '/register') {
                        router.push('/login');
                    }
                    return;
                }

                // Check if user exists in DB
                const userData = await checkUserInDB(decoded.id);
                console.log(userData);
                if (!userData) {
                    // User not found in DB
                    setTokenState(null);
                    setUser(null);
                    localStorage.removeItem('token');
                    if (pathname !== '/register') {
                        router.push('/login');
                    }
                    return;
                }

                // Set token and user data
                setTokenState(stored);
                setUser(decoded);
            } catch (error) {
                // Invalid token
                setTokenState(null);
                setUser(null);
                localStorage.removeItem('token');
                if (pathname !== '/register') {
                    router.push('/login');
                }
            }
        };

        validateToken();
    }, [router, pathname]);

    const setToken = (token: string | null) => {
        if (token) {
            try {
                // Decode token using jwt-decode with custom type
                const decoded = jwtDecode<CustomJwtPayload>(token);

                setTokenState(token);
                setUser(decoded);
                localStorage.setItem('token', token);
                document.cookie = `token=${token}; path=/`;
            } catch (error) {
                setTokenState(null);
                setUser(null);
                localStorage.removeItem('token');
                document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                router.push('/login');
            }
        } else {
            setTokenState(null);
            setUser(null);
            localStorage.removeItem('token');
            document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            router.push('/login');
        }
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, setToken, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
