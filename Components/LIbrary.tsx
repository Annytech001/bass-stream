"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
    const onClick = () => {

    };
    return (
        <div className= "flex flex-col">
            <div className=" 
            flex 'items-center'
            items-center
            justify-between
            px-5
            pt-4
            "
            >
                <div  
                className="
                inline-flex
                items-center
                gap-x-2
                "
            >
               
                <TbPlaylist className="text-neutral-500" size={22} />
                <p
                    className="
                    text-neutral-500
                    font-medium
                    text-md
                    "
                > 
                    Your Library
                    </p>
                    </div>
                    <AiOutlinePlus
                    onClick={onClick}
                    size={18}
                    className="
                    text-neutral-500
                    censor-pointer
                    hover:text-white
                    transition
                    "  
                        />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                list of songs!
            </div>
        </div>
    );
}

export default Library;