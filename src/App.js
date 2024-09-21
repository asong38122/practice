import React , {useState} from 'react'
function App() {
  
  const [chocopie, setChocopie] = useState([]);
  const [inputVal, setInputVal] = useState('');
  
  const handleChange = (e)=> {
    console.log(e)
      setInputVal(e.target.value)
  }

  /* 
    chocopie = ['초코']

    set... = [chocopie]
  
  */

  const handleClick = ()=>{
    setChocopie([...chocopie, inputVal])
  }

  const ArrList = ()=> {
    return (
      chocopie.length > 0 ? <div>
        <ul>
          {chocopie.map(item => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div> : <div>배열이 비어있습니다.</div>
    )
  }
  return (
    <>
      <h1>hello</h1>
      <input onChange={(e)=>{handleChange(e)}} />
      <p>{inputVal}</p>
      <button onClick={() => {handleClick()}}>추가</button>
      <ArrList />

    </>
  );
}

export default App;
