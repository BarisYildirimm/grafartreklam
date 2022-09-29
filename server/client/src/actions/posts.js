import {
  DELETE,
  UPDATE,
  CREATE,
  FETCH_ALL,
  FETCH_POST,
} from "../constants/actionTypes";
import * as api from "../api";
import swal from "sweetalert2";

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    swal.fire({
      title: "Ekleme Başarılı!",
      text: "Ekleme işlemi Başarılı!",
      icon: "success",
    }).then(() => {
      history("/admin/haber");
    });
  } catch (error) {
    swal.fire("Ekleme Başarısız!", "Sunucu Hatası", "error").then(()=>{
      history(0);
    });
  }
};

export const updatePost = (id, post, history) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    swal.fire({
      title: "Güncelleme Başarılı!",
      text: "Güncelleme İşlemi Başarılı!",
      icon: "success",
    }).then(()=>{
      history("/admin/haber");
    });
  } catch (error) {
    swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
  }
};

export const deletePost = (id, history) => (dispatch) => {
  try {
    swal.fire({
      title: "Emin Misin?",
      text: "Haber Silienecek Emin Misiniz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, Sil'
    }).then(async (willDelete) => {
      if (willDelete.isConfirmed) {
        await api.deletePost(id);
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
    swal.fire("Hata Oluştu!", "Sunucu Hatası", "error");
  }
};
