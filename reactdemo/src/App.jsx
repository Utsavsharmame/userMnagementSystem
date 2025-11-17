import React, { useState } from 'react'
import Section1 from './Components/Section1/Section1'
import SECTION2 from './Components/section2/SECTION2.JSX'

const App = () => {
  
    function btnClicked(){
     
      setA(a+1);

    }
    function btnClicked2(){
     
      setA(a-1);

    }


    const [a, setA] = useState(20);

      
  
  return (

      <div  className='h-screen w-full bg-amber-50'  > 
       <h1> hello  {a}</h1>
        <button onClick={btnClicked}> click me </button>
     <br></br>   <button onClick={btnClicked2}> click me to decrease </button>


       </div>
  )


}

export default App
 

 