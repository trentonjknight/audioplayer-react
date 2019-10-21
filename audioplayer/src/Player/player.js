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
    audio.currentTime = 0;
    // setCurrentSong = 0;
}
function playSingle(i){
    setCurrentSong(i)

}
function play(){

    let current = songs.find((item,index)=> index == currentSong)
    audio.src = 'https://assets.breatheco.de/apis/sound/' + current.url
    audio.play()
    console.log("play",current)
    // if (audio.currentSrc === '')
    //     audio.src = 'https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3';
    // audio.play();
}
const next = () => {
    if (currentSong === songs.length - 1) {
      setCurrentSong(0);
      return;
    }
    setCurrentSong(currentSong + 1);
  };

const prev = () => {
    if (currentSong === songs.length-1){
        setCurrentSong(0);
        return;
    }
    setCurrentSong(currentSong - 1);
}


    return (
        <>
        <div className="wrapper">
          <div className="that">
            <h1>4GEEKS MUSIC</h1>
            <h3>Click on any track name below to play the song! Background credit Milan Noheji @nohoid</h3>
                <button className="btn btn-light m-1" onClick={()=> {play()}}>PLAY</button>
                <button className="btn btn-light m-1"onClick={()=> {stop()}}>PAUSE</button>
                <button className="btn btn-light m-1" onClick={()=> {next()}}>NEXT</button>
                <button className="btn btn-light m-1" onClick={()=> {prev()}}>PREV</button>
                <ol>
                    {songs.map((item, index) => {
                        return(
                            <li key={index} onClick={()=>  {setCurrentSong(index)}}> <span ><i onClick={()=>playSingle(index)}className="btn btn-info fab fa-google-play"></i></span> {item.name}</li>
                        )}
                    )}
                </ol>


            </div>
        </div>
        </>
    )
}
export default AudioPlayer;