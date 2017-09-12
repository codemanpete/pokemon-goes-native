import Expo from 'expo';

export const fetchFBUser = () => {
  return Expo.Facebook.logInWithReadPermissionsAsync('169279863643642', {
    permissions: ['public_profile'],
  }).then( ({ type, token }) => {
    if (type === 'success') {
      return fetch(`https://graph.facebook.com/me?access_token=${token}`);
    } else if (type === 'cancel') {
      throw "login canceled";
    }
  }).then(
    resp => resp.json()
  );
};

export const fetchUserId = ({ name, id }) => {
  return fetch(
    `http://localhost:3001/api/users?facebook_id=${id}&&name=${name}`
  ).then(
    resp => resp.json()
  );
};
