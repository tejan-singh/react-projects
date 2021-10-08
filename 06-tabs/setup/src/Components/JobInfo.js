import React from 'react'

const JobInfo = ({data}) => {
    return (
        <article className='job-info'>
            <h3>{data.title}</h3>
        </article>
    )
}

export default JobInfo
