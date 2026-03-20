import { render, screen } from '@testing-library/react'
import LivesBar from '@/components/game/LivesBar'

describe('LivesBar', () => {
  it('affiche le bon nombre d\'icônes', () => {
    const { container } = render(<LivesBar lives={3} maxLives={5} />)
    const icons = container.querySelectorAll('span')
    expect(icons).toHaveLength(5)
  })

  it('a un aria-label accessible', () => {
    render(<LivesBar lives={3} maxLives={5} />)
    expect(screen.getByLabelText('3 vie(s) restante(s) sur 5')).toBeInTheDocument()
  })

  it('marque les vies perdues comme inactives', () => {
    const { container } = render(<LivesBar lives={2} maxLives={3} />)
    const icons = container.querySelectorAll('span')
    // Les 2 premières sont actives, la 3e est grisée
    expect(icons[2].className).toContain('opacity-20')
  })
})
