(function() {
'use strict';

    angular
        .module('app.crop')
        .controller('CropController', CropController);

    CropController.inject = ['$log', '$timeout', 'Upload'];
    function CropController($log, $timeout, Upload) {
        var vm = this;
        vm.progress = 0;
        vm.result = {};
        vm.upload = upload;

        activate();

        ////////////////

        function activate() {
        }

        function upload(dataUrl, name) {
            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    file: Upload.dataUrltoBlob(dataUrl, name)
                },
            }).then(function (response) {
                $timeout(function () {
                    vm.result = response.data;
                });
            }, function (response) {
                if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                vm.progress = parseInt(100.0 * evt.loaded / evt.total);
            });
        }
    }
})();