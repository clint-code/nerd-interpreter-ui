import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { DcCharactersComponent } from './views/dc-characters/dc-characters.component';
import { HomeComponent } from './views/home/home.component';
import { MarvelCharactersComponent } from './views/marvel-characters/marvel-characters.component';
import { SingleCharacterComponent } from './views/single-character/single-character.component';
import { SuperheroesSaintsComponent } from './views/superheroes-saints/superheroes-saints.component';
import { SingleSuperheroSaintViewComponent } from './views/single-superhero-saint-view/single-superhero-saint-view.component';

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
        path: 'superheroes-saints',
        component: SuperheroesSaintsComponent
    },

    {
        path: 'single-superhero-saint',
        component: SingleSuperheroSaintViewComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'dc-characters/single-character/:slug',
        component: SingleCharacterComponent,
    },

    {
        path: 'marvel-characters/single-character/:slug',
        component: SingleCharacterComponent,
    },

    { path: '**', redirectTo: '' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
