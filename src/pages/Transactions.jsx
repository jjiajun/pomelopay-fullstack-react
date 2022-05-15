import React, { useEffect, useState, useMemo } from "react";
import './Transactions.css';
import TransactionData from '../data.json';
import { useSortBy, useTable } from 'react-table';

export default function Transactions() {

  const [transactions, setTransactions] = useState([]);

  // To mimic fetching new transaction data
  useEffect(() => {
    // Convert prices to 2 decimal places
    TransactionData.map((data) => {
      data.price = (Math.round(data.price * 100) / 100).toFixed(2);
    })
    // Store formatted data in transactions useState
    setTransactions([...TransactionData]);
  }, [])

  // To memoize transactions data so to avoid re-updating on every render
  const data = useMemo(() => [...transactions], [transactions])

  // To memoize transactions columns data so to avoid re-updating on every render
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Customer',
      accessor: 'first_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Product',
      accessor: 'item'
    },
    {
      Header: 'Currency',
      accessor: 'currency'
    },
    {
      Header: 'Price',
      accessor: 'price'
    },
  ], [])

  const tableInstance = useTable(
    { columns, data },
    useSortBy,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    // apply the table props
   <table {...getTableProps()} className="table">
     <thead>
       {// Loop over the header rows
       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()} className="row">
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps((column.getSortByToggleProps()))} className="cell">
               <div className="flex items-center justify-between">
                  <strong>
                    {column.render('Header')}
                   </strong>
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : " "}
                  </span>
                </div>
             </th>
           ))}
         </tr>
       ))}
     </thead>
     {/* Apply the table body props */}
     <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()} className="row">
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()} className="cell">
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table>
  );
}
