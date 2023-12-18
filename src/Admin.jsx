import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Admin.css";

import Pagination from '@mui/material/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, useEffect } from 'react';

const rows = [
    createData('', 0, 20230513, "drop by", 5, "firstperson.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "lastperson.com"),
];

function createData(status, membernumber, sendingdate, sendingmethod, cupnum, email) {
    return { status, membernumber, sendingdate, sendingmethod, cupnum, email };
}

const changingStatus = "PENDING"

const theme = createTheme({
    palette: {
        primary: {
            light: '#FFFF00',
            main: '#FFFF00',
            dark: '#FFFF00',
            darker: '#FFFF00',
        },
    },
});


function Admin() {
    const [visibleRows, setVisibleRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10); // may change this 
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    // Function to calculate rows per page
    const calculateRowsPerPage = () => {
        const rowHeight = 50; // based on row height, may change
        const availableHeight = window.innerHeight - 200; // Adjust 200 for other elements' height
        const newRowsPerPage = Math.floor(availableHeight / rowHeight) -1 ;
        setRowsPerPage(newRowsPerPage);
    };

    // useEffect to set up event listener for resize
    useEffect(() => {
        calculateRowsPerPage();
        window.addEventListener('resize', calculateRowsPerPage);
        return () => {
            window.removeEventListener('resize', calculateRowsPerPage);
        };
    }, []);

    // Calculate visible rows based on the current page and rowsPerPage
    useEffect(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        setVisibleRows(rows.slice(start, end));
    }, [page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        navigate(`/admin?page=${newPage}`);
    };

    return (

        <div className="admin-container">
            <div className="admin-top">
                < TableContainer className="admin-table-container" component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow className="admin-table">
                                <TableCell align="center">Status </TableCell>
                                <TableCell align="center">Member number</TableCell>
                                <TableCell align="center">Sending date</TableCell>
                                <TableCell align="center">Sending method</TableCell>
                                <TableCell align="center">Cup Number</TableCell>
                                <TableCell align="center">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visibleRows.map((row) => (
                                <TableRow className="admin-table"
                                    key={row.status}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <div className="status-div">{changingStatus}</div>
                                        {row.status}
                                    </TableCell>
                                    <TableCell align="center">{row.membernumber}</TableCell>
                                    <TableCell align="center">{row.sendingdate}</TableCell>
                                    <TableCell align="center">{row.sendingmethod}</TableCell>
                                    <TableCell align="center">{row.cupnum}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="admin-bottom">
                <div className="pagination-container">
                    <ThemeProvider theme={theme}>
                        <Pagination
                            page={page}
                            count={Math.ceil(rows.length / rowsPerPage)}
                            color="primary"
                            onChange={handleChangePage}
                        />
                    </ThemeProvider>
                </div>
                <div className="admin-search-container">
                    <input className="admin-search"
                        type="text"
                        placeholder="Search application"
                    />
                </div>
            </div>

        </div>
    );
}

export { Admin };