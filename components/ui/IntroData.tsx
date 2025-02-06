

import { ReactNode } from 'react';

const IntroData = ({ children }: { children: ReactNode }) => {
    return (  <div className="flex p-2 gap-2 ">
        <hr className="min-h-14 border border-gray-500" />
        <p className=" text-xs text-gray-400">{children}</p>
    </div> );
}
 
export default IntroData;