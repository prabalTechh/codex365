import { Mail } from "lucide-react";
import { ReactElement } from "react";
interface Iprops {
    icon:ReactElement;
    title:String;
    desc:String;
}
const Contact = ({icon,title,desc}:Iprops) => {
    return (<div className=" flex p-2 border-b  flex-col gap-2">
        <span ><button className="p-3 bg-[#C4D9FF] dark:bg-gray-700 rounded-full">{icon}</button></span>
        <h4 className="text-sm">{title}</h4>
        <p className="text-xs text-gray-400">{desc}</p>
    </div>);
}

export default Contact;