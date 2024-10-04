import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
    <div className="slider-1 py-32 bg-gray-100">
      <div className="container px-4 sm:px-8">
        <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
          What do users think about Pavo
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          className="card-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img
                  className="card-image"
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                />
                <div className="card-body">
                  <p className="italic mb-3">{testimonial.text}</p>
                  <p className="testimonial-author">{testimonial.author}</p>
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
