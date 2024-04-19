import { CollectionConfig } from 'payload/types';

export const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'writer',
            type: 'text',
            label: 'Writer',
            required: true,
        },
        {
            name: 'content',
            type: 'textarea',
            label: 'Content',
            required: true,
        },
    ],
};
