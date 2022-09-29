import { FETCH_STATISTIC,UPDATESTATISTIC } from "../constants/actionTypes";
import * as api from "../api";
import swal from "sweetalert2";

export const getStatistic = () => async (dispatch) => {
    try {
      const { data } = await api.fetchStatistic();
      dispatch({ type: FETCH_STATISTIC, payload: data[0] });
    } catch (error) {
      console.log(error.message);
    }
};
export const updateStatistic = (id, reference, history) => async (dispatch) => {
    try {
      const { data } = await api.updateStatistic(id, reference);
      dispatch({ type: UPDATESTATISTIC, payload: data });
      swal.fire({
        title: "Güncelleme Başarılı!",
        text: "Güncelleme İşlemi Başarılı!",
        icon: "success",
      }).then(() => {
        history("/admin/istatistik");
      });
    } catch (error) {
      swal.fire("Güncelleme Başarısız!", "Sunucu Hatası", "error");
    }
  };