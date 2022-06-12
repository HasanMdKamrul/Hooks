import CounterContext from './Contexts/CounterContexts'
import Todo from './Todo'

export default function Content(){

    return (
        <div>
            <h1>
                I'm Content
            </h1>
            <CounterContext.Consumer>
                {
                    ({count,change})=>{
                        return (
                            <Todo count={count} change={change}/>
                        )
                    }
                }
            </CounterContext.Consumer>
        </div>
    )
}