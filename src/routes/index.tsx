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
      <Link to="/paintings">Available Works</Link>
      <Link to="https://www.twitch.tv/aforus">Twitch</Link>
      <Link to="http://instagram.com/aforus">Instagram</Link>
      <Link to="https://www.tiktok.com/@artbyaforus">Art TikTok</Link>
      <Link to="https://www.tiktok.com/@af0rus">Stream TikTok</Link>
    </div>
  )
}
