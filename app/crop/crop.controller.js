(function() {
'use strict';

    angular
        .module('app.crop')
        .controller('CropController', CropController);

    CropController.inject = ['$log'];
    function CropController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();