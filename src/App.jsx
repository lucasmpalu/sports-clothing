import Layout from './layout/Layout'
import AllRoutes from './routes/AllRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Layout>
          <AllRoutes/>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
