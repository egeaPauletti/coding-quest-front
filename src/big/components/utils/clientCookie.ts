export const AUTH_COOKIE_NAME = 'auth-token'

export function setClientAuthCookie(token: string) {
  
  document.cookie = `${AUTH_COOKIE_NAME}=${token}; path=/; max-age=${60 * 60 * 24 * 7}; ${
    process.env.NODE_ENV === 'production' ? 'secure;' : ''
  } samesite=strict`

}

export function getClientAuthCookie(): string | null {
  if (typeof document === 'undefined') return null
  
  const cookies = document.cookie.split(';')
  const authCookie = cookies.find(cookie => 
    cookie.trim().startsWith(`${AUTH_COOKIE_NAME}=`)
  )
  
  const token = authCookie ? authCookie.split('=')[1] : null
  
  return token
}

export function removeClientAuthCookie() {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
