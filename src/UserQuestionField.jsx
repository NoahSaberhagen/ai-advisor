import React, { useState } from 'react';

const UserQuestionField = () => {
    const submitAPIRequest = async (userQuestion) =>{
        const response = await fetch(`https://us-east4-glassy-signal-354012.cloudfunctions.net/get_answer/?message=${userQuestion}`)
        alert(response.json())
    }

    return (
        <div>
            <form type="submit" onSubmit={submitAPIRequest()}>
                <input type="text"></input>
            </form>
        </div>
    )
}

export default UserQuestionField