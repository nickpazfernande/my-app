import React from 'react'

const page = ({ params }) => {
    const { id } = params
    return (
        <div>hola post {id}</div>
    )
}

export default page