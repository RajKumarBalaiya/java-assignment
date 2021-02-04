import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramsComponent } from './anagrams/anagrams.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import{PhoneDirectoryListComponent} from './phone-directory-list/phone-directory-list.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'anagrams', component: AnagramsComponent },
  { path: 'phone-directory', component: PhoneDirectoryComponent },
  { path: 'phone-directory-list', component: PhoneDirectoryListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);