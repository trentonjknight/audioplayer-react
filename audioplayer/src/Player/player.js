import React, {useEffect, useState} from "react";
import {
  ic_play_arrow,
  ic_pause,
  ic_stop,
  ic_skip_next,
  ic_skip_previous,
} from 'react-icons-kit/md/';

function AudioPlayer(){
    const [songs,setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState(0)
    let audio = new Audio();

    useEffect(() => {
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => {setSongs(data)})
    }, [])


function clickTrack(track){
    audio.src = 'https://assets.breatheco.de/apis/sound/' + track.url;
    audio.play();
    console.log(track);
}
function stop(){
    audio.pause();
}
function play(){
    if (audio.currentSrc === '')
        audio.src = 'https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3';
    audio.play();
}
const next = () => {
if (currentSong === songs.length - 1) {
      setCurrentSong(0);
      return;
    }
    setCurrentSong(currentSong + 1);
  };


    return (
        <>
            <div className="wrapper">
            <h1>TJK MUSIC</h1>
            <h2>Click on any track name below to play the song! Background credit Milan Noheji @nohoid</h2>
                <button onClick={()=> {play()}}>PLAY</button>
                <button onClick={()=> {stop()}}>PAUSE</button>
                <button onClick={()=> {next()}}>NEXT</button>
                <ol>
                    {songs.map((item, index) => {
                        return(
                            <li key={index} onClick={()=>  {clickTrack(item)}}>  {item.name}</li>
                        )}
                    )}
                </ol>


            </div>
        </>
    )
}
export default AudioPlayer;