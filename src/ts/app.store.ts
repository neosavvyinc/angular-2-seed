import { provideStore } from '@ngrx/store';

import { errorStackReducer } from './features/common/features/errorHandler/errorHandler.substore';
import { gitUserReducer } from './features/repoLookup/repoLookup.substore';

const appStoreProvider = provideStore({
    gitUser: gitUserReducer,
    errorStack: errorStackReducer
});

export default appStoreProvider;