import { DataGrid,trTR  } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import { referenceColumns } from "./referenceSource";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./referenceTable.scss"
import { useDispatch } from "react-redux";
import { deleteReference } from "../../../actions/references";

const ReferenceDataTable = ({pageName,setReferenceId}) => {
    const references = useSelector((state)=>state.references)
    
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
            <Link to="/admin/referans/guncelle" style={{ textDecoration: "none" }}>
              <Button  className="viewButton"  onClick={()=>setReferenceId(params.row._id)}>Düzenle</Button>
            </Link>
            <Button
              className="deleteButton"
              onClick={()=>dispatch(deleteReference(params.row._id,history))}
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
            Yeni Referans Ekle
            <Link to="/admin/referans/ekle" className="link">
             Referans Ekle
            </Link>
          </div>
   
      <DataGrid
        className="datagrid"
        rows={references}
        id="_id"
        key={references._id}
        columns={referenceColumns.concat((pageName==="home" ? [] : (actionColumn)))}
        pageSize={9}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[9]}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        loading={!references.length}
      />

    </div>
   
  );
};

export default ReferenceDataTable;