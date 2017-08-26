import Expo from 'expo';

export const fetchFBUser = () => {
  console.log("here");
  return Expo.Facebook.logInWithReadPermissionsAsync('169279863643642', {
    permissions: ['public_profile'],
  }).then( ({ type, token }) => {
    if (type === 'success') {
      return fetch(`https://graph.facebook.com/me?access_token=${token}`);
    }
  }).then(
    resp => resp.json()
  );
};
