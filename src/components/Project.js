import React from 'react'
import Card from './Card'

function Project({info}) {
  return (
    <div className='w-full flex flex-wrap p-8'>
    {Object.keys(info.projects).map((project)=>{
        return <Card project={info.projects[project]}/>
    })}
    </div>
  )
}

export default Project