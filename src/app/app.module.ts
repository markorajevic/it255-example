import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AddNewComponent } from './pages/add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListingComponent,
    SinglePostComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
