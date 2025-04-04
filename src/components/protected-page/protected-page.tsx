'use client'

import { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import {dummyAuth} from "@/components/lib/auth";


export default function ProtectedPage({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (!dummyAuth.isAuthenticated()) {
            router.push(`/login?redirect=${encodeURIComponent(pathname + searchParams.toString())}`)
        }
    }, [pathname, searchParams, router])

    return <>{children}</>
}