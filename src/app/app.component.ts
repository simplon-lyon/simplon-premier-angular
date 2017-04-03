import { Component } from '@angular/core';
import { PremierService } from './shared/premier.service';

/**
 * On declare ici les providers des classes qu'on voudra pouvoir injecter
 * dans tout le module. A noter que l'injecteur crée un singleton des classes
 * qu'on lui declare, cela signifie que ça sera la même instance de classe qui
 * sera injecter partout dans l'application (à moins qu'un providers re-déclare
 * la classe en question plus loin dans le module)
 */
@Component({
    selector: 'mon-app',
    template: `
    <a routerLink="/premier">Première Page</a>
    <a routerLink="/formulaire">Formulaire</a>
    <a routerLink="/erreur">404</a>
    <router-outlet></router-outlet>`,
    providers: [PremierService]
    //afficher les 2 attributs dans le template
})
export class AppComponent {
    
}