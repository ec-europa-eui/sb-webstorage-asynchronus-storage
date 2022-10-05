import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    CoreModule as EuiCoreModule,
    translateConfig,
    CoreModuleEffects,
    EUI_CONFIG_TOKEN,
} from '@eui/core';

import { appConfig } from '../../config';
import { environment } from '../../environments/environment';
import { REDUCER_TOKEN, getReducers, metaReducers } from './reducers';
import * as localForage from 'localforage';
import { StorageService, SessionStorageService,LocalStorageService, 
    AsyncStorageService,
    LocalForageService,
    LOCAL_FORAGE_SERVICE_CONFIG_TOKEN,
    
} from '@eui/core';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        EuiCoreModule.forRoot(),
        EffectsModule.forRoot([...CoreModuleEffects]),
        TranslateModule.forRoot(translateConfig),
        StoreModule.forRoot(REDUCER_TOKEN, { metaReducers })
    ],
    exports: [
        TranslateModule
    ],
    providers: [
        {
            provide: REDUCER_TOKEN,
            deps: [],
            useFactory: getReducers,
        },
        {
            provide: EUI_CONFIG_TOKEN,
            useValue: { appConfig: appConfig, environment: environment }
        },
        {
            provide: APP_BASE_HREF, useValue: '/'
        },
        SessionStorageService,
        LocalStorageService,
        { provide: StorageService, useExisting: LocalStorageService },
         LocalForageService,
        { provide: AsyncStorageService, useExisting: LocalForageService },

    ]
})
export class CoreModule {
}
