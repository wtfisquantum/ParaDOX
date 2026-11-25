import React from "react";
import {useState, useEffect} from "react";

function App(){

const [urlInput, setUrlInput] = useState("");
const [jsonresp, setJsonResp] = useState("");
const scanUrl = async (e) => {
if (e) {e.preventDefault();}
const trimmed = urlInput.trim();
if(!trimmed) return; //wtf are you doing bro write something



try{
  const fixurl = trimmed.replace("https://", "").replace("http://", "").replace("www.", "");

  const result = await fetch(`https://api-point-web-scan.vercel.app/?url=${fixurl}`);
  if (!result.ok) {
    console.log("Error fetching data");
  }
  const json = await result.json();
  setJsonResp(JSON.stringify(json));
} catch (error){
  console.log(error);
}
}

return (
  <div className="min-h-screen bg-black text-white p-4 sm:p-6">
  <div className="max-w-5xl mx-auto space-y-4">
<form onSubmit={scanUrl}
className="border border-white bg-black px-3.5 py-2.5 flex flex-wrap items-center gap-2 text-xs">
<input
type="text"
value={urlInput}
onChange={(e)=> setUrlInput(e.target.value)}
placeholder="3am.hackclub.com"
className="flex-grow bg-transparent text-white focus:outline-none min-w-[160px]"
>
</input>
<button
type="submit"
className="px-3 py-1 bg-white text-black rounded-md cursor-pointer shrink-0 disabled:opacit-50">
[ENTER]
</button>
</form>

<p>{jsonresp}</p>

  </div>
  </div>
)
}

export default App;