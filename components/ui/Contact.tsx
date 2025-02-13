import { ReactElement } from "react";

interface Iprops {
  icon: ReactElement;
  title: string;
  desc: string;
}

const Contact = ({ icon, title, desc }: Iprops) => {
  return (
    <div className="flex items-start p-8 md:p-4 border-b border-gray-300 dark:border-gray-700 flex-row md:flex-col gap-3">
      <button className="p-3 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center w-12 h-12 hover:bg-blue-200 transition">
        {icon}
      </button>
      <div className="flex flex-col">
        <h4 className="text-base font-medium text-gray-800 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default Contact;
