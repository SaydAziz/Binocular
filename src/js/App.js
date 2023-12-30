import React from 'react';

export default function App(){
    return(
        <>    
            <h1>I am an App Component!!!</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('Testing Noti sending')
            }}>TEST</button>
        </>    
    )
}
