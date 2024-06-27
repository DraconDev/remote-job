type Props = {};

import Image from "next/image";

const BgHomepage = (props: Props) => {
    return (
        <div>
            <Image
                src="/static/bg.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-[500px] w-full object-cover  "
                width="2000"
                height="2000"
            />
        </div>
    );
};

export default BgHomepage;
