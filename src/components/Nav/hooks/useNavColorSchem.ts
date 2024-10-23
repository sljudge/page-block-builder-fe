import { useScrollDirection } from '@/hooks/useScrollDirection';

import type { NavColorScheme } from '../Nav';

export function useNavColorScheme(): NavColorScheme {
  const scrollDirection = useScrollDirection();
  return scrollDirection === 'down' ? 'primary' : 'invert';
}

export default useNavColorScheme;
