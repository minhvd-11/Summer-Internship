(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function getDataPromise(url) {
    return new Promise(function (resolve, reject) {
      $.get(url, function (data, status) {
        if (status === 'success') {
          resolve(data);
        }
        reject(new Error('Error while getting ' + url));
      });
    });
  }

  console.log('hi');

  const USER_API = 'https://jsonplaceholder.typicode.com/users';
  const POST_API = 'https://jsonplaceholder.typicode.com/posts?userId=';
  const COMMENT_API = 'https://jsonplaceholder.typicode.com/comments?postId='

  function DemoController($scope) {

    // Callback-style
    /*
    $.get(USER_API, function (users) {
      console.log(users);
      users.forEach(function (user) {
        $.get(POST_API + user.id, function (posts) {
          user.posts = posts;
          posts.forEach(function (post) {
            $.get(COMMENT_API + post.id, function (comments) {
              post.comments = comments;
              $scope.$apply(function () {
                $scope.users = users;
              });
            });
          });
        });
      });
    });
    */

    // Promise-style
    /*
    let allUsers;
    getDataPromise(USER_API)
      .then(function (users) {
        allUsers = users;
        return Promise.all(users.map(function (user) {
          return getDataPromise(POST_API + user.id)
            .then(function (posts) {
              user.posts = posts;
              return Promise.all(posts.map(function (post) {
                return getDataPromise(COMMENT_API + post.id)
                  .then(function (comments) {
                    post.comments = comments;
                  });
              }));
            });
        }));
      })
      .then(function () {
        $scope.$apply(function () {
          $scope.users = allUsers;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      */

    // Async/await-style
    (async () => {
      try {
        const users = await getDataPromise(USER_API);
        for (const user of users) {
          user.posts = await getDataPromise(POST_API + user.id);
          for (const post of user.posts) {
            post.comments = await getDataPromise(COMMENT_API + post.id);
          }
        }
        $scope.$apply(function () {
          $scope.users = users;
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }
})();
