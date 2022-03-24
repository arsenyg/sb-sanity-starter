export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '623c6d2d179eee65a6db2749',
                  title: 'Sanity Studio',
                  name: 'sb-sanity-starter-studio',
                  apiId: '0e4ef436-eb6b-4830-af39-a540b6067766'
                },
                {
                  buildHookId: '623c6d2d48f3d565385ea648',
                  title: 'Landing pages Website',
                  name: 'sb-sanity-starter',
                  apiId: '2fa1df66-ece1-41b4-8209-583378d91ae0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arsenyg/sb-sanity-starter',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sb-sanity-starter.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
