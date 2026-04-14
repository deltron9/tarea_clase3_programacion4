import { Routes } from '@angular/router';
import { Bienvenida } from './pages/bienvenida/bienvenida'; 
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ErrorPage } from './pages/error-page/error-page';
import { Perfil } from './pages/perfil/perfil';

export const routes: Routes = [
  { path: 'bienvenida', 
    component: Bienvenida 
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  { path: 'login', 
    component: Login 
  },
  { path: 'register', 
    component: Register 
  },
  {  path: 'perfil',
    component: Perfil
  },
  { path: '**', 
    component: ErrorPage 
  }
];