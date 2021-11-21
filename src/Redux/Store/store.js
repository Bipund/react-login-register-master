
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../Reducer/reducer';

export const Store = createStore(Reducer, compose(applyMiddleware(thunk)));