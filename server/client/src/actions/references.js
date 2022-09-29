import {
  DELETE,
  UPDATE,
  CREATE,
  REFERENCEFETCH_ALL,
} from "../constants/actionTypes";
import * as api from "../api";
import swal from "sweetalert2";

export const getReference = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReference();
    dispatch({ type: REFERENCEFETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createReference = (reference, history) => async (dispatch) => {
  try {
    const { data } = await api.createReference(reference);
    dispatch({ type: CREATE, payload: data });
    swal.fire({
      title: "Ekleme Başarılı!",
      text: "Ekleme İşlemi Başarılı.",
      icon: "success",
    }).then(() => {
      history("/admin/referans");
    });
  } catch (error) {
    swal.fire("Ekleme Başarısız!", "Sunucu Hatası", "error").then(() => {
      history(0);
    });
  }
};

export const updateReference = (id, reference, history) => async (dispatch) => {
  try {
    const { data } = await api.updateReference(id, reference);
    dispatch({ type: UPDATE, payload: data });
    swal.fire({
      title: "Güncelleme Başarılı!",
      text: "Güncelleme İşlemi Başarılı!",
      icon: "success",
    }).then(() => {
      history("/admin/referans");
    });
  } catch (error) {
    swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
  }
};

export const deleteReference = (id, history) => async (dispatch) => {
  try {
    swal.fire({
      title: "Emin Misin?",
      text: "Referans Silinecek Emin Misiniz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, Sil'
    }).then(async (willDelete) => {
      if (willDelete.isConfirmed) {
        await api.deleteReference(id);
        dispatch({ type: DELETE, payload: id });
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
