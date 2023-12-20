import "./AdminSelected.css";

function AdminSelected() {
    return (
        <div className="admin-s-container">

            <div className="admin-s-box-top">
                <div className="admin-s-box-top-left">

                    <div>
                        <div className="admin-s-name"><p>Jessica Harman,</p></div>
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

                </div>

                <div className="admin-s-box-top-right">

                    <p className="admin-explain"> Please upload the <br></br>cup modelings and images</p>

                </div>
            </div>

            <div className="admin-s-box-bottom">
                <div className="admin-s-box-bottom-left">
                    <div>
                        Mouse Drawing
                    </div>

                    <div className="mouse-drawing-import"></div>
                </div>

                <div className="admin-s-box-bottom-right">
                    <div className="admin-upload-container">
                        <div className="admin-upload-box">
                            <div className="admin-upload-box-inside">
                                <p className="choose-a-file">choose a file or <br></br>drag it here</p>
                                <p className="admin-file-format">obj</p>
                            </div>
                        </div>

                        <div className="admin-upload-box">
                            <div className="admin-upload-box-inside">
                                <p className="choose-a-file">choose a file or <br></br>drag it here</p>
                                <p className="admin-file-format">jpg</p>
                            </div>
                        </div>

                        <div>
                            <p className="admin-uploaded-file">1003-cup.obj</p>
                            <p className="admin-uploaded-file">1003-cup.obj</p>
                            <p className="admin-uploaded-file">1003-cup.obj</p>
                        </div>
                        <div>
                            <p className="admin-uploaded-file">1003-cup.jpg</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="admin-bottom-most">
                <div className="check-complete-box-container">
                    <div className="check-complete-box">SUBMIT</div>
                </div>
            </div>


        </div>
    )
}

export { AdminSelected }