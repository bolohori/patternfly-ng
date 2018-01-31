import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';

import { NavigationItemConfig } from './navigation-item-config';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';
import { WindowReference } from '../utilities/window.reference';
import { ApplicationLauncherComponent } from './application-launcher/application-launcher.component';

export {
  NavigationItemConfig
};

/**
 * A module containing objects associated with the navigation components
 */
@NgModule({
  imports: [CommonModule, TooltipModule.forRoot()],
  declarations: [ ApplicationLauncherComponent, VerticalNavigationComponent],
  exports: [ ApplicationLauncherComponent, VerticalNavigationComponent],
  providers: [TooltipConfig, WindowReference]
})
export class NavigationModule {}
