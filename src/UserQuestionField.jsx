import React, { useState } from 'react';

const UserQuestionField = () => {
    const handleSubmit = async (userQuestion) =>{
        const response = await fetch(`https://us-east4-glassy-signal-354012.cloudfunctions.net/get_answer/?message=${userQuestion}`)
        console.log(response.json())
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e.value)
            }}>
                <input type="text"></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default UserQuestionField