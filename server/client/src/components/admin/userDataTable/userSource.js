export const userColumns = [
  {
    field: "name",
    headerName: "Kullanıcı Ad",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.selectedFile} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "E-Posta",
    width: 300,
  },
  {
    field: "desc",
    headerName: "Meslek",
    width: 200,
  },
  {
    field: "ig",
    headerName: "İnstagram Link",
    width: 200,
  },


  {
    field: "password",
    headerName: "Şifre",
    width: 300,
  },
];
