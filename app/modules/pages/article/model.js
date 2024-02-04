import mongoose from 'mongoose';

/**
 * Create articles schema
 */
const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: () => Date.now()
    }
});

/**
 * Init model articles
 */
export const resource = mongoose.model('articles', articleSchema);

/**
 * Create new entity
 * @param date
 * @returns Promise
 */
export const createEntity = async (date) => {
    return await resource.create(date).then(r => {});
}

/**
 * Get all entity
 * @returns Promise
 */
export const getAllEntity = async () => {
    return await resource.find().sort({'dateCreated': 'desc'}).exec();
}

/**
 * Get an entity by id
 * @param id
 * @returns Promise
 */
export const getEntity = async (id) => {
    return await resource.findById(id).exec().catch(r => console.log(r));
}

/**
 * Edin an entity
 * @param id
 * @param data
 * @returns Promise
 */
export const editEntity = async (id, data) => {
    return resource.findByIdAndUpdate(id, data).exec().catch(r => console.log(r))
}

/**
 * Delete an entity
 * @param id
 * @returns Promise
 */
export const deleteEntity = async (id) => {
    return resource.findByIdAndDelete(id).exec().catch(r => console.log(r));
}




