import React from 'react'

const LeagueVideos = ({ videos }) => {

    const leagueVideosNodes = videos.map((video, index) => {
        return <li key={video.index}>{video.videos.embed}</li>
    })

    return (
        <>
            I am the LeagueVideos
            {leagueVideosNodes}
            
        </>
    )
}

export default LeagueVideos