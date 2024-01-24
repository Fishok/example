import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCountries} from "../actions/asyncActions";
import {CountriesType} from "../types/contriesTypes";


export const countriesState: CountriesType = {
    countries: [],
    status: 'loading'

}


const countriesSlice = createSlice({
    name: 'countries',
    initialState: countriesState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCountries.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchAllCountries.fulfilled, (state, action) => {
                state.status = 'success';
                state.countries = Object.values(action.payload).map((country: any, index) => {
                    return {...country, id: index + 1};
                })
            })
            .addCase(fetchAllCountries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})


export const countriesReducer = countriesSlice.reducer;