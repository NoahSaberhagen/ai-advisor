import React, { useState } from 'react';

const UserQuestionField = (userQuestion) => {
    const submitAPIRequest = async (userQuestion) =>{
        const response = await fetch(`https://us-east4-glassy-signal-354012.cloudfunctions.net/get_answer/?message=${userQuestion}`)
        alert(response.json())
    }

    return (
        <div>
            <form onSubmit={alert("submitted")}>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default UserQuestionField