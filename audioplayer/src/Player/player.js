import React, {useEffect, useState} from "react";

function AudioPlayer(){
    const [songs,setSongs] = useState([])

    useEffect(() => {
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => {setSongs(data)})
    }, [])

    return (
        <>
        <div>
            <ul>
                {songs.map((songs, index) => {
                    return(
                        <li key={index}> | Track: {songs.id} | Link: {songs.url}</li>
                    )}
                )}
            </ul>
        </div>
        <audio controls></audio>
        </>
    )
}
export default AudioPlayer;












































































