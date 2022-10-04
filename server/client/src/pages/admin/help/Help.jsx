import React from 'react'
import Navbar from '../../../components/admin/navbar/Navbar'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import "./help.scss"
function Help() {
  return (
    <div className='new'>
        <Sidebar/>
        <div className='newContainer'>
            <Navbar/>
            <div className='helpContainer'>
                <div className='helpNavbar'>
                    <h1>Başlıklar</h1>
                    <ul>
                        <li><a className="nav-link" href="#anasayfa">Ana Sayfa</a></li>
                        <li><a className="nav-link" href="#haberler">Haberler</a></li>
                        <li><a className="nav-link" href="#kullanici">Kullanıcı</a></li>
                    </ul>
                </div>
                <div className='mainDoc'>
                    <div className='section' id="anasayfa">
                        <h2>
                            Ana Sayfa
                        </h2>
                        <p><b>Ana Sayfa</b> Ekrana giriş yapıldığında sayfanın en üst kısmında
                        <br/>1. Toplam paylaşılan Haberlerin istatistikleri <br/>
                        2. Toplam paylaşılan Referans Sayısı <br/>
                        3. Toplam Sisteme kayıt edilen kullanıcı yani Admin Sayısı var.<br/>
                        Sayfayı aşağıya doğru kaydırdığımızda 3 tablo görünüyor. Bu tablolar sırasıyla <b>Haberler</b> <b>Referanslar</b> ve <b>Kullanıcılar</b> tablosu.
                        Bu tablolar üzerinde eklenen kayıtları <b>İnceleyebilirsiniz...</b></p>
                    </div>
                    <div className='section' id="haberler">
                        <h2>
                            Haberler
                        </h2>
                        <p><b>Haberler</b> sekmesi içerisinde Haber <b>Ekleme</b>,<b>Silme</b>ve <b>Güncelleme</b> işlemleri
                        yapılabilir.<br/><br/>
                        <h4>Haber Ekleme İşlemi Nasıl Yapılır?</h4>
                        1. öncelikle sağ üst bölümdeki <b>Haber Ekle</b> Butonuna Tıklayınız. <br/>
                        2. Açılan sayfada Gerekli Ekleme işlemleri Yapılır.<br/><br/>
                        <h4>Haber Ekleme işleminde Dikkat Edilmesi Gerekenler!</h4><br/>
                        1. Haber Eklemek için <b>RESİM EKLEMEK ZORUNLU!</b><br/>
                         (Resim Ekleme İşlemi yapılmaz ise Haber ekleme işlemi başarısız olur.)<br/><br/>

                        2. Resim Ekleme işlemi yapıldıktan sonra Haberin <b>Başlık</b> ,<b>Youtube Link'i</b> ve <b>Haber Açıklaması</b> kayıtları girilir.<br/>
                        (Bu kayıtlar Girilmesi zorunlu değil fakat <b>Siteye Ziyaret edenlerin iyi bir haber görmesi için girilmesi tavsiye edilir :D</b>) <br/> <br/>

                        3. Gerekli Haberin verileri giridikten sonra <b>Haber EKLE</b> butonuna tıklanyınız.<br/>
                        Eğer <b>Resmin Boyutu büyük ise</b> Lütfen Sistemin <b>Gerekli Mesajının Gelmesini bekleyiniz.</b><br/>
                        Haber Eklendi Mesajı geldikten sonra OK butonuna tıklanıp tekrar istenen işlem yapılabilir.<br/><br/>


                        <h4>Haber Güncelleme İşlemi Nasıl Yapılır?</h4><br/>
                        1. Haberler sekmesine tıkladıktan sonra açılan penceredeki <b>Haber Tablosunda </b> hangi haberi güncellemek istiyorsanız o satırdaki <b>Güncelle Butonuna </b> Tıklayınız.<br/>
                        2. Açılan Pencerede güncellemek istediğiniz haberin bilgileri karşımıza çıkmış olacak.<br/>
                        3. Açılan pencerede Haber ile ilgili hangi bilgilerin güncellemesini istiyorsanız bilgileri giriyorsunuz.<br/>
                        4. Bilgiler Girildikten Sonra Haber Güncelle Butonuna Tıklanır.<br/>
                        5. Butona Tıkladıktan Sonra <b>Sistemin Gerekli Mesajı Vermesini Bekleyiniz.</b><br/><br/>
                        <b>UNUTMAYIN RESMİN BOYUTU NE KADAR BÜYÜK İSE GÜNCELLEME İŞLEMİ BİRAZ UZUN SÜRER!</b><br/><br/>
                            
                        <h4>Haber Silme İşlemi Nasıl Yapılır?</h4><br/>
                        1. Silmek İstediğiniz haberin hangi satırda olduğunu bulunuz. (arayın,sıralayın vb.)<br/>
                        2. Silinmek istenen haberi bulduktan sonra o satırdaki <b>SİL Butonuna</b> Tıklayınız.<br/>
                        3. Tıklandıktan sonra <b>Emin Misiniz?</b> mesajına <b>evet,sil</b> butonuna tıkladığında silinmiş olacaktır.<br/><br/>
                        <b>LÜTFEN SİLMEK İSTEDİĞİNİZ HABERDEN EMİN OLUN!</b> 
                        
                        
                        
                        
                        
                        </p>

                    </div>
                    <div className='section' id="kullanici">
                        <h2>
                            Kullanıcı
                        </h2>
                        <p><b>Kullanıcı</b> sekmesi içerisinde Kullanıcı <b>Ekleme</b>,<b>Silme</b>ve <b>Güncelleme</b> işlemleri
                        yapılabilir.<br/><br/>
                        <h4>Kullanıcı Ekleme İşlemi Nasıl Yapılır?</h4>
                        1. öncelikle sağ üst bölümdeki <b>Kullancı Ekle</b> Butonuna Tıklayınız. <br/>
                        2. Açılan sayfada Gerekli Ekleme işlemleri Yapılır.<br/><br/>
                        <h4>Kullanıcı Ekleme işleminde Dikkat Edilmesi Gerekenler!</h4><br/>
                        1. Kullancı Eklemek için <b>RESİM EKLEMEK ZORUNLU!</b>
                        <br/>
                            (RESİM EKLEME İŞLEMİ YAPARKEN MASAÜSTÜNDEN SEÇİM YAPMAK ZORUNLU!)
                        <br/>
                        <br/>
                         (Resim Ekleme İşlemi yapılmaz ise Kullanıcı ekleme işlemi başarısız olur.)<br/><br/>

                        2. Resim Ekleme işlemi yapıldıktan sonra kullanıcının <b>Adı</b> ,<b>instagram Link'i</b> ve <b>Şirkette Çalıştığı meslek</b><b>Şifresi vb</b> kayıtları girilir.<br/>
                        (Bu kayıtlar Girilmesi zorunlu değil fakat <b>Siteye Ziyaret edenlerin iyi bir Kullanıcı bilgisi görmesi için girilmesi tavsiye edilir :D</b>) <br/> <br/>

                        3. Gerekli Haberin verileri giridikten sonra <b>Kullancı EKLE</b> butonuna tıklanyınız.<br/>
                        Eğer <b>Resmin Boyutu büyük ise</b> Lütfen Sistemin <b>Gerekli Mesajının Gelmesini bekleyiniz.</b><br/>
                        Kullanıcı için , Eklendi Mesajı geldikten sonra OK butonuna tıklanıp tekrar istenen işlem yapılabilir.<br/><br/>


                        <h4>Kullanıcı Güncelleme İşlemi Nasıl Yapılır?</h4><br/>
                        1. Kullanıcı sekmesine tıkladıktan sonra açılan penceredeki <b>Kullanıcı Tablosunda </b> hangi Kullanıcıyı güncellemek istiyorsanız o satırdaki <b>Güncelle Butonuna </b> Tıklayınız.<br/>
                        2. Açılan Pencerede güncellemek istediğiniz Kullanıcı bilgileri karşımıza çıkmış olacak.<br/>
                        3. Açılan pencerede Kullanıcı ile ilgili hangi bilgilerin güncellemesini istiyorsanız bilgileri giriyorsunuz.<br/>
                        (Kullanıcı Şifresini Güncellemej için yeni şifre alanına yeni şifreyi girebilirsiniz!)<br/>
                        4. Bilgiler Girildikten Sonra Haber Güncelle Butonuna Tıklanır.<br/>
                        5. Butona Tıkladıktan Sonra <b>Sistemin Gerekli Mesajı Vermesini Bekleyiniz.</b><br/><br/>
                        <b>LÜTFEN SİSTEME GİRİLİNE BİLGİLERİN DAHA ÖNCE HİÇ BİR YEREDE KULLANILMAMASINA ÖZEN GÖSTERİNİZ. (TAVSİYEMDİR!)</b><br/><br/>
                        <b>UNUTMAYIN RESMİN BOYUTU NE KADAR BÜYÜK İSE GÜNCELLEME İŞLEMİ BİRAZ UZUN SÜRER!</b><br/><br/>
                            
                        <h4>Kullanıcı Silme İşlemi Nasıl Yapılır?</h4><br/>
                        1. Silmek İstediğiniz Kullanıcının hangi satırda olduğunu bulunuz. (arayın,sıralayın vb.)<br/>
                        2. Silinmek istenen Kullanıcıyı bulduktan sonra o satırdaki <b>SİL Butonuna</b> Tıklayınız.<br/>
                        3. Tıklandıktan sonra <b>Emin Misiniz?</b> mesajına <b>evet,sil</b> butonuna tıkladığında silinmiş olacaktır.<br/><br/>
                        <b>LÜTFEN SİLMEK İSTEDİĞİNİZ Kullanıcadan EMİN OLUN!</b>     
                        </p>

                    </div>
                    <div className='section' id="kullanici">
                        <h2>
                            Referanslar
                        </h2>
                        <p><b>Referanlar</b> sekmesi içerisinde Referans <b>Ekleme</b>,<b>Silme</b>ve <b>Güncelleme</b> işlemleri
                        yapılabilir.<br/><br/>
                        <h4>Referans Ekleme İşlemi Nasıl Yapılır?</h4>
                        1. öncelikle sağ üst bölümdeki <b>Referans Ekle</b> Butonuna Tıklayınız. <br/>
                        2. Açılan sayfada Gerekli Ekleme işlemleri Yapılır.<br/><br/>
                        <h4>Referans Ekleme işleminde Dikkat Edilmesi Gerekenler!</h4><br/>
                        1. Referans Eklemek için <b>RESİM EKLEMEK ZORUNLU!</b>
                        <br/>
                            (RESİM EKLEME İŞLEMİ YAPARKEN MASAÜSTÜNDEN SEÇİM YAPMAK ZORUNLU!)
                        <br/>
                        <br/>
                         (Resim Ekleme İşlemi yapılmaz ise Referans ekleme işlemi başarısız olur.)<br/><br/>

                        2. Resim Ekleme işlemi yapıldıktan sonra Referans <b>Adı</b> kayıtı girilir.<br/>
                        (<b>Referans Ekle işlemi yapılırken adı girildiğinde girilen ad sayfada gözükmez sadece RESİM GÖRÜNÜR!</b>) <br/> <br/>

                        3. Gerekli Haberin verileri giridikten sonra <b>Referans Ekle</b> butonuna tıklanyınız.<br/>
                        Eğer <b>Resmin Boyutu büyük ise</b> Lütfen Sistemin <b>Gerekli Mesajının Gelmesini bekleyiniz.</b><br/>
                        Kullanıcı için , Eklendi Mesajı geldikten sonra OK butonuna tıklanıp tekrar istenen işlem yapılabilir.<br/><br/>


                        <h4>Kullanıcı Güncelleme İşlemi Nasıl Yapılır?</h4><br/>
                        1. Kullanıcı sekmesine tıkladıktan sonra açılan penceredeki <b>Kullanıcı Tablosunda </b> hangi Kullanıcıyı güncellemek istiyorsanız o satırdaki <b>Güncelle Butonuna </b> Tıklayınız.<br/>
                        2. Açılan Pencerede güncellemek istediğiniz Kullanıcı bilgileri karşımıza çıkmış olacak.<br/>
                        3. Açılan pencerede Kullanıcı ile ilgili hangi bilgilerin güncellemesini istiyorsanız bilgileri giriyorsunuz.<br/>
                        (Kullanıcı Şifresini Güncellemej için yeni şifre alanına yeni şifreyi girebilirsiniz!)<br/>
                        4. Bilgiler Girildikten Sonra Haber Güncelle Butonuna Tıklanır.<br/>
                        5. Butona Tıkladıktan Sonra <b>Sistemin Gerekli Mesajı Vermesini Bekleyiniz.</b><br/><br/>
                        <b>LÜTFEN SİSTEME GİRİLİNE BİLGİLERİN DAHA ÖNCE HİÇ BİR YEREDE KULLANILMAMASINA ÖZEN GÖSTERİNİZ. (TAVSİYEMDİR!)</b><br/><br/>
                        <b>UNUTMAYIN RESMİN BOYUTU NE KADAR BÜYÜK İSE GÜNCELLEME İŞLEMİ BİRAZ UZUN SÜRER!</b><br/><br/>
                            
                        <h4>Kullanıcı Silme İşlemi Nasıl Yapılır?</h4><br/>
                        1. Silmek İstediğiniz Kullanıcının hangi satırda olduğunu bulunuz. (arayın,sıralayın vb.)<br/>
                        2. Silinmek istenen Kullanıcıyı bulduktan sonra o satırdaki <b>SİL Butonuna</b> Tıklayınız.<br/>
                        3. Tıklandıktan sonra <b>Emin Misiniz?</b> mesajına <b>evet,sil</b> butonuna tıkladığında silinmiş olacaktır.<br/><br/>
                        <b>LÜTFEN SİLMEK İSTEDİĞİNİZ Kullanıcadan EMİN OLUN!</b>     
                        </p>

                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Help