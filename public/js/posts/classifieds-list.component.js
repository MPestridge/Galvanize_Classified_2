'use strict';

(() => {
  angular.module('app', [])
    .component('classifiedsList', {
      controller: controller,
      templateUrl: '/js/posts/classifieds-list.template.html'
    });

  controller.inject =['$http']

  function controller($http) {
    const vm = this
    vm.$onInit = onInit
    vm.posts = []
    vm.postSubmission = postSubmission

  vm.post = {}

  function postSubmission(post) {
    vm.posts.push(vm.post)
    vm.postForm.$setPristine()
    vm.postForm.$setUntouched()
    $http.post('/classifieds', vm.post).then(function (response) {
      console.log(vm.post);
      delete vm.post;
    })
  }

  function onInit() {
    $http.get('/classifieds').then(function (response) {
      vm.posts = response.data;
    })
  }

  }
})();

//TODO:
// Display all of the ads
// Post a new ad
// Edit existing ads
// Delete an ad
// Filter ads (titles and descriptions)
// Sort ads based on posting date and price
