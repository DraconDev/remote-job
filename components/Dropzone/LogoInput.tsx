type Props = {};

const LogoInput = (props: Props) => {
    return (
        <div>
            <label htmlFor="logo" className="w-10 h-10 bg-red-500"></label>
            <input id="logo" name="logo" type="file" accept="image/*" />{" "}
        </div>
    );
};

export default LogoInput;
