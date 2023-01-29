import React, {useState, useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
  {field: 'id', headerName: 'ID', sortable: false},
  {field: 'name', headerName: 'Name', sortable: false, width: 300},
  {field: 'abrv', headerName: 'Abrv', sortable: false, width: 300}
]

export const DataTable = () => {
  const [tableData, setTableData] = useState()
  const getVehicles = async () => {
    const response = await axios.get("https://63d2eef61780fd6ab9cfa2fa.mockapi.io/vehicle-makes")
    const vehicles = response.data
    setTableData(vehicles)
  }
    
    //DRUGI "ZASTARJELI" NAČIN
    /* fetch("https://63d2eef61780fd6ab9cfa2fa.mockapi.io/vehicle-makes")
    .then((data) => data.json())
    .then((data) => setTableData(data)) */

 useEffect(() => {
  getVehicles()
 }, []) 

 if(!tableData){
  return <div> Učitavanje podataka </div>
 } 

  return(
    <div style={{height: 700, width: '100%'}}>
     <DataGrid 
      rows={tableData}
      columns={columns}
      hideFooterPagination	
      hideFooterSelectedRowCount
      disableColumnMenu
      /> 
    </div>
  )
}
