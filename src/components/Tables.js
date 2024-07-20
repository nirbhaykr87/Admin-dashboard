import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Age', width: 130 },
];

const rows = [
  { id: 1, name: 'Jon', age: 35 },
  { id: 2, name: 'Cersei', age: 42 },
  { id: 3, name: 'Jaime', age: 45 },
];

const Table = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default Table;
