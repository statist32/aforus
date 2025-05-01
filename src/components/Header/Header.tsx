import { useNavigate } from '@tanstack/react-router'
import './Header.scss'

function Header() {
  const navigate = useNavigate()

  return (
    <h1
      className="header"
      onClick={() => {
        navigate({ to: '/paintings' })
      }}
    >
      AVAILABLE WORKS
    </h1>
  )
}

export default Header
