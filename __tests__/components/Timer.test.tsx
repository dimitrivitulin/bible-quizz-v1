import { render, screen, act } from '@testing-library/react'
import Timer from '@/components/game/Timer'

beforeEach(() => jest.useFakeTimers())
afterEach(() => jest.useRealTimers())

function advanceSeconds(n: number) {
  for (let i = 0; i < n; i++) {
    act(() => { jest.advanceTimersByTime(1000) })
  }
}

describe('Timer', () => {
  it('affiche la durée initiale', () => {
    render(<Timer duration={15} onExpire={jest.fn()} running={true} />)
    expect(screen.getByText('15s')).toBeInTheDocument()
  })

  it('décrémente chaque seconde', () => {
    render(<Timer duration={15} onExpire={jest.fn()} running={true} />)
    advanceSeconds(3)
    expect(screen.getByText('12s')).toBeInTheDocument()
  })

  it('appelle onExpire quand le temps est écoulé', () => {
    const onExpire = jest.fn()
    render(<Timer duration={3} onExpire={onExpire} running={true} />)
    advanceSeconds(3)
    expect(onExpire).toHaveBeenCalledTimes(1)
  })

  it('ne décrémente pas quand running=false', () => {
    render(<Timer duration={15} onExpire={jest.fn()} running={false} />)
    advanceSeconds(5)
    expect(screen.getByText('15s')).toBeInTheDocument()
  })

  it('a un attribut aria-label accessible', () => {
    render(<Timer duration={15} onExpire={jest.fn()} running={true} />)
    expect(screen.getByRole('timer')).toBeInTheDocument()
  })
})
