import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function ArrivalsRightTable(){

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    return(<div className="arrivals-right">
                <div className="arrivals-right-top">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {Array.from(Array(12)).map((_, index) => (
                                <Grid item xs={3} key={index} > {/* 3 columns out of 12 for each item */}
                                    <Paper elevation={0} >
                                        <div className="cup-img"></div>
                                        <div className="textbox">
                                            <div className="left-text">
                                                Thank you <br /> Jessica
                                            </div>
                                            <div className="right-text">
                                                Date of arrival
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
                <div className="arrivals-right-bottom">
                    <div className="pagination-container">
                        <ThemeProvider theme={theme}>
                            <Pagination
                                page={page}
                                count={10}
                                color="primary"
                                renderItem={(item) => (
                                    <PaginationItem className="pagination-item"
                                        component={Link}
                                        to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                                        {...item}
                                    />
                                )}
                            />
                        </ThemeProvider>
                    </div>
                    <div className="arrival-search-container">
                        <input
                            className="arrival-search"
                            type="text"
                            placeholder="Search arrivals"
                        />
                    </div>
                </div>
            </div>

)}

export {ArrivalsRightTable}