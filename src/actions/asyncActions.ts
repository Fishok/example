import {createAsyncThunk} from "@reduxjs/toolkit";
import {api_key} from "../utils/utils";

export const fetchAllCountries = createAsyncThunk('countries/fetchAll', async  () => {
    const response = await fetch('https://countryapi.io/api/all', {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${api_key}`
        }
    });
    const data = await response.json();
    return data;
})

