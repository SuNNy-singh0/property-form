export const createDummyJWT = (user) => {
    const header = {
        alg: "HS256",
        typ: "JWT"
    };
    const payload = {
        username: user.username,
        email: user.email,
        exp: Math.floor(Date.now() / 1000) + (60 ) // Expires in 1 hour
    };

    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));

    return `${base64Header}.${base64Payload}`;
};
export const isTokenExpired = (token) => {
    if (!token) return true; // No token means expired

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp < currentTime; // Return true if expired
    } catch (error) {
        console.error("Invalid token format", error);
        return true; // If there's an error, assume it's expired
    }
};