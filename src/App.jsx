import React from 'react'
import { useTranslation } from 'react-i18next'
// import Switcher from './components/Switcher'
import app from "./App.css"
import Button from '@mui/material/Button';
import Navbar from './components/Navbar'
import pic1 from './assets/pic1.png'
import truck from './assets/trucks.png'
import frame from './assets/frame.png'
import frame1 from './assets/farme1.png'
import frame2 from './assets/frame2.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import pic5 from './assets/pic5.png'
import pic6 from './assets/pic6.png'
import pic7 from './assets/pic7.png'
import frame3 from './assets/frame3.png'
import frame4 from './assets/frame4.png'
import frame5 from './assets/frame5.png'
import frame6 from './assets/frame6.png'
import frame7 from './assets/frame7.svg'
import frame8 from './assets/frame8.png'
import frame9 from './assets/frame9.png'
import frame10 from './assets/frame10.png'
import frame11 from './assets/frame11.png'
import gr1 from './assets/gr1.png'
import gr2 from './assets/gr2.png'
import gr3 from './assets/gr3.png'
import picc1 from './assets/picc1.png'
import a1 from './assets/111.png'
import a2 from './assets/222.png'
import a3 from './assets/333.png'
import usto from './assets/usto.png'
import yak from './assets/yak.png'
import du from './assets/du.png'
import se from './assets/se.png'
import chor from './assets/chor.png'
import frame111 from './assets/frame111.png'
import frame222 from './assets/frame222.png'
import frame333 from './assets/frame333.png'
import frame444 from "./assets/frame444.png"
import director from './assets/director.png'
import logos from './assets/logos.png'
import logo from './assets/logo.png'
import Todo from './components/Todo'

