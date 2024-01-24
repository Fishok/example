import {SerializedError} from "@reduxjs/toolkit";

export type CountriesType = {
    status: 'loading' | 'success' | 'failed',
    countries: Array<any>,
    error?: string
}