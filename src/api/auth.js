export const setAuthToken = (user, role) => {
    // create user object
    const currentUser = {
        name: user.displayName,
        email: user.email,
        role: role,
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
