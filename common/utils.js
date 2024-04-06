import { useEffect } from 'react';

export function asyncEffect(cb, deps = []) {
  useEffect(() => {
    cb();
  }, deps);
}
