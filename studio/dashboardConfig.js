export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6105b6ed86f40467c6abd737',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1sdxe8bu',
                  apiId: 'cc0150fa-e647-4fae-81d2-2a9296b89274'
                },
                {
                  buildHookId: '6105b6eda18b5b7a42c82ac4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ny7e23ms',
                  apiId: 'dadde1d6-9303-480f-ad40-4f2aec4a5a3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OstKost/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ny7e23ms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
