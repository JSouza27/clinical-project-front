import { Layout } from './components/Layout'
import { AppRoutes } from './routes'
import './styles/global.css'

export function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}
