'use strict';

(() => {
  angular.module('app', [])
    .component('classifiedsList', {
      controller: controller,
      templateUrl: '/js/posts/classifieds-list.template.html'
    });

    function controller() {
      const vm = this
      vm.posts = []
      vm.postSubmission = postSubmission


    vm.post = {}

    function postSubmission(post) {
      vm.posts.push(vm.post)
      vm.postForm.$setPristine()
      vm.postForm.$setUntouched()
      delete vm.post
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
