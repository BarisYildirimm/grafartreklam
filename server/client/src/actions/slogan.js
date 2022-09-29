import {
   CREATESLOGAN,FETCH_SLOGAN
  } from "../constants/actionTypes";
  import * as api from "../api";

  import swal from 'sweetalert2'

  export const getSlogan = () => async (dispatch) => {
    try {
      const { data } = await api.fetchSlogan();
      dispatch({ type: FETCH_SLOGAN, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createSlogan = (slogan, history) => async (dispatch) => {
    try {
        var object = {};
        slogan.forEach((value, key) => object[key] = value);
        swal.fire({
            title: 'Emin Misin?',
            text: 'Resim Eklenecek Emin Misin?',
            imageUrl: URL.createObjectURL(object.sloganImage),
            imageWidth: 500,
            imageHeight: 200,
            imageAlt: object.title,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet, Ekle'
          }).then(async (willDelete) => {
            if (willDelete.isConfirmed) {
                const { data } = await api.createSlogan(slogan);
                dispatch({ type: CREATESLOGAN, payload: data });
                swal.fire("Ekleme Başarılı!", "Resim Eklendi!", "success").then(() => {
                    history(0);
              });
            } else {
                swal.fire("Ekleme Başarısız!", "Resim Eklenmedi!", "error").then(() => {
                    history(0);
              });
            }
          });
    } catch (error) {
        console.log(error)
      swal.fire("Ekleme Başarısız!", "hata oluştu tekrar deneyin!", "error").then(() => {
        history(0);
      });
    }
  };