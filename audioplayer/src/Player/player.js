import React, {useEffect, useState} from "react";

let obj = [
    {
        name: 'Tren',
        fat: 'extremely overweight'
    },
    {
        name: 'Ryan',
        fat: 'majestic'
    },
    {
        name: 'me',
        fat: 'perfect fat'
    }
]

function AudioPlayer(){
    const [songs,setSongs] = useState([])

    useEffect(() => {
        return(
            fetch('https://assets.breatheco.de/apis/sound/songs')
            .then( resp => resp.json())
            .then( data => {setSongs(data)})
        )
    }, [])

    return (
        <div>
            <ul>
                {songs.map((songs, index) => {
                    return(
                        <li key={index}> | Track: {songs.id} | Link: {songs.url}</li>
                    )}
                )}
            </ul>
        </div>
    )
}
export default AudioPlayer;












































































