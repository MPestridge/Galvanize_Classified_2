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
    vm.postDelete = postDelete

    function onInit() {
      $http.get('/classifieds').then((response) => {
        vm.posts = response.data;
        console.log(response.data);
      })
    }

    function postDelete(id) {
      $http.delete(`/classifieds/${id}`).then((response) => {
        $http.get('/classifieds').then((response) => {
          vm.posts = response.data;
        })
      })
    }

  }
})();

//TODO:
// Change filter to search bar
// Sort ads based on posting date and price
// Add post time
