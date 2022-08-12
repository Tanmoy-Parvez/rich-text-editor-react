import { useState } from 'react';
import './App.css';
import RichTextEditor from './RichTextEditor';

function App() {
  const [value, setValue] = useState("")
  return (
    <>
      <RichTextEditor setValue={setValue} />
      <br />
      <p>{value}</p>
    </>
  );
}

export default App;
