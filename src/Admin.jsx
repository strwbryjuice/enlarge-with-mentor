import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Admin.css";

const rows = [
    createData('', 0, 20230513, "drop by", 5, "jessica@gmail.com"),
    createData('', 1, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 2, 20230513, "shipping", 6, "jessica@gmail.com"),
    createData('', 3, 20230513, "shipping", 4, "jessica@gmail.com"),
    createData('', 4, 20230513, "shipping", 3, "jessica@gmail.com"),
];

function createData(name, calories, fat, carbs, protein, email) {
    return { name, calories, fat, carbs, protein, email};
}


function Admin() {
    
    return (
        < TableContainer component = { Paper } >
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
                    {rows.map((row) => (
                        <TableRow className="admin-table"
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">{row.protein}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
    );
}

export { Admin };