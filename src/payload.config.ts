import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import { Users } from './collections/Users/index';
import { Posts } from './collections/Posts/index';
import { Media } from './collections/Media';

export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
        livePreview: {
            url: 'http://localhost:3000',
            collections: ['users'],
        },
    },

    editor: slateEditor({}),
    collections: [Users, Posts, Media],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [payloadCloud()],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI,
    }),
    cors: ['http://localhost:3000'],
});
