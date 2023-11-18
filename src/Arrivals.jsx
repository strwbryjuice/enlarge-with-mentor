import "./Arrivals.css";

const arrivedNum = 40;

function Arrivals() {

    return (
        <div className="arrivals-container">
            <div className="arrivals-left">
                <div className="cup-q-question">
                    <p>How many<br></br> cups have <br></br> arrived?</p>
                </div>
                <div className="cup-illust-container">
                    <div className="cup-body">
                        <div className="cup-contents"></div>
                    </div>
                    <svg className="doughnut" width="200" height="200">
                        <circle cx="100" cy="100" r="75" stroke="rgb(61, 115, 255)" stroke-width="35" fill="transparent" />
                    </svg>
                </div>
                <div className="arrivedNum-div"><p>{arrivedNum}/300</p></div>
            </div>

            <div className="arrivals-right">
            </div>
        </div>
    )
}

export { Arrivals };