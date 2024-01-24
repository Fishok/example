import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {fetchAllCountries} from "./actions/asyncActions";
import { DataGrid } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {columns} from "./utils/utils";
const App = () => {
    const dispatch = useAppDispatch();
    const {status, countries, error} = useAppSelector(state => state.countriesReducer);




    useEffect(() => {
        dispatch(fetchAllCountries());
    }, [])

    return (
        <Box width={'100vw'} height={'100vh'}>
            <Box width={'100%'} height={800}>
                <DataGrid
                    rows={countries}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 20,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 20, 50]}
                    disableRowSelectionOnClick
                />
            </Box>
        </Box>
    );
};

export default App;