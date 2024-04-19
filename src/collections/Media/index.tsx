import { CollectionConfig } from 'payload/types';
import React from 'react';

const CustomView = () => {
    return (
        <div
            style={{
                marginTop: 'calc(var(--base) * 2)',
                paddingLeft: 'var(--gutter-h)',
                paddingRight: 'var(--gutter-h)',
            }}
        >
            <h1 id="custom-view-title">{'hihi'}</h1>
            <p>This custom view was added through the Payload config:</p>
            <ul>
                <li>
                    <code>components.views[key].Component</code>
                </li>
            </ul>
        </div>
    );
};

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    admin: {
        useAsTitle: 'title',
        // components: {
        //     views: {
        //         List: CustomView,
        //     },
        // },
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
};
