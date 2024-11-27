import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'

import router from './router/index.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthProvider>

        <RouterProvider router={router} />
    </AuthProvider>
)
