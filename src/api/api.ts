export default function Api(path: string){
  const baseUrl = import.meta.env.VITE_API_URL

  return `${baseUrl}/api/${path}`
}