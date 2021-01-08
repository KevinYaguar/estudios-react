import React from 'react'

const History = ({match, location, history}) => (
    <div>
        {JSON.stringify(match) }<br></br>
        {JSON.stringify(location)}<br></br>
        {JSON.stringify(history)}<br></br>
    </div>
)

export default History;