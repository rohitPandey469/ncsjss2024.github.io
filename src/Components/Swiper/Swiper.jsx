// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

import web3 from "./assets/web3.jpg"
import orientation from "./assets/lakshya.jpg"
import orientation_stage from "./assets/orientation_stage.jpg"
import recruitment from "./assets/recruitment.png"
import gsoc from "./assets/gsoc.jpg"
import hackout from "./assets/hackout.jpg"
import workshop from "./assets/orientation.jpg"
import urvashi_utsav from "./assets/uravshi_utsav.jpg"
import './Swiper.css'

export default function Slider(){

    return (
        <>
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 10,
              stretch: 40,
              depth: 150,
              scale: 0.7,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            grabCursor={true}
            onClick={(swiper, event) => {
                if(event.x){
                    if(event.x > event.view.innerWidth/2)
                        swiper.slideNext();
                    else
                        swiper.slidePrev();
                }
            }}
          >
            <SwiperSlide>
                <img 
                    src={gsoc}
                    alt={"Abhishek Pandey GSOC'23"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={web3}
                    alt={"Hackathon winners"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={orientation}
                    alt={"Orientation Programme 2023"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={recruitment}
                    alt={"Recruitments 2022"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={orientation_stage}
                    alt={"Orientation Programme 2023"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={hackout}
                    alt={"Hackout Winners"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={workshop}
                    alt={"Programming Workshop"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={urvashi_utsav}
                    alt={"Urvashi and Utsav placement"}
                />
            </SwiperSlide>
          </Swiper>
        </>
      );
}