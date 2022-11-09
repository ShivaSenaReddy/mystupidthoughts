import { Data } from "./Data"
import Day from "./Day"

export default function Daylist() {
    let arr = Data.map(item => <Day Date={item.Date}
        Description={item.Description}
    />)
    return (
        <div className='Daylist'>
            {arr}
        </div>


    )
}