const App = () => {

  const {t, i18n} = useTranslation()
  
  
  
  return (
    <div>
      <div className='max-w-[1300px] mx-auto static z-10'>
      <Navbar/>
      </div>


          <section className='max-w-[1400px] mx-auto min-h-[100vh] dark:bg-[#03070f] pt-[60px] pb-[60px]'>
            <div className='text-center'>

           <p className='text-center dark:text-[white] text-[48px] text-[#212B31] font-[400] w-[70%] mx-auto '>{t("smart")}</p>
           <Button sx={{fontSize:"12px",width:"120px",height:"30px",bgcolor:"black",color:"white"}} className="dark:bg-[white] dark:text-[black]" variant='outlined'>{t("more")}</Button>
           <div className='w-full flex flex-col items-center'>
           <img src={pic1} alt="" />
           <img src={truck} alt="" />
           </div>

            </div>
            <div className='w-[90%] mx-auto flex justify-evenly gap-y-[20px] flex-wrap pt-[50px]'>
              <div className='w-[300px] text-center'>
                <div className='w-full flex justify-center'>
                  <img src={frame} alt="" />
                </div>
                  <p className='text-[18px] text-[#212B31] dark:text-[white] pt-[8px]'>{t("card.text1")}</p>
                  <p className='text-[16px] text-[#212B31] dark:text-[white] pt-[12px]'>{t("card.text2")}</p>
              </div>

              <div className='w-[300px] text-center '>
                <div className='w-full flex justify-center'>
              <img src={frame1} alt="" />
                </div>
              <p className='text-[18px] text-[#212B31] dark:text-[white] pt-[8px]'>{t("card.text3")}</p>
       <p className='text-[16px] text-[#212B31] dark:text-[white] pt-[12px]'>{t("card.text4")}</p>
        
              </div>

              <div className='w-[300px] text-center'>
              <div className='w-full flex justify-center'>
              <img src={frame2} alt="" />
                </div>
              <p className='text-[18px] text-[#212B31] dark:text-[white] pt-[8px]'>{t("card.text5")}</p>
           <p className='text-[16px] text-[#212B31] dark:text-[white] pt-[12px]'>{t("card.text6")}</p>
        
              </div>
          {/* 2nd section */}
             
              <p className='text-[#212B31] text-[32px] font-[400] text-center pt-4 dark:text-white'>{t("card.text7")}</p>
              <p className='text-[20px] text-[#72787D] font-[400] text-center w-[80%] dark:text-white'>{t("card.text8")}</p>
              <div>
                <img src={pic2} alt="" />
              </div>
              <p className='text-[32px] text-[#212B31] font-[400] leading-[48px] text-center w-[80%] pt-[50px] dark:text-white' >{t("card.text9")}</p>
              
            </div>
                {/* 3rd section */}
              <div className='w-[90%] mx-auto flex pt-[50px] sm:flex-col'>
                <div className='w-[50%] sm:w-full p-3 pt-[50px]'>
                 <p className='text-[#212B31] text-[32px] font-[400] dark:text-white'>{t("card.text11")}</p>
                 <p className='text-[20px] text-[#72787D] font-[400] pt-[10px] dark:text-white'>{t("card.text10")}</p>
                </div>
                 
                  <div className='w-[50%] sm:w-full'>
                   <img src={pic3} alt="" />
                  </div>
                   
              </div>
                 <div className='w-full flex justify-center pt-[50px]'>
                  <img src={pic4} alt="" />
                 </div>
          {/* 4th section */} 
          <p className='text-[32px] text-[#212B31] font-[400] text-center pt-[50px] dark:text-white'>{t("card.text18")}</p>
          <p className='text-[20px] text-[#72787D] text-center w-[80%] mx-auto pt-[20px] dark:text-white'>{t("card.text19")}</p>
          <div className='w-[90%] mx-auto '>
             <div className='w-full flex pt-[50px] sm:flex-col'>
              <div className='w-[50%] sm:w-full pt-[50px]'>
                <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text12")}</p>
                <p className='text-[16px] text-[#72787D] pt-[18px] font-[400] dark:text-white'>{t("card.text13")}</p>
              </div>
              <div className='w-[50%] sm:w-full flex justify-center'>
                <img src={pic5} alt="" />
              </div>
             </div>

             <div className='w-full flex pt-[50px] sm:flex-col'>
              <div className='w-[50%] sm:w-full pt-[50px] order-2 sm:order-1'>
                <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text14")}</p>
                <p className='text-[16px] text-[#72787D] pt-[18px] font-[400] dark:text-white'>{t("card.text15")}</p>
              </div>
              <div className='w-[50%] sm:w-full flex justify-center order-1 sm:order-2'>
                <img src={pic6} alt="" />
              </div>
             </div>

             <div className='w-full flex pt-[50px] sm:flex-col'>
              <div className='w-[50%] sm:w-full pt-[50px] '>
                <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text16")}</p>
                <p className='text-[16px] text-[#72787D] pt-[18px] font-[400] dark:text-white'>{t("card.text17")}</p>
              </div>
              <div className='w-[50%] sm:w-full flex justify-center '>
                <img src={pic7} alt="" />
              </div>
             </div>


          </div>
          <div className='w-[90%] mx-auto pt-[50px] pb-[50px]'>
            <p className='text-[32px] text-[#212B31] font-[400] text-center dark:text-white'>{t("card.text20")}</p>
            <p className='text-[20px] text-[#72787D] font-[400px] text-center w-[80%] dark:text-white mx-auto'>{t("card.text21")}</p>
              
              <div className=' w-[80%] mx-auto pt-3'>
              <Todo></Todo>
              </div>
            <div className='w-full flex flex-wrap pt-[50px] justify-evenly gap-y-[50px]'>
              {/* 1 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame3} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text22")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text23")}</p>
               </div>
              </div>
              {/* 2 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame4} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text24")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text25")}</p>
               </div>
              </div>
              {/* 3 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame5} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text26")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text27")}</p>
               </div>
              </div>
              {/* 4 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame6} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text28")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text29")}</p>
               </div>
              </div>
              {/* 5 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame7} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text28")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text29")}</p>
               </div>
              </div>
              {/* 6 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame8} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text28")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text29")}</p>
               </div>
              </div>
              {/* 7 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame9} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text28")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text29")}</p>
               </div>
              </div>
              {/* 8 */}
              <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame10} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text28")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text29")}</p>
               </div>
              </div>
          {/* 9 */}
          <div className='w-[350px] flex '>
               <div className='w-[20%]'>
                <img src={frame11} alt="" />
               </div>
               <div className='w-[80%]'>
                   <p className='text-[18px] text-[#212B31] font-[400] dark:text-white'>{t("card.text28")}</p>
                   <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text29")}</p>
               </div>
           </div>
            </div>
          </div>
             <div className='w-[90%] mx-auto pt-[50px] pb-[50px]'>
              <p className='text-[32px] text-[#212B31] font-[400] text-center dark:text-white'>{t("card.text30")}</p>
              <p className='text-[20px] text-[#72787D] text-center w-[80%] mx-auto pt-[10px] dark:text-white'>{t("card.text31")}</p>
               <div className='w-full flex flex-wrap pt-[80px] justify-evenly'>
                    <div className='w-[350px] text-center'>
                      <div className='flex justify-center'>
                        <img src={gr1} alt="" />
                      </div>
                      <p className='text-[18px] text-[#212B31] font-[400] dark:text-white pt-4' >{t("card.text32")}</p>
                      <p className='text-[16px] font-[400] text-[#72787D] dark:text-white pt-2'>{t("card.text33")}</p>
                    </div>

                    <div className='w-[350px] text-center'>
                      <div className='flex justify-center'>
                        <img src={gr2} alt="" />
                      </div>
                      <p className='text-[18px] text-[#212B31] font-[400] dark:text-white pt-4' >{t("card.text34")}</p>
                      <p className='text-[16px] font-[400] text-[#72787D] dark:text-white pt-2'>{t("card.text35")}</p>
                    </div>
                    <div className='w-[350px] text-center'>
                      <div className='flex justify-center'>
                        <img src={gr3} alt="" />
                      </div>
                      <p className='text-[18px] text-[#212B31] font-[400] dark:text-white pt-4' >{t("card.text36")}</p>
                      <p className='text-[16px] font-[400] text-[#72787D] dark:text-white pt-2'>{t("card.text37")}</p>
                    </div>
               </div>
                <div className='flex justify-around pt-[50px]'>
                  <p className='text-[18px] text-[#212B31] font-[400] dark:text-white' >{t("card.text38")}</p>
                  <Button sx={{fontSize:"12px",width:"120px",height:"30px",bgcolor:"black",color:"white"}} className="dark:bg-[white] dark:text-[black]" variant='outlined'>{t("more")}</Button>

                </div>
             </div>
           
          </section>
           <section className='max-w-[1400px] bg-[#212B31] mx-auto  dark:bg-[white] dark:text-[#212B31] pt-[60px] pb-[60px]'>
            <div className='w-[90%] mx-auto flex pt-[50px] justify-evenly sm:flex-col'>
              <div className='w-[40%] sm:w-full'>
                  <p className='text-[32px] text-[#FFFFFF] dark:text-[#212B31]  font-[400]'>{t("card.text40")}</p>

                  <ul className='text-[#FFFFFFBF] dark:text-[#212B31]  text-[16px] font-[400]'>
                    <li className='pt-[40px]'>{t("card.text39")}</li>
                    <li className='pt-[25px]'>{t("card.text41")}</li>
                    <li className='pt-[25px]'>{t("card.text42")}</li>
                  </ul>
               <div className='pt-[50px] flex justify-evenly w-[65%] sm:w-full  pb-[50px]'>

                  <Button sx={{fontSize:"12px",width:"145px", height:"30px",bgcolor:"black",color:"white",  }} className="dark:bg-[white] dark:text-[black] " variant='outlined'>{t("navbar.button")}</Button>
                  <Button sx={{fontSize:"12px",width:"120px",height:"30px",bgcolor:"black",color:"white"}} className="dark:bg-[white] dark:text-[black]" variant='outlined'>{t("more")}</Button>
             </div>

              </div>
              <div className='w-[40%] sm:w-[90%] dark:bg-[#212B31] flex justify-center'>
                <div>
              <img src={picc1} alt="" />
                </div>
              </div>

            </div>
              <div className='flex flex-wrap  justify-evenly w-[90%] mx-auto pt-[50px]'>
                <div className='w-[350px]'>
                  <div className='flex justify-center'>
                  <img src={a1} alt="" />
                  </div>
                  <p className='text-[white] dark:text-[black]  pt-5'>{t("card.text43")}</p>
                </div>
                <div className='w-[350px]'>
                  <div className='flex justify-center'>
                  <img src={a2} alt="" />
                  </div>
                  <p className='text-[white] dark:text-[black]  pt-5'>{t("card.text44")}</p>

                </div>
                <div className='w-[350px]'>
                  <div className='flex justify-center'>
                  <img src={a3} alt="" />
                  </div>
                  <p className='text-[white] dark:text-[black] pt-5'>{t("card.text45")}</p>



                </div>
              </div>
            
           </section>
           <section className='max-w-[1400px]  mx-auto  dark:bg-[#03070f] dark:text-[white] pt-[60px] pb-[60px]'>
            <div className='w-[90%] mx-auto flex sm:flex-col'>
              <div className='w-[48%] sm:w-full flex flex-col items-center'>
                <p className='text-[32px] font-[400] dark:text-white'>{t("card.text46")}</p>
                <p className='text-[20px] font-[400] text-[#72787D] dark:text-white'>{t("card.text47")}</p>
                <div className='pt-[50px]'>
                <img src={usto} alt="" />
                </div>
              </div>
              <div className='w-[50%] sm:w-full'>
                <div className='w-[80%] mx-auto flex'>
                  <div className='w-[15%]'>
               <img src={yak} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text48")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text49")}</p>
                  </div>

                </div>
                {/* 2 */}
                <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={du} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text50")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text51")}</p>
                  </div>

                </div>
                {/* 3 */}
                <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={se} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text52")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text53")}</p>
                  </div>

                </div>
                {/* 4 */}
                <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={chor} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text54")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text55")}</p>
                  </div>

                </div>


              </div>

            </div>
             <div className='w-[90%] mx-auto  pt-[50px]'>
               <p className='text-[32px] text-[#212B31] text-center dark:text-white'>{t("card.text56")}</p>
               <p className='text-[20px] font-[400] text-[#212B31] text-center pt-[20px] dark:text-white'>{t("card.text57")}</p>
               <div className='w-full flex sm:flex-col'>
              <div className='w-[50%] sm:w-full'>
                {/*  1*/}
              <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={frame111} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text58")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text51")}</p>
                  </div>

                </div>
                {/*  */}
                <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={frame222} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text59")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text51")}</p>
                  </div>

                </div>
                {/*  */}
                <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={frame333} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text60")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text51")}</p>
                  </div>

                </div>
                {/*  */}
                <div className='w-[80%] mx-auto flex pt-[20px]'>
                  <div className='w-[15%]'>
               <img src={frame444} alt="" />
                  </div>
                  <div className='w-[80%]'>
                    <p className='text-[17px] text-[#212B31] dark:text-white'>{t("card.text61")}</p>
                    <p className='text-[16px] text-[#72787D] font-[400] dark:text-white'>{t("card.text51")}</p>
                  </div>

                </div>
              </div>
              <div className='w-[45%] sm:w-full flex justify-center flex-col'>
             <p className='text-[30px] font-[400] dark:text-white'>{t("card.text62")}</p>
             <div className='pt-[10px]'>
              <img src={director} alt="" />
             </div>
              </div>

               </div>

               <div className='w-full flex justify-center pt-[80px]'>
              <img src={logos} alt="" />
               </div>





              <div className='bgg mt-[50px] mx-auto text-center flex flex-col justify-center'>
                <p className='text-[48px] font-[400]'>{t("card.text63")}</p>
                <div className='w-[40%] mx-auto flex justify-evenly '>
                <Button sx={{fontSize:"12px",width:"145px", height:"30px",bgcolor:"black",color:"white", }} className="dark:bg-[white] dark:text-[black] sm:w-full  " variant='outlined'>{t("navbar.button")}</Button>
                <Button sx={{fontSize:"12px",width:"120px",height:"30px",bgcolor:"black",color:"white"}} className="dark:bg-[white] dark:text-[black] sm:w-full" variant='outlined'>{t("more")}</Button>
                </div>

                </div>

             </div>

           </section>

           <footer className='max-w-[1400px]  mx-auto  dark:bg-[#03070f] dark:text-[white] pt-[60px] pb-[60px]'>
            <div className='w-[90%] mx-auto flex flex-wrap justify-evenly gap-y-[50px] sm:text-center'>
              <ul className='w-[250px] '>
                <li ><img src={logo} alt="" /></li>
                <li className='pt-[30px]'>г. Москва <br /> Пресненская наб., 88, оф. 527</li>
                <li className='pt-[10px]'>info@stroycontrol.ru <br />+7 (945) 123-45-67</li>
              </ul>

              <ul className='w-[250px] flex flex-col items-center'>
                <li className='text-[16px] text-[#212B31] font-[400]'>{t("card.text64")}</li>
                <li className='pt-[30px] text-[#72787D]'>{t("card.text65")}</li>
                <li className='pt-[10px] text-[#72787D]'>{t("card.text66")}</li>
              </ul>

              <ul className='w-[250px] flex flex-col items-center'>
                <li className='text-[16px] text-[#212B31] font-[400]'>{t("card.text67")}</li>
                <li className='pt-[30px] text-[#72787D]'>{t("card.text68")}</li>
                <li className='pt-[10px] text-[#72787D]'>{t("card.text69")}</li>
              </ul>

              <ul className='w-[250px] flex flex-col items-center'>
                <li className='text-[16px] text-[#212B31] font-[400]'>{t("card.text70")}</li>
                <li className='pt-[30px] text-[#72787D]'>{t("card.text71")}</li>
                <li className='pt-[10px] text-[#72787D]'>{t("card.text72")}</li>
              </ul>
            </div>

           </footer>
      

    </div>
  )
}

export default App



// dark:bg-[#040e14]