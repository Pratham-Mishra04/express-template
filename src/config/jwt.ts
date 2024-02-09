const getTokenTTL = (): number => {
    try {
        const days = Number(JWT.REFRESH_TOKEN_TTL.split('d')[0]);
        return days * 24 * 60 * 60 * 1000; //in microseconds
    } catch {
        return 0;
    }
};

const JWT = {
    ACCESS_TOKEN_TTL: '1h',
    REFRESH_TOKEN_TTL: '14d',
    REFRESH_TOKEN_TTL_IN_MICROSECONDS: getTokenTTL(),
};

export default JWT;
