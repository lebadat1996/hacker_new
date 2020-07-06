import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuyenTapComponent } from './luyen-tap/luyen-tap.component';
import {FormsModule} from '@angular/forms';
import { EventClickComponent } from './event-click/event-click.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    LuyenTapComponent,
    EventClickComponent,
    ViewChildComponent,
    ArticleComponent,
    LikeComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
