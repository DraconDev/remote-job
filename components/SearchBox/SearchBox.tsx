import { countries, experiences, jobTypes, regions } from "@/consts/info";

type Props = {};

const SearchBox = (props: Props) => {
    return (
        <div className="w-full px-3 py-1">
            <h1>Remote Jobs</h1>
            <div className="w-full">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="title">Title or Skill</label>
                        <input type="text" id="title" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="location">Location</label>
                        <select id="location">
                            <option value="">Select location</option>
                            {[...regions, ...countries].map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="jobType">Job Type</label>
                        <select id="jobType">
                            <option value="">Select Job Type</option>
                            {jobTypes.map((jobType) => (
                                <option key={jobType} value={jobType}>
                                    {jobType}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="experience">Experience</label>
                        <select id="experience">
                            <option value="">Select Experience</option>
                            {experiences.map((experience) => (
                                <option key={experience} value={experience}>
                                    {experience}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* <div className="flex flex-col">
                        <label htmlFor="salary">Salary</label>
                        <select id="salary">
                            <option value="">Select Salary</option>
                            {salaries.map((salary) => (
                                <option key={salary} value={salary}>
                                    {salary}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role">Role</label>
                        <select id="role">
                            <option value="">Select Role</option>
                            {roles.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
