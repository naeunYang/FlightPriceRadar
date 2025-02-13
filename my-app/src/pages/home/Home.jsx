import { Button } from '../../components/ui/button'
import { Label } from "../../components/ui/label"

import { testApiCall } from "./api/useApi"

function Home() {
  const data  = testApiCall();

  console.log("서버로부터 받은 값: ", data);
  
  return (
    <>
     <h1 className='text-5xl text-center p-16'>Vite React Project with Tailwind CSS v4 and Shadcn ui</h1>
     <Button variant="outline">Outline</Button>
     <Label htmlFor="email">Your email address</Label>
    </>
  )
}

export default Home
