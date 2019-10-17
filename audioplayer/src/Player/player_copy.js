import React, {useEffect, useState} from "react";

function AudioPlayer(){
    const [songs,setSongs] = useState([])
    const [player,setPlayer] = useState()

    useEffect(() => {
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => {setSongs(data)})
    }, [])

function play(){
    player.url = ('https://assets.breatheco.de/apis/sound/songs')

}

    return (
        <>
            <div>
                <ul>
                    {songs.map((songs, index) => {
                        return(
                            <li key={index} onClick={play()}> Track: {songs.id} {songs.name} {songs.url}</li>
                        )}
                    )}
                </ul>
            </div>
            {/* <audio controls src="https://assets.breatheco.de/apis/sound/files/mario/songs/underworld.mp3"></audio> */}
        </>
    )
}
export default AudioPlayer;












































































