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
                  buildHookId: '5ed815a7c44f69017162255f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kbtmfwqc',
                  apiId: '74718e61-8429-4745-afea-2f658be9f527'
                },
                {
                  buildHookId: '5ed815a75d4068024cbbec1a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1f5fqgbd',
                  apiId: 'a2dab31c-44c5-4ed6-a969-f1779a29c749'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jbolt01/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1f5fqgbd.netlify.app', category: 'apps'}
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
