import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { DcCharactersComponent } from './views/dc-characters/dc-characters.component';
import { HomeComponent } from './views/home/home.component';
import { MarvelCharactersComponent } from './views/marvel-characters/marvel-characters.component';
import { SingleCharacterComponent } from './views/single-character/single-character.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'dc-characters',
        component: DcCharactersComponent
    },

    {
        path: 'marvel-characters',
        component: MarvelCharactersComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'single-character',
        component: SingleCharacterComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },
    
  	{ path: '**', redirectTo: '' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
