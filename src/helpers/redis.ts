/* eslint-disable @typescript-eslint/no-explicit-any */
import REDIS_CLIENT from '../config/redis';
import logger from '../utils/logger';

export const getFromCache = async (key: string): Promise<any> => {
    await REDIS_CLIENT.get(key)
        .then(data => {
            return JSON.parse(data);
        })
        .catch(err => {
            logger.error('failed to get key from cache', 'redis-cache', err);
            return undefined;
        });
};

export const setToCache = async (key: string, value: any) => {
    await REDIS_CLIENT.set(key, JSON.stringify(value)).catch(err => {
        logger.error('failed to set key to cache', 'redis-cache', err);
    });
};

export const removeFromCache = async (key: string) => {
    await REDIS_CLIENT.del(key).catch(err => {
        logger.error('failed to remove key from cache', 'redis-cache', err);
    });
};

export const flushCache = async () => {
    await REDIS_CLIENT.flushAll().catch(err => {
        logger.error('failed to flush cache', 'redis-cache', err);
    });
};
