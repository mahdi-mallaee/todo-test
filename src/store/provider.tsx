import { store, persistor } from './index'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as StoreProvider } from 'react-redux'

export default function ReduxProviders({ children }: { children: React.ReactNode }) {
    return <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </StoreProvider>
}