import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

const testimonialsData: TestimonialData[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Software Engineer",
    review: "This service is outstanding! The team was very helpful and responsive.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Product Manager",
    review: "Highly recommend! Amazing experience and great attention to detail.",
    rating: 4,
  },
  {
    id: "3",
    name: "Alice Brown",
    role: "UX Designer",
    review: "Loved the user-friendly interface and smooth performance!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 border-b pb-4"
        >
          What People Say
        </motion.h1>

        {/* <div className="grid  gap-8">
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" fill="yellow" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                "{testimonial.review}"
              </p>
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</span>
            </motion.div>
          ))}
        </div> */}
        <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Testimonials Coming Soon
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          We are gathering feedback from our amazing clients. Stay tuned for
          updates!
        </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
