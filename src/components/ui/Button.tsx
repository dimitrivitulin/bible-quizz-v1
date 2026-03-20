import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30',
  secondary: 'bg-stone-700 hover:bg-stone-600 text-amber-100 border border-amber-700/30',
  ghost: 'bg-transparent hover:bg-amber-500/10 text-amber-200',
  danger: 'bg-red-700 hover:bg-red-800 text-white',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg font-semibold',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)

Button.displayName = 'Button'
export default Button
