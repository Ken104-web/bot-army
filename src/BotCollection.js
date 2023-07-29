import { useState, useEffect } from "react";
import React from "react";

function BotCollection(){
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/bots')
        .then(resp => resp.json())
        .then(data => setProfile(data))
    }, [])

    return (
        <div>
            <h1>Bot Collection</h1>
            {profile.map((bot, index)=> (
                <span key={index}>
                    <img src={bot.avatar_url} alt=""/>
                    <h2>{bot.name}</h2>
                    <p>{bot.catchphrase}</p>
                </span>
            ))}
        </div>
    )
}
export default BotCollection;