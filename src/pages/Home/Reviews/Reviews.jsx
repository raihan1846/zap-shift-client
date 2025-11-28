import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);   
    
    return (
        <div className="my-24 mb-24">
            <div className="text-center">
            <h3 className='text-3xl text-center font-bold my-8'>Review</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque, accusantium deserunt culpa quam aspernatur facilis iure nesciunt nemo minima, pariatur, similique asperiores! Nesciunt cum, cumque vero voluptate praesentium doloribus.</p>
            </div>
        <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        className="mySwiper">
       {
        reviews.map(review =>  <SwiperSlide key={review.id}>
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>
        )
       }
        </Swiper>
        </div>
    );
};

export default Reviews;