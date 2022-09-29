import {
    FETCH_PRINCIPLE,
    CREATEPRINCIPLE,
    UPDATEPRINCIPLE,
    DELETEPRINCIPLE
  } from "../constants/actionTypes";
  import * as api from "../api";
  import swal from "sweetalert2";
  
  export const getPrinciple = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPrinciple();
      dispatch({ type: FETCH_PRINCIPLE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPrinciple = (principle, history) => async (dispatch) => {
    try {
      const { data } = await api.createPrinciple(principle);
      dispatch({ type: CREATEPRINCIPLE, payload: data });
      swal.fire({
        title: "Ekleme Başarılı!",
        text: "Ekleme İşlemi Başarılı.",
        icon: "success",
      }).then(() => {
        history("/admin/principle");
      });
    } catch (error) {
      swal.fire("Ekleme Başarısız!", "Sunucu Hatası", "error").then(() => {
        history(0);
      });
    }
  };
  
  export const updatePrinciple = (id, principle, history) => async (dispatch) => {
    try {
      const { data } = await api.updatePrinciple(id, principle);
      dispatch({ type: UPDATEPRINCIPLE, payload: data });
      swal.fire({
        title: "Güncelleme Başarılı!",
        text: "Güncelleme İşlemi Başarılı!",
        icon: "success",
      }).then(() => {
        history("/admin/principle");
      });
    } catch (error) {
      swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
    }
  };
  
  export const deletePrinciple = (id, history) => async (dispatch) => {
    try {
      swal.fire({
        title: "Emin Misin?",
        text: "İlkelerimiz Silinecek Emin Misiniz.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet, Sil'
      }).then(async (willDelete) => {
        if (willDelete.isConfirmed) {
          await api.deletePrinciple(id);
          dispatch({ type: DELETEPRINCIPLE, payload: id });
          swal.fire({
            title: "Silme işlemi Başarılı!",
            text: "Silme İşlemi Başarılı!",
            icon: "success",
          }).then(() => {
            history(0);
          });
        } else {
          swal.fire("Silme işlemi Başarısız!","Silme işlemi Başarısız!","error");
        }
      });
    } catch (error) {
      swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
    }
  };
  