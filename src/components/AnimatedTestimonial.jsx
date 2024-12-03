'use client';

const AnimatedTestimonial = () => {
  const testimonials = [
    {
      image: "https://ehsaantech.com/wp-content/uploads/2023/03/Untitled-design.png",
      text: "Ehsaan Technologies is extremely reliable and competent! They were able to find bugs that many others could not, and they really knows their domain. They executed everything successfully, and even suggested things to improve the system we already had. I hope to work with them again in the future on even larger projects, as I believe he is a great fit for handling complex AWS projects. I highly recommend him!",
      author: "Alex Craig",
      company: "Co-Founder - MARZ & TriplePlay",
    },
    {
      image: "https://ehsaantech.com/wp-content/uploads/2022/12/weilang-zhang.jpeg",
      text: "As a client of Ehsaan Technologies, I had the pleasure of working with their team and utilizing their services for Avetics’ drone-based inspection service. Ehsaan Technologies’ expertise in utilizing computer vision technology was remarkable. I must say that I am thoroughly impressed with the results and the level of service provided by Ehsaan Technologies.",
      author: "Weiliang Zhang",
      company: "CEO - Avetics Global",
    },
  ];

  return (
    <div className="grid gap-6 mx-28 py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute inset-0 ${
                index % 2 === 0 ? "bg-[#F9F7F4]" : "bg-[#F6CEFC]"
              } transform ${index % 2 === 0 ? "rotate-3" : "-rotate-3"} rounded-2xl`}
            />
            <div
              className={`relative ${
                index % 2 === 0 ? "bg-[#F9F7F4] text-black" : "bg-[#F6CEFC] text-black"
              } p-8 rounded-2xl transform ${
                index % 2 === 0 ? "-rotate-3" : "rotate-3"
              } hover:rotate-0 transition-transform duration-300`}
            >
              <p className={`
                ${index % 2 === 0 ?"text-xl text-black font-medium leading-relaxed mb-8":"text-xl text-black font-medium leading-relaxed mb-8"}`}>{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className={`
                ${index % 2 === 0 ?"text-black font-semibold":"text-black font-semibold"}`}>{testimonial.author}</p>
                  <p className={`text-sm ${index % 2 === 0 ? "text-gray-600 text-black" : " text-gray-600 opacity-90"}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTestimonial;
