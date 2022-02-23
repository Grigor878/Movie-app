import React from 'react'
import Data from '../data.json'

function test() {

    return (
        <>
            {Data.TendingNow.map((tending, el) => (
                <div key={el}>
                    {tending.ReleaseYear}
                </div>
            ))}
        </>
    )
}

export default test