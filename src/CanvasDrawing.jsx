import { useRef, useEffect, useState } from 'react';
import "./CanvasDrawing.css";

const CanvasDrawing = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = 500;
        canvas.height = 500;
    }, [])
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const startDrawing = (e) => {
            if (!isDrawing) {
            const { offsetX, offsetY } = e;
            context.beginPath();
            context.moveTo(offsetX, offsetY);
                console.log("Start drawing")
                setIsDrawing(true);
            }
        };

        const draw = (e) => {
            if (!isDrawing) return;
            const { offsetX, offsetY } = e;
            context.lineWidth = isErasing ? 10 : 3; // Adjust eraser size
            context.lineJoin = 'round';
            context.lineCap = 'round';
            context.strokeStyle = isErasing ? 'white' : 'yellow';
            context.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over';
            context.lineTo(offsetX, offsetY);
            context.stroke();
        };

        const stopDrawing = () => {
            if (isDrawing) {
                console.log("Finish drawing")
                context.closePath();
                setIsDrawing(false);
            }
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
        };
    }, [isDrawing, isErasing]);

    const toggleMode = (mode) => {
        if (mode === 'draw') {
            setIsErasing(false);
        } else if (mode === 'erase') {
            setIsErasing(true);
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const saveCanvas = () => {
        const canvas = canvasRef.current;
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'drawing.png';
        a.click();
    };

    return (
        <div>
            <div className="canvas-container" >
                <canvas ref={canvasRef} style={{ border: '1px solid #d3d3d3' }}></canvas>
            </div>
            <div id="button-container">
                <div className="buttons-left">
                    <button onClick={() => toggleMode('draw')}>Draw</button>
                    <button onClick={() => toggleMode('erase')}>Erase</button>
                    <button onClick={clearCanvas}>Clear</button>
                </div>
                <div className="button-right">
                    <button onClick={saveCanvas} className="submit-button">Save</button>
                </div>
            </div>
        </div>
    );
};

export { CanvasDrawing };