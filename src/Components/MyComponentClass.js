import React from 'react';

export default class MyComponent extends React.Component{

    state = {
        count: 0,
        date: new Date(),
    };



    componentDidMount(){
        const { count } = this.state;
        document.title = `click ${count} times`;
        this.Interval = setInterval(() =>{
            this.tick()
        },1000)
    }

    

    UNSAFE_componentWillUpdate(){
        const {count} = this.state;
        document.title = `click ${count} times`;
    }


    componentWillUnmount(){
        clearInterval(this.Interval);
    }
    
    buttonClick = () =>{  
        return(
            this.setState(
                (prevState)=>(
                    {count :prevState.count + 1}
                )
            )
        )
    }

    tick = ()=>{ 
        this.setState({
            date: new Date(),
        })
    }


    render() {
        const {count,date} = this.state;
        return (
            <div>
                <p>
                    {count}
                </p>
                <button type="button" onClick={this.buttonClick}>
                    Click to change title
                </button>
                <p>
                   Current Time :  {date.toLocaleTimeString()}
                </p>
            </div>
        )
    }
}