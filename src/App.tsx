import {useState, useEffect, useRef} from 'react'
import './App.css'
import {TenAction, TwentyAction} from "./Actions";
import Strange from "./Strange";

type Note = { x: number, y: number, color: string };

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [cursorPosition, setCursorPosition] = useState<{ x: number, y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });


  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setNotes((prev) => [
          ...prev,
          {...cursorPosition, color} as Note
        ]);
      }
    });
  }, [cursorPosition]);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCursorPosition({x: e.clientX, y: e.clientY});
    });
  }, []);

  return (
    <div className="App">
      <div className="whiteboard">
        <div className="buttons">
          <TenAction />
          <TwentyAction />
        </div>
        <div className="strange">
          <Strange/>
        </div>
        {notes.map((note, index) => (
          <div key={index} style={{
            left: note.x - 150,
            top: note.y - 150,
            position: 'absolute',
            background: note.color,
            height: 300,
            width: 300,
            opacity: 0.5
          }}></div>
        ))}
      </div>
    </div>
  )
}

export default App
