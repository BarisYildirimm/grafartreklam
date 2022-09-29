export const referenceColumns = [
    {
    field:"selectedFile",
    headerName:"Resim",
    width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.selectedFile} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "title",
      headerName: "Başlık",
      width: 500,
    },
  
    {
      field: "createdAt",
      headerName: "Eklenme tarihi",
      width: 400,
      renderCell: function (params) {
        return new Date(params.row.createdAt).toLocaleDateString();
      },
    },
  ];
  