import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import {ChatPageComponent} from './chat/chat-page/chat-page.component'

const routes: Routes = [{ path: '', redirectTo:'Login', pathMatch: 'full' },
                        { path: 'Login', component: LoginPageComponent },
                        { path: 'chat', component: ChatPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
