/*
/** @type {import('next').NextConfig} 
const nextConfig = {};

export default nextConfig;
*/

import removeImports from 'next-remove-imports';

const removeImportsPlugin = removeImports();

const config = removeImportsPlugin({
});

export default config;
