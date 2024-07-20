// src/components/GroupPanel.js
import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const GroupPanel = ({ columns, setGrouping }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGroupChange = (columnId) => {
        setGrouping([columnId]);
    };

    return (
        <>
            <Button onClick={handleClick}>Group By</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {columns.map((column) => (
                    <MenuItem key={column.id} onClick={() => handleGroupChange(column.id)}>
                        {column.getHeaderProps().label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default GroupPanel;
