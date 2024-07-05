'use client';
import { sendEmail } from "@/utils/email/action";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <button onClick={() => sendEmail()}>Send Email</button>
        </div>
    );
};

export default page;
