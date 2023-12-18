

function AdminSelected() {
    return (
        <div className="admin-s-container">
            <div>
                <div><p>Jessica Harman,</p></div>
            </div>
            <div>
                <p>Please upload the <br></br> cup modelings and imges</p>
            </div>
            <div>

            <div className="admin-s-infos">
                    <div className="admin-s-infos-left">
                        Cup Number 
                    </div>
                    <div className="admin-s-infos-right">
                    <input type="number"
                        value="5"
                        />
                    </div>
                </div>

                <div className="admin-s-infos">
                    <div className="admin-s-infos-left">
                        Member Number
                    </div>
                    <div className="admin-s-infos-right">
                    <input type="text"
                        value="1003"
                        />
                    </div>
                </div>

                <div className="admin-s-infos">
                    <div className="admin-s-infos-left">
                        Sending Date
                    </div>
                    <div className="admin-s-infos-right">
                    <input type="text"
                        value="2023/05/11"
                        />
                    </div>
                </div>

                <div className="admin-s-infos">
                    <div className="admin-s-infos-left">
                        Sending Method
                    </div>
                    <div className="admin-s-infos-right">
                    <input type="text"
                        value="Dropby"
                        />
                    </div>
                </div>



            </div>
            <div></div>
        </div>
    )
}

export { AdminSelected }