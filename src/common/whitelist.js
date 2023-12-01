const getAllUsernames = () => {
    return Object.keys(process.env).filter((key) =>
        /GITHUB_USERNAME_\d*$/.exec(key),
    );
};

const whitelist = getAllUsernames().map(
    (usernameVar) => process.env[usernameVar],
);

export { whitelist };
export default whitelist;
