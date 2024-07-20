// src/components/ColumnVisibilityPanel.js
import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const ColumnVisibilityPanel = ({ columns, setColumnVisibility }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleVisibilityChange = (columnId) => {
        setColumnVisibility((prev) => ({
            ...prev,
            [columnId]: !prev[columnId],
        }));
    };

    return (
        <>
            <Button onClick={handleClick}>Column Visibility</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {columns.map((column) => (
                    <MenuItem key={column.id} onClick={() => handleVisibilityChange(column.id)}>
                        {column.getHeaderProps().label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default ColumnVisibilityPanel;
