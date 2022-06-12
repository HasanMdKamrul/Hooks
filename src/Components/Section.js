import Content from './Content'

export default function Section({count,buttonChange}){

    return (
        <div>
            <h1>
                I am Section
            </h1>
            <Content count={count} buttonChange={buttonChange}/>
        </div>
    )
}