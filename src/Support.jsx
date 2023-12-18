import "./Support.css";
import { CanvasDrawing } from './CanvasDrawing.jsx';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useState } from 'react';

function Support() {
    const [open, setOpen] = useState(false);
    const [submissionConfirmed, setSubmissionConfirmed] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setSubmissionConfirmed(false);
    };
    const handleClose = () => setOpen(false);

    const handleConfirm = () => {
        setSubmissionConfirmed(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (

        <>
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
                                placeholder=""
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
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="input-box">        
                        <div className="support-box-left">
                            <label className="support-label" htmlFor="sending-option">Sending Option</label>
                        </div>
                        <div className="support-box-right">
                            <select name="sending-option" id="sending-option-asking" className="input-box-right">
                                <option value="dropby">drop by</option>
                                <option value="mailing">mailing</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-box-left">
                            <label className="support-label" htmlFor="donating=cup-num">Cup Number</label>
                        </div>
                        <div className="input-box-right">
                            <input
                                className="support-input cupnumber-asking"
                                type="number"
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="enlarge-add-container">
                        <p className="englarge-office-title">ENLARGE OFFICE</p>
                        <p className="englarge-office-add">Sunaero 74, 101-301, Seongnamsi, <br></br>
                            Bundanggu, South Korea, 13598 </p>
                    </div>
                </div>

                <div className="support-right-bottom">

                    <CanvasDrawing handleOpen={handleOpen} />

                </div>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="support-modal">
                {!submissionConfirmed ? (
                            <div className="support-modal-contents">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Confirmation
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You cannot change your info after you submit. <br>
                                </br>Are you sure about your submission?
                            </Typography>
                            <div className="modal-button-container">
                                <button className="modal-button" onClick={handleConfirm}>Yes</button>
                                <button className="modal-button" onClick={handleCancel} >No</button>
                            </div>
                        </div>
                            ) : (
                                <div className="support-modal-contents">
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Thank You
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Thank you for your support!
                                </Typography>
                            </div>
                            )}
                </Box>
            </Modal>
        </>


    )
}

export { Support };