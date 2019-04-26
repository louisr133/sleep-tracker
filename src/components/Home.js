import React from 'react'


class Home extends React.Component {
    
  componentDidMount(){
    this.props.history.push('/login')
  }
}

export default Home