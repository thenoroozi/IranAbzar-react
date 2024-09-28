import Router from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import defaultOptions from "./configs/reactQuery";
import Layout from './layouts/Layout';

function App() {

   const queryclient = new QueryClient({ defaultOptions })

   return (
      <QueryClientProvider client={queryclient}>
         <BrowserRouter>
            <Layout>
               <Router />
            </Layout>
         </BrowserRouter>
      </QueryClientProvider>
   )
}

export default App
