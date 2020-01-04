import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { IconComponent } from './icons/icon-list/icon/icon.component';
import { IconListComponent } from './icons/icon-list/icon-list.component';
import { IconDetailComponent } from './icons/icon-detail/icon-detail.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';
import { ColorListComponent } from './color-theme/color-list/color-list.component';
import { ColorComponent } from './color-theme/color-list/color/color.component';
import { ColorViewComponent } from './color-theme/color-view/color-view.component';
import { ColorList2Component } from './color-theme/color-list2/color-list2.component';
import { Color2Component } from './color-theme/color-list2/color2/color2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IconsComponent,
    ColorPaletteComponent,
    IconComponent,
    IconListComponent,
    IconDetailComponent,
    ColorThemeComponent,
    ColorListComponent,
    ColorComponent,
    ColorViewComponent,
    ColorList2Component,
    Color2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
