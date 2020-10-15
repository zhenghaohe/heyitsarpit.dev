import { useCallback, useEffect, useRef, useState } from 'react';

const useStateWithPromise = <T>(initialState: T): [T, (val: T) => Promise<unknown>] => {
  const [state, setState] = useState(initialState);
  const resolverRef = useRef<null | ((value: unknown) => void)>(null);

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef?.current(state);
      resolverRef.current = null;
    }
    /**
     * Since a state update could be triggered with the exact same state again,
     * it's not enough to specify state as the only dependency of this useEffect.
     * That's why resolverRef.current is also a dependency, because it will guarantee,
     * that handleSetState was called in previous render
     */
  }, [resolverRef.current, state]);

  const handleSetState = useCallback(
    (stateAction: T) => {
      setState(stateAction);
      return new Promise((resolve) => {
        resolverRef.current = resolve;
      });
    },
    [setState]
  );

  return [state, handleSetState];
};

export default useStateWithPromise;
