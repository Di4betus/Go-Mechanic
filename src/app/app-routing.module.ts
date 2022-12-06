import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './public/Pages/aboutpage/aboutpage.component';
import { BrakejobpageComponent } from './public/Pages/brakejobpage/brakejobpage.component';
import { ContactpageComponent } from './public/Pages/contactpage/contactpage.component';
import { EnginelightpageComponent } from './public/Pages/enginelightpage/enginelightpage.component';
import { HomepageComponent } from './public/Pages/homepage/homepage.component';
import { LoginpageComponent } from './public/Pages/loginpage/loginpage.component';
import { MaintenancepageComponent } from './public/Pages/maintenancepage/maintenancepage.component';
import { ReportissuepageComponent } from './public/Pages/report-issue-page/reportissuepage.component';
import { SearchrepairspageComponent } from './public/Pages/searchrepairspage/searchrepairspage.component';
import { SignupComponent } from './public/Pages/signup/signup.component';
import { MyInboxComponent } from './private/pages/myInbox/my-inbox.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './private/pages/myProfile/profile.component';
import { MyAccountInfoComponent } from './private/pages/myOverview/my-account-info.component';
import { PublicProfileComponent } from './private/pages/modifyMyPage/public-profile.component';
import { MyPageViewComponent } from './private/pages/viewMyPage/my-page-view.component';
const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

/** Use whatever routing is here in the public-routing module if we end up not use this base level one. */
const routes: Routes = [

  // Public Routing
  { path: 'home',
    component: HomepageComponent
  },

  {
    path:'contact-us',
    component: ContactpageComponent
  },

  {
    path:'login',
    component: LoginpageComponent,
    ...canActivate(redirectToHome)
  },

  {
    path:'about',
    component: AboutpageComponent
  },

  {
    path:'report-issue',
    component: ReportissuepageComponent
  },

  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectToHome)
  },

  {
    path: 'enginelightpage',
    component: EnginelightpageComponent
  },

  {
    path: 'brakejobpage',
    component: BrakejobpageComponent
  },

  {
    path: 'searchrepairspage',
    component: SearchrepairspageComponent
  },

  {
    path: 'maintenancepage',
    component: MaintenancepageComponent
  },

  //Private Routing
  {
    path: 'my-account-info',
    component: MyAccountInfoComponent,
    ...canActivate(redirectToLogin)
  },

  {
    path: 'my-inbox',
    component: MyInboxComponent,
    ...canActivate(redirectToLogin)
  },

  {
    path: 'editMyPage',
    component: PublicProfileComponent,
    ...canActivate(redirectToLogin)
  },

{
  path : 'viewMyPage',
  component: MyPageViewComponent,
  ...canActivate(redirectToLogin)
}

  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   ...canActivate(redirectToLogin)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

/** Below statement allows us to add a variable to not have to import components into the app.module.ts file - Anthony */
export const routingComponents = [ HomepageComponent, ContactpageComponent, LoginpageComponent, AboutpageComponent, SignupComponent, ReportissuepageComponent,MaintenancepageComponent ]