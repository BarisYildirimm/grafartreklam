export const postColumns = [
  {
    field: "title",
    headerName: "Resim-Başlık",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.selectedFile} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Yazar",
    width: 225,
  },
  {
    field: "desc",
    headerName: "Açıklama",
    width: 500,
  },
  {
    field: "videoFile",
    headerName: "Video Link",
    width: 210,
  },

  {
    field: "createdAt",
    headerName: "Eklenme tarihi",
    width: 150,
    renderCell: function (params) {
      return new Date(params.row.createdAt).toLocaleDateString();
    },
  },
];
