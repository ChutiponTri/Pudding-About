/*
 * Mobile swipe rows: below the breakpoint, cards sit in a horizontal snap-scroll row that
 * bleeds to the edge of the page (or of the parent card). At the breakpoint and up, every
 * swipe-only style is reset so the original grid layout is untouched.
 */
type Breakpoint = 'sm' | 'md' | 'lg'

const SWIPE_BASE =
  'flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pt-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'

const SWIPE_BLEED = {
  page: { base: '-mx-4 px-4 scroll-px-4', sm: 'sm:-mx-6 sm:px-6 sm:scroll-px-6' },
  card: { base: '-mx-6 px-6 scroll-px-6', sm: 'sm:-mx-8 sm:px-8 sm:scroll-px-8' },
}

const SWIPE_RESET: Record<Breakpoint, string> = {
  sm: 'sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:py-0',
  md: 'md:mx-0 md:grid md:overflow-visible md:px-0 md:py-0',
  lg: 'lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:py-0',
}

const SWIPE_ITEM_RESET: Record<Breakpoint, string> = {
  sm: 'sm:w-auto sm:max-w-none',
  md: 'md:w-auto md:max-w-none',
  lg: 'lg:w-auto lg:max-w-none',
}

export function swipeRow(bp: Breakpoint, bleed: keyof typeof SWIPE_BLEED = 'page') {
  const edge = SWIPE_BLEED[bleed]
  return `${SWIPE_BASE} ${edge.base} ${bp === 'sm' ? '' : edge.sm} ${SWIPE_RESET[bp]}`
}

export function swipeItem(bp: Breakpoint) {
  return `w-[85%] max-w-sm shrink-0 snap-start ${SWIPE_ITEM_RESET[bp]}`
}
