import React from 'react'
import { DataGrid,trTR  } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { userColumns } from "./userSource";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from '../../../actions/auth';

function UserDataTable({pageName,setUserId}) {
    const users = useSelector((state)=>state.auth);

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
            <Link to="/admin/kullanici/guncelle" style={{ textDecoration: "none" }}>
              <Button  className="viewButton"  onClick={()=>setUserId(params.row._id)}>Düzenle</Button>
            </Link>
            <Button
              className="deleteButton"
              onClick={()=>dispatch(deleteUser(params.row._id,history))}
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
          <div className={pageName==="home" ? "datatableTitle datatableTitleChange"  : "datatableTitle"}>
            Yeni Admin Ekle
            <Link to="/admin/kullanici/ekle" className="link">
             Admin Ekle
            </Link>
          </div>
   
      <DataGrid
        className="datagrid"
        rows={users}
        id="_id"
        columns={userColumns.concat((pageName==="home" ? [] : (actionColumn)))}
        pageSize={9}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[9]}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        loading={!users.length}
      />

    </div>
   
  );
}

export default UserDataTable