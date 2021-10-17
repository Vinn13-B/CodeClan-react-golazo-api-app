import React, { useState, useEffect } from 'react'
import TeamTable from '../components/TeamTable';
import TeamTableItem from '../components/TeamTableItem';

const TeamContainer = () => {

    const [teams, setTeams] = useState([])
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        fetchAllTeams();
    }, []);

    const fetchAllTeams = () => {
        fetch("https://api-football-standings.azharimm.site/leagues/ita.1/standings?season=2021&sort=asc")
            .then(res => res.json())
            .then(data => setTeams(data.data.standings))
    }

    const onTeamClicked = function (team) {
        setSelectedTeam(team)
    }

    return (
        <>
            <h1>This is the LeagueContainer</h1>
            <TeamTable teams={teams} onTeamClicked={onTeamClicked} />
            <TeamTableItem team={selectedTeam} />
        </>
    )
}

export default TeamContainer