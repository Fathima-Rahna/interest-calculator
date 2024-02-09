import React, { useState } from 'react';
import { TextField, Stack, Button } from '@mui/material'
import './App.css'

function App() {

  //create state to store data

  const [interest,setInterest]= useState(0)
  const [principle,setPrinciple]= useState(0)
  const [rate,setRate]= useState(0)
  const [year,setYear]= useState(0)

  const[princpleAmountValid,setPrincipleAmountValid] = useState(true)
  const[rateAmountValid,setRateAmountValid] = useState(true)
  const[yearAmountValid,setYearAmountValid] = useState(true)

console.log(principle);
 const handleReset= () =>{
  //reset all state
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setPrincipleAmountValid(true)
  setRateAmountValid(true)
  setYearAmountValid(true)

 }

 const handleValidation = (tag)=>{   //or (e)  
  console.log("inside handleValidation");
  const {value,name}=tag
  console.log(value,name);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
    //valid
    if(name=="principle"){
      setPrinciple(value)
      setPrincipleAmountValid(true)
    }else if(name=="rate"){
      setRate(value)
      setRateAmountValid(true)
    }else{
      setYear(value)
      setYearAmountValid(true)
    }

  }else{
    //invalid
    if(name=="principle"){
      setPrinciple(value)
      setPrincipleAmountValid(false)
    }else if(name=="rate"){
      setRate(value)
      setRateAmountValid(false)
    }else{
      setYear(value)
      setYearAmountValid(false)
    }
  }
 }
 const handleCalculate =() =>{
  if(principle && rate && year){
    setInterest(principle*year*rate/100)
  }else{
    alert("please fill the form completely!!")
  }
 }
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>

      <div style={{ width: '600px' }} className='bg-white p-5 rounded shadow'>

        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple inerest easily</p>
        <div className="d-flex justify-content-center align-items-center bg-warning p-3 shadow  flex-column text-light">
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹ principle Amount" variant="outlined" 
            value={principle || ""} name='principle' onChange={e=>handleValidation(e.target)}/>

          </div>
          {!princpleAmountValid && <div className="text-danger mb-3">*invalid principle amount</div>}
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a)%" variant="outlined"
             value={rate || ""} name='rate' onChange={e=>handleValidation(e.target)} />

          </div>
         {!rateAmountValid && <div className="text-danger mb-3">*invalid rate amount</div>}
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-time" label="Time period (Yr)" variant="outlined"
             value={year || ""} name='year' onChange={e=>handleValidation(e.target)} />

          </div>
          {!yearAmountValid && <div className="text-danger mb-3">*invalid year amount</div>}
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={!princpleAmountValid || !rateAmountValid || !yearAmountValid} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>


      </div>
    </div>
  )
}

export default App
