import {useState} from 'react';
import {requestsToGroq} from './utils/groq';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';

function App() {

  const [data, setData] = useState('');

  const handleSubmit = async () => {
    const ai = await requestsToGroq(content.value);
    setData(ai);
  }
  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className='text-4xl text-white text-500 my-5'>Hello Abdi</h1>
      <form className='flex flex-col gap-4 py-4 w-full'>
        <input className='py-2 px-4 rounded-md' placeholder='Apa yang kamu inginkan ?' name='content' id='content' type='text'/>
        <button className='bg-blue-500 px-4 py-2 rounded-md text-white' onClick={handleSubmit} type='button'>Submit</button>
      </form>
      <div className="w-full">
        {data ? (
          <SyntaxHighlighter language='swift' style={darcula} wrapLongLines={true}>{data}</SyntaxHighlighter>
        ) : null }
      </div>
    </main>
  );
}

export default App;
