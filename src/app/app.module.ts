import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

// redux
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemon.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './store/pokemon.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    EffectsModule.forRoot([PokemonEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/pokemon-app/' },
                PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
