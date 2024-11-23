'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";

const LogoutButton: React.FC = () => {

    const router=useRouter()
    const handleLogout = async () => {
    try {

       await axios.get('/api/auth/logout')
       console.log("logout sucessfull")
       router.push('/login')
    } catch (error:any) {
        console.log(error.message)

    }

    }
  return (
    <Button variant="destructive" size="default" onClick={handleLogout}>
    Logout
  </Button>
  )
}
export default LogoutButton;