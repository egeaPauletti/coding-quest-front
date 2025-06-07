import { jwtDecode } from 'jwt-decode'
import { useMemo } from 'react'

import { getClientAuthCookie } from '../utils/clientCookie'

interface User {
  id: string
  name: string
}

export function useAuth(): User | null {

  
  const user = useMemo(() => {
    const token = getClientAuthCookie()
    
    if (!token) {
      return null
    }

    try {
      const decoded = jwtDecode<User>(token)
      return decoded
    } catch {
      return null
    }
  }, [])

  return user
}
