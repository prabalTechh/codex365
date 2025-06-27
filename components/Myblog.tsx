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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
          Blogs Coming Soon
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 mx-auto rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl">
          I'm currently working on sharing my thoughts and insights. Stay tuned for updates!
        </p>
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
          Writing insightful content about technology and development
        </div>
      </motion.div>
    </section>
  );
};

export default MyBlogs;
