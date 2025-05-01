import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div
      className="socials"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '2rem',
        fontSize: '3rem',
      }}
    >
      <Link to="/paintings">AVAILABLE WORKS</Link>
      <Link to="https://www.twitch.tv/aforus">TWITCH</Link>
      <Link to="http://instagram.com/aforus">INSTAGRAM</Link>
      <Link to="https://www.tiktok.com/@artbyaforus">ART TIKTOK</Link>
      <Link to="https://www.tiktok.com/@af0rus">STREAM TIKTOK</Link>
    </div>
  )
}
