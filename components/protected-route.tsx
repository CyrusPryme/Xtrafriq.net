'use client'

import { useAuth } from '@/components/auth-provider'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  requireAdmin?: boolean
}

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth')
      return
    }

    if (requireAdmin && user.role !== 'admin') {
      router.push('/dashboard')
      return
    }
  }, [user, router, requireAdmin])

  if (!user) {
    return null
  }

  if (requireAdmin && user.role !== 'admin') {
    return null
  }

  return <>{children}</>
}
