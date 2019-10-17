import React, {useEffect, useState} from "react";

function AudioPlayer(){
    const [songs,setSongs] = useState([])
    const [player,setPlayer] = useState()
    const [skip,setSkip] = useState()

    useEffect(() => {
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => {setSongs(data)})
    }, [])

let audio = new Audio();

function clickTrack(track){
    audio.src = 'https://assets.breatheco.de/apis/sound/' + track.url;
    audio.play();
}
function stop(){
    audio.pause();
}
function play(){
    if (audio.currentSrc === '')
        audio.src = 'https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3';
    audio.play();
}
function next(){

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
                <button onClick={()=> {next()}}>NEXT</button>
            </div>
        </>
    )
}
export default AudioPlayer;