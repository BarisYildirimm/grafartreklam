import React from 'react'
import { DataGrid,trTR  } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./principleDataTable.scss"
import {principleColumns} from "./principleSource";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deletePrinciple } from '../../../actions/principle';
function PrincipleDataTable({setPrincipleId}) {
  const principles = useSelector((state)=>state.principle)

  const dispatch = useDispatch();
    const history = useNavigate();

  const actionColumn = [
    {
      field: "action",
      headerName: "Düzenle-Sil",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/principle/guncelle" style={{ textDecoration: "none" }}>
              <Button  className="viewButton" onClick={()=>setPrincipleId(params.row._id)}>Düzenle</Button>
            </Link>
            <Button
              className="deleteButton"
              onClick={()=>dispatch(deletePrinciple(params.row._id,history))}
            >
              Sil 
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
    <div className= "datatableTitle">
      Yeni Hizmetlerimizi Ekle
      <Link to="/admin/principle/ekle" className="link">
       Hizmetlerimiz Ekle
      </Link>
    </div>

<DataGrid
  className="datagrid"
  id="_id"
  rows={principles}
  columns={principleColumns.concat((actionColumn))}
  pageSize={9}
  getRowId={(row) => row._id}
  rowsPerPageOptions={[9]}
  localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
/>
</div>
  )
}

export default PrincipleDataTable