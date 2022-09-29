import {
  AUTH,
  SIGNUP,
  USERFETCH_ALL,
  DELETEUSER,
  UPDATEUSER,
  USERDETAILSFETCH_ALL
} from "../constants/actionTypes";
import * as api from "../api";
import swal from "sweetalert2";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: USERFETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUsersDetails = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsersDetails();
    dispatch({ type: USERDETAILSFETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id, history) => async (dispatch) => {
  try {
    swal
      .fire({
        title: "Emin Misin?",
        text: "Admin Silincek Emin Misiniz.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet, Sil",
      })
      .then(async (willDelete) => {
        if (willDelete.isConfirmed) {
          await api.deleteUser(id);
          dispatch({ type: DELETEUSER, payload: id });
          swal
            .fire("Admin Silindi!", "silme işlemi Başarılı.", "success")
            .then(() => {
              history(0);
            });
        } else {
          swal.fire(
            "Silme işlemi Başarısız!",
            "Silme işlemi Başarısız!",
            "error"
          );
        }
      });
  } catch (error) {
    swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
  }
};
export const updateUser = (id, user, history) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);
    dispatch({ type: UPDATEUSER, payload: data });

    swal
      .fire({
        title: "Güncelleme Başarılı!",
        text: "Güncelleme İşlemi Başarılı!",
        icon: "success",
      })
      .then(() => {
        history("/admin/kullanici");
      });
  } catch (error) {
    swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    swal
      .fire({
        title: "Giriş Başarılı!",
        text: "Giriş işlemi Başarılı!",
        icon: "success",
      })
      .then(() => {
        history("/admin");
      });
  } catch (error) {
    swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: SIGNUP, payload: data });
    swal
      .fire({
        title: "Admin Eklendi!",
        text: "Admin Ekleme İşlemi Başarılı.",
        icon: "success",
      })
      .then(() => {
        history("/admin/kullanici");
      });
  } catch (error) {
    swal
      .fire("ekleme Başarısız!", "sunucu Hatası", "error")
      .then(() => {
        history(0);
      });
  }
};
