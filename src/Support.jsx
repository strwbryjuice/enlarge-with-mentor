import "./Support.css";
import { CanvasDrawing } from './CanvasDrawing.jsx';


function Support() {

    return (
        <div className="support-container">
            <div className="support-left-top">
                <p className="basic-info-head">Tell us some basic <br></br>information</p>
            </div>

            <div className="support-right-top">
                <p className="mouse-drawing-header">Write and draw anything <br></br>to support refugee community!</p>
            </div>


            <div className="support-left-bottom">
                <div className="input-box">
                    <div className="input-box-left">
                        <label className="support-label" htmlFor="donator-name">Name</label>
                    </div>

                    <div className="input-box-right-bottom">
                        <input
                            className="support-input"
                            type="text"
                            placeholder="it can be your nickname also"
                        />
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-box-left">
                        <label className="support-label" htmlFor="donator-email">Email</label>
                    </div>

                    <div className="input-box-right">
                        <input
                            className="support-input"
                            type="text"
                            placeholder="we will contact you via email"
                        />
                    </div>
                </div>
                <div className="input-box">
                    <div className="support-box-left">
                        <label className="support-label" htmlFor="sending-option">Sending Option</label>
                    </div>
                    <div className="support-box-right">
                        <input
                            className="support-input"
                            type="text"
                            placeholder="how will you send the cups to us?"
                        />
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-box-left">
                        <label className="support-label" htmlFor="donating=cup-num">Cup Number</label>
                    </div>

                    <div className="input-box-right">

                        
                    </div>
                    <input
                        className="support-input"
                        type="number"
                        placeholder="how many cups will you donate?"
                    />
                </div>
            </div>

            <div className="support-right-bottom">

                <CanvasDrawing />

            </div>

        </div>
    )
}

export { Support };