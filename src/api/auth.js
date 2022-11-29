export const setAuthToken = (user) => {
    // create user object
    const currentUser = {
        name: user.displayName,
        email: user.email,
    };
    console.log(currentUser);
    // save user in the db
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
    })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            localStorage.setItem("recycle-hub-token", data.token);
        });
};

// set user role
export const setUserRole = (email, role) => {
    const roleObj = {
        role: role,
    };

    fetch(`${process.env.REACT_APP_API_URL}/userRole/${email}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(roleObj),
    })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
        });
};

// set user verify status
export const setUserVerifyStatus = (email, isVerified) => {
    const verifyObj = {
        isVerified: isVerified,
    };

    fetch(`${process.env.REACT_APP_API_URL}/verifyStatus/${email}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(verifyObj),
    })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
        });
};
