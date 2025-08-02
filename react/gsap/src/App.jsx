import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
function App() {
  const [count, setCount] = useState(0)
  const box = useRef()
  // useGSAP(()=>{
  //   gsap.to(".circle", {
  //     x: count,
  //     y: count,
  //   })
  // },[count])

  const submit = () => {
    // event.preventDefault()
      const random = (gsap.utils.random(-500,500,100) )

    setCount(random)
    gsap.to(box.current, {
      x: random,
      y: random,
      duration: 1,
      // ease: "power1.inOut",
    })
  }
  return (
    <>
      
        {/* <button  onClick={()=> setCount(random)}>
          hello
        </button> */}
        <button
        onClick={submit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Move
      </button>

      <div
        ref={box}
        className="circle w-32 h-32 bg-red-500 rounded-full flex items-center justify-center"
      >
        ghhkjnjn
        </div>
    
    </>
  )
}

export default App
