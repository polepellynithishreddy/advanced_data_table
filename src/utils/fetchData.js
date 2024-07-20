// src/utils/fetchData.js
export const fetchData = async () => {
    const response = await fetch('path/to/sample-data.json');
    const data = await response.json();
    return data;
};
