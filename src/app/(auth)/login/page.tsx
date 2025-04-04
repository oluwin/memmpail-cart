'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { dummyAuth } from '@/components/lib/auth';
import { toast } from 'sonner';
import { useAuthStore } from "@/components/stores/auth-store";
import {Card} from "@/components/components/ui/card";


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            if (username.length < 8) {
                throw new Error('Username must be at least 8 characters');
            }

            if (password !== username.substring(0, 5) + '@123') {
                throw new Error('Password must match first 5 characters of username');
            }

            // Perform login with dummy auth
            const success = dummyAuth.login(username, password);

            if (success) {
                // Update global auth state
                login();
                toast.success('Login successful');
                router.push('/dashboard');
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (err) {
            // @ts-ignore
            setError(err.message);
            // @ts-ignore
            toast.error(err.message); // Use the actual error message here
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <Card className="p-6"> {/* Add padding to the Card */}
                <h1 className="text-2xl font-bold mb-6">NextCart | Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                            minLength={8}
                            required
                        />
                        <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters</p>
                    </div>

                    <div>
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <p className="text-sm text-gray-500 mt-1">First 5 characters of your username + @123</p>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>  // Added margin for spacing
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-green-500 text-white py-3 px-8 rounded-md
                        hover:from-cyan-700 hover:to-green-600 transition-all shadow-lg"
                    >
                        Login
                    </button>
                </form>
            </Card>
        </div>
    );
}