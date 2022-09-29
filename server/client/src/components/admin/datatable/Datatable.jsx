import "./datatable.scss";
import { DataGrid,trTR  } from "@mui/x-data-grid";
import { postColumns } from "./datatablesource";
import { Link } from "react-router-dom";
import React from "react";
import { deletePost } from "../../../actions/posts"
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Datatable = ({setCurrentId,pageName}) => {
  
  const posts = useSelector((state)=>state.posts)
  
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
            <Link to="/admin/haber/guncelle" style={{ textDecoration: "none" }}>
              <Button  className="viewButton" onClick={()=>setCurrentId(params.row._id)}>Düzenle</Button>
            </Link>
            <Button
              className="deleteButton"
              onClick={()=>dispatch(deletePost(params.row._id,history))}
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
            Yeni Haber Ekle
            <Link to="/admin/haber/ekle" className="link">
             Haber Ekle
            </Link>
          </div> 
      <DataGrid
        className="datagrid"
        rows={posts}
        id="_id"
        key={posts._id}
        columns={postColumns.concat((pageName==="home" ? [] : (actionColumn)))}
        pageSize={9}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[9]}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        loading={!posts.length}
      />
    </div>
   
  );
};

export default Datatable;