export const assertIn = (v, array, errorMessage) => {
    if (!array.includes(v)) {
        throw new Error(errorMessage);
    }

    return v;
};

export const assertValue = (v, errorMessage) => {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
};
