import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.error(err));
=======
  .catch(err => console.log(err));
>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608
