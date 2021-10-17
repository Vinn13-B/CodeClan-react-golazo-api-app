import React from 'react'

const TeamTable = ({ teams, onTeamClicked }) => {

    const handleClick = function (team) {
        onTeamClicked(team)
    }

    const teamTableNodes = teams.map((team) => {
        return <li key={team.team.id} onClick={() => { handleClick(team) }}>{team.team.displayName}, {team.stats[3].displayValue}, {team.stats[9].displayValue}, {team.stats[6].displayValue}</li>
    })

    return (
        <>
            <h2>This is the TeamTable</h2>
            <ul>{teamTableNodes}</ul>
        </>
    )
}

export default TeamTable