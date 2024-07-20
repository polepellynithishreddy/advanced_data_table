// src/hooks/useTable.js
import { useEffect, useMemo, useState } from 'react';
import { createTable, useTableInstance } from '@tanstack/react-table';
import { fetchData } from '../utils/fetchData';

export const useTableHook = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTableData = async () => {
            const data = await fetchData();
            setData(data);

            const columns = [
                {
                    accessorKey: 'name',
                    header: 'Name',
                    enableSorting: true,
                    enableColumnVisibility: true,
                },
                {
                    accessorKey: 'category',
                    header: 'Category',
                    enableSorting: true,
                    enableColumnVisibility: true,
                },
                {
                    accessorKey: 'subCategory',
                    header: 'Subcategory',
                    enableSorting: true,
                    enableColumnVisibility: true,
                },
                {
                    accessorKey: 'price',
                    header: 'Price',
                    enableSorting: true,
                    enableColumnVisibility: true,
                },
                {
                    accessorKey: 'createdAt',
                    header: 'Created At',
                    enableSorting: true,
                    enableColumnVisibility: true,
                },
                {
                    accessorKey: 'updatedAt',
                    header: 'Updated At',
                    enableSorting: true,
                    enableColumnVisibility: true,
                },
            ];

            setColumns(columns);
            setIsLoading(false);
        };

        fetchTableData();
    }, []);

    const table = useMemo(() => createTable(), []);

    const tableInstance = useTableInstance(table, {
        data,
        columns,
    });

    return { data, columns, tableInstance, isLoading };
};
