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
        <motion.div
          variants={itemVariants}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            What People Say
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Testimonials Coming Soon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are gathering feedback from our amazing clients. Stay tuned for
            updates!
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
            Collecting testimonials from satisfied clients
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
