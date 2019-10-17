import React, {useEffect, useState} from "react";

function AudioPlayer(){
    const [songs,setSongs] = useState([])
    const [player,setPlayer] = useState()

    useEffect(() => {
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => {setSongs(data)})
    }, [])

let audio = new Audio();

function clickTrack(panda){
    audio.src = 'https://assets.breatheco.de/apis/sound/' + panda.url;
    audio.play();
}
function stop(){
    audio.pause();
}
function play(){
    audio.src = 'https://assets.breatheco.de/apis/sound/' + url;
    audio.play();
}

    return (
        <>
            <div>
            <h1>Click on any track name below to play the song!</h1>
                <ol>
                    {songs.map((item, index) => {
                        return(
                            <li key={index} onClick={()=>  {clickTrack(item)}}> {item.name} {item.url} </li>
                        )}
                    )}
                </ol>
                <button onClick={()=> {play()}}>PLAY</button>
                <button onClick={()=> {stop()}}>PAUSE</button>
            </div>
            <audio controls src="https://assets.breatheco.de/apis/sound/files/mario/songs/underworld.mp3"></audio>
        </>
    )
}
export default AudioPlayer;