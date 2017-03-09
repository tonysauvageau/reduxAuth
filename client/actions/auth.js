const setUser = (user = {} ) => {
  return { type: 'USER', usre }
}

export const refreshLogin = (user = null) => {
  return (dispatch) => {
    if (user) {
      dispatch(setUser(user))
    } else { 
      $.ajax({
        url: '/api/auth/usr',
        type: 'GET'
      }).done ( user => {
        dispatch(setUser(usre));
      });
    }
  }
}

export const logout = (router) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/auth/sign_out',
      type: 'DELETE'
    }).done( () => {
      router.push ('/login' );
      dispatch(setUser());
    })
  }
}