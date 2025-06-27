import { ReactElement } from "react";

interface Iprops {
  icon: ReactElement;
  title: string;
  desc: string;
}

const Contact = ({ icon, title, desc }: Iprops) => {
  return (
    <div className="flex items-start   border-b border-border/50 flex-row md:flex-col gap-3 group hover:bg-gradient-to-r hover:from-emerald-500/5 hover:to-cyan-500/5 dark:hover:from-emerald-500/10 dark:hover:to-cyan-500/10 rounded-xl transition-all duration-200">
      <button className="p-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center w-12 h-12 hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-cyan-500/30 dark:hover:from-emerald-500/20 dark:hover:to-cyan-500/20 transition-all duration-200 group-hover:scale-105">
        <div className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-200">
          {icon}
        </div>
      </button>
      <div className="flex flex-col">
        <h4 className="text-base font-medium text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default Contact;
