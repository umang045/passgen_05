import { useCallback, useEffect, useRef, useState } from 'react'
 

function App() {
  // Delration of variable /Hooks

  let [length , setLength] = useState(10)
  let [numberAllow , setNumberAllow] = useState(false)
  let [charAllow , setCharAllow] = useState(false)
  let [password , setPassword] = useState("")

let passwordGenerator = useCallback(()=>{

  password = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllow) str += "1234567890"
  if (charAllow) str += "!@#$%^&*();'/.,"

  for(let i=1; i<=length ; i++)
  {
    let char = Math.floor(Math.random() * str.length + 1)
    password += str.charAt(char)
  }

  setPassword(password)

},[length , numberAllow , charAllow ,setPassword ])

let passwordreff = useRef(null)

let copypasswordinput = useCallback(()=>{
  passwordreff.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length , numberAllow , charAllow , setPassword])

//   let [length , setLength] = useState(10)
//   let [numAllow , setNumberAllow] = useState(false)
//   let [charAllow , setCharAllow] = useState(false)
//   let [pass ,setPass ] = useState("")

//   //Callbake hooks and passgenerator functions

//   let passgenrator = useCallback(()=>{
//     pass = ""
//     let str = 
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numAllow) str+= "1234567890"
//     if(charAllow) str += "!@#$%^&*():;.,/"

// //Generating passwords

//     for(let i=1;i<=length; i++)
//     {
//       let char = Math.floor(Math.random() * str.length +1)
//       pass += str.charAt(char)
//     }

//     setPass(pass)
//   } , [length,numAllow,charAllow,setPass])

//   let copypasstoinput = useCallback(()=>{
//     passref.current?.select()
//     // passref.current?.setSelectionRange(0,3)
    
//     window.navigator.clipboard.writeText(pass)
//   },[pass])

//   // useref hooks for copy purpose
//   let passref = useRef(null)

//   //call passgenerator by using useeffect hooks

//   useEffect(()=>{
//     passgenrator()
//   },[length,numAllow,charAllow,passgenrator])




  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
       px-4 my-8 text-orange-500 '>

       <div className=' mx-16 font-extrabold text-cyan-600 mb-8 text-2xl'>Password Generator</div>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className="outline-none w-full py-1 "
            placeholder='Password'
            readOnly
            ref={passwordreff}
          />
          <button 
          onClick={copypasswordinput}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>
          copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input
          type = "range"
          min = {5}
          max= {20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          ></input>
          <label>Lehngth : {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
        <input
        type = "checkbox"
        defaultChecked ={numberAllow}
        id = "numberInput"
        onChange={()=>{
          setNumberAllow((prev)=>!prev)
        }}
        ></input>
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input
        type = "checkbox"
        defaultChecked ={charAllow}
        id = "CharInput"
        onChange={()=>{
          setCharAllow((prev)=>!prev)
        }}
        ></input>
          <label>Character</label>
        </div>
        </div>

       </div>

    </>
  )
}

export default App
