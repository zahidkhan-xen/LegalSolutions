import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import test1 from '../assets/images/testimonial-1.jpg'
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    image: test1,
    text: "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great",
    author: "Jude Thorn - Designer",
  },
  {
    image: test1,
    text: "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers",
    author: "Roy Smith - Developer",
  },
  {
    image: test1,
    text: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy",
    author: "Marsha Singer - Marketer",
  },
  {
    image: test1,
    text: "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects",
    author: "Tim Shaw - Designer",
  },
  {
    image: test1,
    text: "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly",
    author: "Lindsay Spice - Marketer",
  },
  {
    image: test1,
    text: "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team",
    author: "Ann Blake - Developer",
  },
];

const Testimonial = () => {
    return (
      <div className="py-32 bg-gray-100">
        <div className="container px-4 sm:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold lg:max-w-5xl lg:mx-auto">
            What do users think about Ehsaantech Legal AI Services
          </h2>
  
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className=""
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card flex flex-col items-center justify-center  px-14">
                  <img
                    className="card-image w-24 h-24 rounded-full object-cover mb-4"
                    src={testimonial.image}
                    alt={`Testimonial ${index + 1}`}
                  />
                  <div className="text-center w-lg">
                    <p className="italic mb-3 text-gray-700">{testimonial.text}</p>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>        
    );
  };
  
export default Testimonial;
