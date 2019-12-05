module.exports = {
  title: 'Take Home Message',
  description: 'A tips/notes collection',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
      nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/hubentu',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/hubentu',
        },
        {
          type: 'web',
          link: 'https://hubentu.github.io/Rcwl/',
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2019-present | takehomessage.com',
          link: '',
        },
      ],
    },

    modifyBlogPluginOptions (blogPluginOptions) {
      const sitemap = {
	      hostname: 'https://takehomessage.com'
      }

      const comment = {
        service: 'disqus',
        shortname: 'vuepress-plugin-blog',
        // service: 'vssue',
        // owner: 'You',
        // repo: 'Your repo',
        // clientId: 'Your clientId',
        // clientSecret: 'Your clientSecret',
      }

      return { ...blogPluginOptions, sitemap, comment }
    }

    // paginationComponent: 'SimplePagination'
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-154016823-1'
      }
    ]
  ]
}
