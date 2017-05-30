export default ({
  dispatch
}) => next => action => {
  if (action.type !== 'API') {
    return next(action);
  }
  // Handle API code
}
