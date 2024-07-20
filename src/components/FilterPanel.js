// src/components/FilterPanel.js
import React, { useState } from 'react';
import { TextField, MenuItem, Slider, Select, InputLabel, FormControl, Box } from '@mui/material';

const FilterPanel = ({ setGlobalFilter, setColumnFilter }) => {
    const [nameSearch, setNameSearch] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [dateRange, setDateRange] = useState([null, null]);

    return (
        <Box>
            <TextField
                label="Search"
                variant="outlined"
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select multiple onChange={(e) => setColumnFilter('category', e.target.value)}>
                    <MenuItem value="category1">Category 1</MenuItem>
                    <MenuItem value="category2">Category 2</MenuItem>
                </Select>
            </FormControl>
            <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
            />
            <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
            />
            <TextField
                label="End Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setDateRange([dateRange[0], e.target.value])}
            />
        </Box>
    );
};

export default FilterPanel;
