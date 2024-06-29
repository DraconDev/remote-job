type Props = {};

import Image from "next/image";

const BgHomepage = (props: Props) => {
    return (
        <div>
            <Image
                src="/static/bg.jpg"
                alt=""
                className="-z-10 h-[500px] w-screen object-cover"
                width="2000"
                height="2000"
            />
        </div>
    );
};

export default BgHomepage;
