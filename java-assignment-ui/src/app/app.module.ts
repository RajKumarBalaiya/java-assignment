import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramsComponent } from './anagrams/anagrams.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PhoneDirectoryListComponent } from './phone-directory-list/phone-directory-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AnagramsComponent,
    PhoneDirectoryComponent,
    PageNotFoundComponent,
    HomeComponent,
    PhoneDirectoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
