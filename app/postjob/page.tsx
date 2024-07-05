import PostJobForm from "@/components/PostJobForm/PostJobForm";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <PostJobForm />
            {/* <Button onClick={() => createJobPost({ job_title: "job_title" })}>
                Post
            </Button> */}
        </div>
    );
};

export default page;
