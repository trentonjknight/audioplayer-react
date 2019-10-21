import React, {useEffect, useState} from "react";
import {
  ic_play_arrow,
  ic_pause,
  ic_stop,
  ic_skip_next,
  ic_skip_previous,
} from 'react-icons-kit/md/';
import { Icon } from 'react-icons-kit';

function AudioPlayer(){
    const [songs,setSongs] = useState([])
    const [mySong, setMySong] = useState(new Audio())
    const [currentSong, setCurrentSong] = useState(0)

    useEffect(() => {
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => setSongs(data))
    }, [])


function stop(){
  console.log("$$$",mySong)
    mySong.pause();
    mySong.currentTime =0;
}
function playSingle(i){
    setCurrentSong(i)
}
function play(i){
    if (i)
    {
      stop()
      setCurrentSong(i)
      let current = songs.find((item,index)=> index === i)
      mySong.src = 'https://assets.breatheco.de/apis/sound/' + current.url
      mySong.play()
      console.log("current",current, i)
    }
    else
    {
      stop()
      let current = songs.find((item,index)=> index === currentSong)
      mySong.src = 'https://assets.breatheco.de/apis/sound/' + current.url
      mySong.play()
      console.log("current",current)
    }
}
const next = () => {
    if (currentSong === songs.length - 1) {
      setCurrentSong(0);
      return;
    }
    setCurrentSong(currentSong + 1);
    play();
  };
  const prev = () => {
      if (currentSong === songs.length +1){
          setCurrentSong(0);
          return;
      }
      setCurrentSong(currentSong - 1);
      play();
  }
    return (
        <>
            <div className="wrapper">
          <div className="that">
            <h1>4GEEKS MUSIC</h1>
            <h3>Click on any track name below to play the song! Background credit Milan Noheji @nohoid</h3>
                <button className="btn btn-light m-1" onClick={()=> {play()}}>►</button>
                <button className="btn btn-light m-1" onClick={()=> {stop()}}>■</button>
                <button className="btn btn-light m-1" onClick={()=> {next()}}><b>►►|</b></button>
                <button className="btn btn-light m-1" onClick={()=> {prev()}}><b>|◀◀</b></button>
                <ol>
                    {songs.map((item, index) => {
                        return(
                            <li key={index} onClick={()=>  {setCurrentSong(index)}}> <button onClick={()=>play(index)}>►</button> {item.name}</li>
                        )}
                    )}
                </ol>
            </div>
        </div>
        </>
    )
}
export default AudioPlayer;