import React from 'react'
import { Chart } from 'react-google-charts';

const TeamGoals = ({ goalsFor, goalsAgainst }) => {

    return (
        <>
            This is the TeamGoals
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Goals', 'Total'],
                    ['Scored', goalsFor],
                    ['Conceded', goalsAgainst],
                ]}
                options={{
                    title: 'Goals',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Goals',
                        minValue: 0,
                    },
                    vAxis: {
                        title: '',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </>
    )
}

export default TeamGoals