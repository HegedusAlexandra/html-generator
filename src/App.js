import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [html, setHtml] = useState([]);
  const [object, setObject] = useState([]);
  const [title,setTitle] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const art = object

  const applyStyle = (styleType) => {
    let styledOutput;
    let htmlOutput = [...html];
    let objectOutput = [ ...object ]; 
    
    switch (styleType) {
      case "title":
        styledOutput = (
          <>
            <h1>{input} set at title</h1>
            <br />
          </>
        );
        setTitle(input)
        break;
      case "headline":
        styledOutput = (
          <>
            <h1>{input}</h1>
            <br />
          </>
        );
        htmlOutput.push(`<h1>${input}</h1>`);
        objectOutput.push({
          type: "headline",
          content: input
        });
        break;
      case "sec_headline":
        styledOutput = (
          <>
            <br />
            <h2>{input}</h2>
          </>
        );
        htmlOutput.push(`<h2>${input}</h2>`);
        objectOutput.push({ type: "sec_headline", content: input });
        break;
      case "text":
        styledOutput = (
          <>
            <p>{input}</p>
            <br />
          </>
        );
        htmlOutput.push(`<p>${input}</p>`);
        objectOutput.push({ type: "text", content: input });
        break;
      case "picture":
        styledOutput = (
          <>
            <img src={input} alt="input" />
            <br />
          </>
        );
        htmlOutput.push(`<img src="${input}" alt="input" />`);
        objectOutput.push({ type: "picture", content: input });
        break;
      case "link":
        styledOutput = (
          <>
            <a href={input} target="_blank" rel="noopener noreferrer">
              {input}
            </a>
            <br />
          </>
        );
        htmlOutput.push(
          `<a href="${input}" target="_blank" rel="noopener noreferrer">${input}</a>`
        );
        objectOutput.push({ type: "link", content: input });
        break;
      case "italic":
        styledOutput = (
          <>
            <em>{input}</em>
            <br />
          </>
        );
        htmlOutput.push(`<em>${input}</em>`);
        objectOutput.push({ type: "italic", content: input });
        break;
      case "list":
        styledOutput = (
          <>
            <ul>
              <li>{input}</li>
            </ul>
            <br />
          </>
        );
        htmlOutput.push(`<ul><li>${input}</li></ul>`);
        objectOutput.push({ type: "list", content: input });
        break;
      default:
        styledOutput = <p>{input}</p>;
        htmlOutput.push(`<p>${input}</p>`);
        objectOutput.push({ type: "default", content: input });
    }

    setOutput(styledOutput);
    setHtml(htmlOutput);
    setObject(objectOutput);
    setInput("");
  };

  const renderContent = (el,index) => {
    switch (el.type) {
      case "headline":
        return (
          <div key={index}>
            <h2  className='w-[100%] text-[8vw] md:text-[2.5vw] mb-[4vh] mt-[8vh] font-playfair text-text'>{el.content}</h2>
            <hr className="w-[100%] h-[0.5px] mb-[6vh] bg-headline border-0.5 rounded" />
          </div>
        );
      case "sec_headline":
        return <h2 key={index} className='md:text-[2vw] text-[6vw] my-[2vh] font-afacad text-text'>{el.content}</h2>;
      case "text":
        return <span key={index}>{el.content}</span>;
      case "picture":
        return <div key={index} className={`w-[100%] h-[20vh] my-[2vh] rounded-sm ${el.content} bg-no-repeat bg-cover bg-center`}  />;
      case "list":
        return (
          <ul key={index} className='py-[2vh]'>
            {el.headlines.map((headline, idx) => (
              <li key={headline+idx}>
                <strong>{headline}</strong>: {el.contents[idx]}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  }

  return (
    <div className="app">
      <textarea
        placeholder="your text comes here"
        className="w-[100%] h-[10vh] bg-slate-300 overflow-y-auto uppercase p-2 onfocus:border-none text-slate-700 font-bold font-montserrat"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <div className="w-[100%]">
        <button
          className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"
          onClick={() => applyStyle("title")}
        >
          Title
        </button>
        <button
          className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"
          onClick={() => applyStyle("headline")}
        >
          Headline
        </button>
        <button
          className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"
          onClick={() => applyStyle("sec_headline")}
        >
          Secondary
        </button>
        <button
          className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"
          onClick={() => applyStyle("text")}
        >
          Text
        </button>
        <button
          className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"
          onClick={() => applyStyle("picture")}
        >
          Picture
        </button>
        <button
          className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"
          onClick={() => applyStyle("list")}
        >
          List
        </button>
      </div>
      <div className='flex flex-col w-[100%] lg:px-[30%] p-[7vw] py-[12vh] bg-slate-100 overflow-x-hidden'>
        <header>
          <h1 className='w-[100%] text-headline lg:text-[4vw] text-[10vw] font-playfair font-bold'>{title || "title not yet set"}</h1>
          <hr className="w-[100%] h-[1px] bg-headline border-0.5 rounded" />
          <div className="flex flex-row justify-between items-center w-[100%] h-[2vh] text-[0.5vw] border-0.5 rounded font-montserrat">
          </div>
          <hr className="w-[100%] h-[1px] bg-headline font-afacad border-0.5 rounded" />
        </header>        
        {art.map(renderContent)}
      </div>
      <CopyToClipboard text={html} onCopy={() => alert("Copied HTML!")}>
        <button className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]">
          Copy HTML
        </button>
      </CopyToClipboard>
      <CopyToClipboard text={JSON.stringify({[title]: object}, null, 2)} onCopy={() =>{ alert("Copied Object!");console.log(object);}}>
        <button className="w-[10%] h-[4vh] p-2 bg-slate-100 rounded-md m-2 uppercase font-bold shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]">
          Copy Object
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default App;
