'use strict';

(() => {
  angular.module('app')
    .component('classifiedsList', {
      controller: controller,
      templateUrl: '/js/posts/classifieds-list.template.html'
    });

  controller.inject = ['$http']

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
      $http.post('/classifieds', vm.post).then((response) => {
        delete vm.post;
      })
    }

    function onInit() {
      $http.get('/classifieds').then((response) => {
        vm.posts = response.data;
      })
    }

  }
})();

//TODO:
// Change filter to search bar
// Edit existing ads
// Delete an ad
// Filter ads (titles and descriptions)
// Sort ads based on posting date and price
