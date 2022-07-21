import React from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';

const Header = props => {
    const {setSearch, setyash, getRecipes }= props;
    const {
      transcript,
      listening,
      resetTranscript,
    } = useSpeechRecognition();

    const voice = e => {
      SpeechRecognition.startListening();
      setTimeout(()=> { SpeechRecognition.stopListening();
      }, 5000);
    }

    useEffect(()=>{
      if(transcript!=""){
          setSearch(transcript)
          getRecipes(transcript)
          setyash(true)
          resetTranscript()

      }
  },[transcript])

    return(
        <div className="fixed bottom-20 right-5">
    <div className="border-2 ml-5 w-12 border-white/10 bg-white/25 border-double rounded-full" onClick={voice}>
<button >  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mic text-light m-2" viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
</svg></button>
</div>
</div>

    );
};

export default Header;