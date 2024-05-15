import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name : "Dummy",
                location : "Not set yet",
                avatar_url: "dummy"
            }
        }
    }
    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/pain0969");
        const json =await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })
    }

    render(){
        const{login, location, avatar_url} =this.state.userInfo;
        return (
            <div className='border-2 border-black'> 
                <img src={avatar_url} width={150}/>
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 9xxxxxxxxxx</h4>
            </div>
        )
    }
    
}

export default UserClass;