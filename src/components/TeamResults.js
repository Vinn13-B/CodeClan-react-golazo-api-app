import React from 'react'
import { Chart } from 'react-google-charts';

const TeamResults = ({ played, won, drawn, lost }) => {

    return (
        <>
            This is the TeamResults
            <p>Games Played: {played}</p>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Result', 'Total'],
                    ['Won', won],
                    ['Drawn', drawn],
                    ['Lost', lost],
                ]}
                options={{
                    title: 'Results',
                    pieSliceText: 'label',
                    tooltipText: 'value',
                    legend:{
                        position: 'none',
                    },
                    colors: ['green', 'yellow', 'red'],

                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </>
    )
}

export default TeamResults