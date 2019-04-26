import React from 'react'


class Home extends React.Component {
    render(){
    return(
       <div className='homeContainer'>
           <h2>Welcome!</h2>
           <h3>Please <a href='/login'>Login</a> or <a href ='/signup'>Sign up</a>!</h3>
       </div>
    )
    }
}

export default Home