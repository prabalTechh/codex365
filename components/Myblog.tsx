import { motion } from "framer-motion";

const MyBlogs = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Blogs Coming Soon
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          I'm currently working on sharing my thoughts and insights. Stay tuned for updates!
        </p>
      </motion.div>
    </section>
  );
};

export default MyBlogs;
