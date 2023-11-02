import{useState, Dispatch, SetStateAction} from'react';
type GenPic = [{
  url:string
}]

function App() {
  const [data, setData]=useState(null) as [GenPic|null,Dispatch<SetStateAction<null>>]
  const[userInput, setUserInput]= useState("")
  const [loading, setLoading] =useState ( false) 
  const myStyle= {
    width: "400px"
  }
  const backgroundStyle ={
    background: "url('https://i.pinimg.com/564x/a0/fa/c4/a0fac49d5f52455253fd988b5a7b85e9.jpg')"
  }
  const generate = ()=>{
    setLoading (true)
    fetch(`https://main--papaya-cranachan-0dd5ad.netlify.app/.netlify/functions/create-pic?prompt=${userInput}`)
    .then((response)=>{
      return response.json()
    })
    .then(json=>{
      console.log (json)
      setData (json)
      setLoading (false)
    })
    console.log (data)
  }
 
  return (
  <div style= {backgroundStyle}>
    <label>What kind of picture do you want</label>
    <input onChange={(e)=>setUserInput(e.target.value)} type="text"></input>
    <button onClick={generate}>Generate picture</button>
    {(!data)?
      <h2>here will come a piture</h2>:
      <img style={myStyle} src={data[0].url}></img>
    }
    <div> {loading?"loading...":null}</div>
    <button>click no</button>
  </div>
  );
}

export default App;