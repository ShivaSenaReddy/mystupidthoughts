export default function Day(props) {
    return (<div className='Day'>
        <h3>{props.Date}</h3>
        <p className='description'>
            {props.Description} 
        </p>
        </div>
        
        )
}