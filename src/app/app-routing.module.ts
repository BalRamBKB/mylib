import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'icons', component:IconsComponent },
  { path: 'color-palette', component:ColorPaletteComponent },
  { path: 'color-theme', component:ColorThemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
