import React, { useState } from 'react';
import rickAction from './assets/rick-gym.gif'
import restRick from './assets/rick-gym-supino.jpg'
import beep from './assets/beep.mp3'

import { Howl, Howler } from 'howler';

import './App.css';

const App = () => {

  const [rest, setRest] = useState(false)

  const clock = () => {
    setRest(true)

    const timer = setTimeout(() => {
      soundPlay()
      setRest(false)
    }, 45000);

    return () => clearTimeout(timer);
  }

  const soundPlay = () => {
    const sound = new Howl({
      src: [beep]
    })
    sound.play()
    console.log("sound")
  }

  Howler.volume(1.0)

  return (
    <div className="App">
      <img src={rest ? restRick : rickAction} alt="rick" onClick={() => clock()} />
    </div>
  );
}

export default App;
