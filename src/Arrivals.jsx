import "./Arrivals.css";
import { ArrivalLeft } from "./ArrivalsLeft";
import { ArrivalsRightTable } from "./ArrivalsRightTable";

function Arrivals() {

    return (
        <div className="arrivals-container">
           <ArrivalLeft/>
           <ArrivalsRightTable/>
        </div>
    )
}

export { Arrivals };