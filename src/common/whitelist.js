const getAllUsernames = () => {
    return Object.keys(process.env).filter((key) =>
        /GITHUB_USERNAME_\d*$/.exec(key),
    );
};

const whitelist = getAllUsernames();

export { whitelist };
export default whitelist;
