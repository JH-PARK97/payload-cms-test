import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../../acess/isAdmin';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    access: {
        update: isAdmin,
    },
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: 'name',
            type: 'text',
            label: 'Name',
        },
        {
            name: 'roles',
            type: 'select',
            options: ['admin', 'user'],
            label: 'Role',
        },
    ],
};
