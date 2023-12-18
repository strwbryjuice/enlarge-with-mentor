import "./Arrivals.css";
import { ArrivalLeft } from "./ArrivalsLeft";
import { ArrivalsRightSpecific } from "./ArrivalsRightSpecific";

function Arrivals2 (){

    return (
        <div className="arrivals-container">
            <ArrivalLeft />
            <ArrivalsRightSpecific />
        </div>
    )
}

export { Arrivals2 };