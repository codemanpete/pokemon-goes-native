import Expo from 'expo';

const appId = '169279863643642';

export const fetchFBUser = () => {
  return Expo.Facebook.logInWithReadPermissionsAsync(appId, {
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

// The backend stores a separate id value for each user other than the
// facebook_id. This function retrieves that information given a certain
// facebook_id. In the case where a user is signed in for the first time,
// the backend will generate a new id for that user.
export const fetchUserId = ({ name, id }) => {
  return fetch(
    `http://localhost:3001/api/users?facebook_id=${id}&&name=${name}`
  ).then(
    resp => resp.json()
  );
};
