type Props = {};

import Image from "next/image";

const BgHomepage = (props: Props) => {
    return (
        <div>
            <Image
                src="static/bg.jpg"
                alt=""
                className=" "
            />
        </div>
    );
};

export default BgHomepage;
