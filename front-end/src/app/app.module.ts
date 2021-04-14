import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppStoreModule} from './store/app-store.module';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {PageContainerModule} from './shared/page-container/page-container.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports:      [
    BrowserModule,
    PageContainerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppStoreModule,
    HttpClientModule
  ],
  providers:    [],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
