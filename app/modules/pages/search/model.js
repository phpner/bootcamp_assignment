import {resource} from '../article/model.js';

/**
 * @param title
 * @returns Promise
 */
export const searchEntity = async (title) => {
    return await resource.find(
        {
            $or: [
                {title: {'$regex': `${title}`, '$options': 'i'}},
            ],
        }
    ).sort({'dateCreated': 'desc'}).exec();

}
