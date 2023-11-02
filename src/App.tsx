import{useState, Dispatch, SetStateAction} from'react';
type GenPic = [{
  url:string
}]

function App() {
  const [data, setData]=useState(null) as [GenPic|null,Dispatch<SetStateAction<null>>]
  const[userInput, setUserInput]= useState("")
  const myStyle= {
    width: "400px"
  }
 const generate = ()=>{
 
fetch(`https://main--papaya-cranachan-0dd5ad.netlify.app/.netlify/functions/create-pic?prompt=${userInput}`)
.then((response)=>{
return response.json()
})
.then(json=>{
  console.log (json)
  setData (json)
})
if (!data){<div>loading...</div>}
 }
  return (
   <div>
    <label>What kind of picture do you want</label>
    <input onChange={(e)=>setUserInput(e.target.value)} type="text"></input>
    <button onClick={generate}>Generate picture</button>
    {(!data)?
    <h2>here will come a piture</h2>:
    <img style={myStyle} src={data[0].url}></img>
  }
    <button>click no</button>
    </div>
  );
}

export default App;