import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoreModule as UxCoreModule,
 StorageService, 
 SessionStorageService, 
 LocalStorageService,
 AsyncStorageService,
 LocalForageService, LOCAL_FORAGE_SERVICE_CONFIG_TOKEN} from '@eui/core';
 import * as localForage from 'localforage';
 

 import { FormsModule } from '@angular/forms';
 
 import { HelloComponent } from './hello.component';
 
 import { EuiIconModule } from '@eui/components/atoms/eui-icon';
 import { EuiButtonModule } from '@eui/components/eui-button';
 import { EuiCardModule } from '@eui/components/eui-card';
 import { EuiLabelModule } from '@eui/components/atoms/eui-label';
 import { CommonModule } from '@angular/common';
 import { EuiAppModule, EuiNotificationsModule } from '@eui/components/layout';
 import { CachePreventionInterceptor } from '@eui/core';
 import { CorsSecurityInterceptor } from '@eui/core';
 import { AddLangParamInterceptor } from '@eui/core';
 import { HTTP_INTERCEPTORS } from '@angular/common/http';
 
 

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        BrowserModule,
        FormsModule,
        EuiButtonModule,
        EuiIconModule,
        EuiCardModule,
        EuiLabelModule,
        EuiAppModule,
        EuiNotificationsModule,
      
       
    ],
    providers: [
        { provide: 'LocalStorageService', useExisting: LocalStorageService },
        { provide: StorageService, useExisting: SessionStorageService },
        
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
