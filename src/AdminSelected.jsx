import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import "./AdminSelected.css";


function AdminSelected() {

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
    
    const fileInputObjRef = useRef(null);
    const fileInputJpgRef = useRef(null);
    const [uploadedFiles, setUploadedFiles] = useState({ obj: [], jpg: [] });

    const [cupNumber, setCupNumber] = useState(5);
    const [sendingMethod, setSendingMethod] = useState('Shipping');

    const triggerFileInput = (fileType) => {
        if (fileType === 'obj') {
            fileInputObjRef.current.click();
        } else if (fileType === 'jpg')
            fileInputJpgRef.current.click();
    }


    const handleFileUpload = (e, fileType) => {
        const files = Array.from(e.target.files);
        setUploadedFiles(prevFiles => ({
            ...prevFiles,
            [fileType]: [...prevFiles[fileType], ...files.map(file => file.name)]
        }));
    };

    return (
        <div className="admin-s-container">

            <div className="admin-s-box-top">
                <div className="admin-s-box-top-left">

                    <div>
                        <div className="admin-s-name"><p>Jessica Harman,</p></div>
                    </div>

                    <div className="admin-s-infos-container">

                        <div className="admin-s-infos">
                            <div className="admin-s-infos-left">
                                Cup Number
                            </div>
                            <div className="admin-s-infos-right">
                                <input type="number"
                                    value={cupNumber}
                                    onChange={e => setCupNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="admin-s-infos">
                            <div className="admin-s-infos-left">
                                Member Number
                            </div>
                            <div className="admin-s-infos-right">
                                <input type="number"
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
                                <select
                                    value={sendingMethod}
                                    onChange={e => setSendingMethod(e.target.value)}
                                >
                                    <option value="Shipping">Shipping</option>
                                    <option value="Dropby">Dropby</option>
                                </select>
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
                        <div className="admin-upload-box" onClick={() => triggerFileInput('obj')}>
                            <div className="admin-upload-box-inside">
                                <p className="choose-a-file">choose a file or <br></br>drag it here</p>
                                <p className="admin-file-format">obj</p>
                            </div>
                        </div>

                        <div className="admin-upload-box" onClick={() => triggerFileInput('jpg')}>
                            <div className="admin-upload-box-inside">
                                <p className="choose-a-file">choose a file or <br></br>drag it here</p>
                                <p className="admin-file-format">jpg/png</p>
                            </div>
                        </div>

                        <input
                            type="file"
                            ref={fileInputObjRef}
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileUpload(e, 'obj')}
                            accept=".obj"
                            multiple
                        />

                        <input
                            type="file"
                            ref={fileInputJpgRef}
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileUpload(e, 'jpg')}
                            accept=".jpg, .png"
                            multiple
                        />

                        <div>
                            {uploadedFiles.obj.map((file, index) => (
                                <p key={index} className="admin-uploaded-file">{file}</p>
                            ))}
                        </div>
                        <div>
                            {uploadedFiles.jpg.map((file, index) => (
                                <p key={index} className="admin-uploaded-file">{file}</p>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


            <div className="admin-bottom-most">
                <div className="check-complete-box-container">
                    <div className="check-complete-box" onClick={handleOpen} >SUBMIT</div>
                </div>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="admin-modal">
                {!submissionConfirmed ? (
                            <div className="support-modal-contents">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Confirmation
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                You cannot change your info after you submit. <br>
                                </br>Are you sure about your submiss
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
                                    A step closer to a better world!
                                </Typography>
                            </div>
                            )}
                </Box>
            </Modal>
        </div>
    )
}

export { AdminSelected }