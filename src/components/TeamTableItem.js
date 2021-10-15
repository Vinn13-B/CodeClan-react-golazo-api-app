import React from 'react'
import TeamLogo from './TeamLogo'
import TeamResults from './TeamResults'
import TeamGoals from './TeamGoals'

const TeamTableItem = ({ team }) => {

    return (
        <>
            <h3>This is the TeamTableItem</h3>
            {team ? <p>{team.team.displayName}</p> : null}
            {team ? <TeamLogo logo={team.team.logos[0].href} /> : null}
            {team ? <TeamResults played={team.stats[3].value} won={team.stats[0].value} drawn={team.stats[2].value} lost={team.stats[1].value} /> : null}
            {team ? <TeamGoals goalsFor={team.stats[4].value} goalsAgainst={team.stats[5].value} goalDifference={team.stats[9].value} /> : null}
        </>
    )
}

export default TeamTableItem