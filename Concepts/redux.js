Actions:are the payloads of information that send
		data from your application to your store.
		They are the only source of information 
		for the store. You send them to the store
		using store.disptach()

Actions describe the fact that something happend,
but dont't specify how the applications state 
changes in the response. This is the job of 
reducers

We defined the actions that represent the fact about 
"what happend", and the reducers that update the state 
according to those actions.

The Store is the object that brings them together.
following responsibilies:
-> Hold application state;
-> Allow access to store via getState();   
-> Allows state to be updated vi dispatch(action);
-> Registeers listenrs via subscribe(listenr);


Data Flow in Redux in 4 steps:

1) You call store.disptach(acion);
2) The Redux store calls the reducer function
	gave it.
3) The root reducer may combine the output of
	multiple reducer into a single state tree.
4) The Redux store gaves the complete state tree
	returned by the root reducer.
 