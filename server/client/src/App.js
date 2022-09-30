/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import AdminHome from "./pages/admin/home/Home";
import List from "./pages/admin/list/List";
import New from "./pages/admin/new/New";
import LogIn from "./pages/admin/logIn/LogIn";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./pages/admin/update/Update";
import User from "./pages/admin/user/User";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Reference from "./pages/admin/reference/Reference";
import AddReference from "./pages/admin/addReference/AddReference";
import UpdateReference from "./pages/admin/updateReference/UpdateReference";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import AddUser from "./pages/admin/addUser/AddUser";
import Team from "./pages/Team/Team";
import ReferencePage from "./pages/ReferencePage/Reference";
import PacketPage from "./pages/PacketPage/packetPage";
import UpdateUser from "./pages/admin/updateUser/UpdateUser";
import WdwdStatistic from "./pages/admin/wdwdStatistic/WdwdStatistic";
import MainSlider from "./pages/admin/mainSlider/MainSlider"
import MainPrinciple from "./pages/admin/mainPrinciple/MainPrinciple";
import AddPrinciple from "./pages/admin/addPrinciple/AddPrinciple";
import UpdatePrinciple from "./pages/admin/updatePrinciple/UpdatePrinciple";
import Help from "./pages/admin/help/Help";
function App() {
  
  const [currentId, setCurrentId] = useState(0);
  const [referenceId, setReferenceId] = useState(0);
  const [principleId,setPrincipleId] = useState(0);
  const [userId,setUserId] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="hakkimizda" element={<About />} />
            <Route path="iletisim" element={<Contact />} />
            <Route path="paketlerimiz" element={<PacketPage />} />
            <Route path="giris" element={<LogIn />} />
            <Route path="posts/:id" element={<BlogDetails />}/>
            <Route path="ekibimiz" element={<Team />} />
            <Route path="referanslar" element={<ReferencePage />} />
            <Route path="paketler" element={<PacketPage />} />
          </Route>

    
          
            <Route path="/admin" >
            <Route
                  path="yardim"
                  element={
                    <PrivateRoute>
                      <Help />{" "}
                    </PrivateRoute>
                  }
                />
              <Route path="kullanici">
                <Route
                  index
                  element={
                    <PrivateRoute>
                      {" "}
                      <User setUserId={setUserId}/>{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="ekle"
                  element={
                    <PrivateRoute>
                      <AddUser title="Admin Ekle" />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="guncelle"
                  element={
                    <PrivateRoute>
                      {" "}
                      <UpdateUser
                        title="Kullanıcı Güncelle"
                        userId = {userId}
                        setUserId = {setUserId}
                      />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route
                index
                element={
                  <PrivateRoute>
                    {" "}
                    <AdminHome />
                  </PrivateRoute>
                }
              />
              <Route path="haber">
                <Route
                  index
                  element={
                    <PrivateRoute>
                      {" "}
                      <List setCurrentId={setCurrentId} />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="ekle"
                  element={
                    <PrivateRoute>
                      <New title="Haber Ekle" />{" "}
                    </PrivateRoute>
                  }
                />

                <Route
                  path="guncelle"
                  element={
                    <PrivateRoute>
                      {" "}
                      <Update
                        title="Haber Güncelle"
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                      />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="referans">
                <Route
                  index
                  element={
                    <PrivateRoute>
                      {" "}
                      <Reference setReferenceId={setReferenceId} />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="ekle"
                  element={
                    <PrivateRoute>
                      <AddReference title="Referans Ekle" />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="guncelle"
                  element={
                    <PrivateRoute>
                      {" "}
                      <UpdateReference
                        title="Referans Güncelle"
                        referenceId={referenceId}
                        setReferenceId={setReferenceId}
                      />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="istatistik">
              <Route
                  index
                  element={
                    <PrivateRoute>
                      {" "}
                      <WdwdStatistic />{" "}
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="slider">
              <Route
                  index
                  element={
                    <PrivateRoute>
                      {" "}
                      <MainSlider />{" "}
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="principle">
              <Route
                  index
                  element={
                    <PrivateRoute>
                      {" "}
                      <MainPrinciple setPrincipleId={setPrincipleId}/>{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="ekle"
                  element={
                    <PrivateRoute>
                      <AddPrinciple title="İlkelerimiz Ekle" />{" "}
                    </PrivateRoute>
                  }
                />
                  <Route
                  path="guncelle"
                  element={
                    <PrivateRoute>
                      <UpdatePrinciple title="İlkelerimiz Guncelle" principleId={principleId}/>{" "}
                    </PrivateRoute>
                  }
                />
              </Route>
            </Route>
      
          
         
           
          
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
