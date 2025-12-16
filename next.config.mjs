import removeImports from 'next-remove-imports';

const removeImportsPlugin = removeImports();

const config = removeImportsPlugin({

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
});

export default config;
