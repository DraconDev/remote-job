import PostForm from "@/components/PostJobForm/PostForm";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <PostForm />
            {/* <Button onClick={() => createJobPost({ job_title: "job_title" })}>
                Post
            </Button> */}
        </div>
    );
};

export default page;
