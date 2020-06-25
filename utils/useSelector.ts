import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

import { RootState } from '../store/rootReducer';

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;
