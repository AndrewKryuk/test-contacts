import {Routes} from '@angular/router';
import {PageContainerComponent} from './shared/page-container/page-container/page-container.component';

export const routes: Routes = [
  {
  path: '',
    component: PageContainerComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/search',
    },
    {
      path: 'search',
      loadChildren: () => import('./pages/contacts-search/contacts-search.module').then(m => m.ContactsSearchModule),
    },
    {
      path: 'saved',
      loadChildren: () => import('./pages/contacts-saved/contacts-saved.module').then(m => m.ContactsSavedModule),
    },
    {
      path: '**',
      loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
    },
  ],
},
];
