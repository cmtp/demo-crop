(function() {
'use strict';

    angular
        .module('app.crop')
        .controller('CropController', CropController);

    CropController.inject = ['$log', '$scope', '$timeout', 'Upload'];
    function CropController($log, $scope, $timeout, Upload) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() {
            $scope.upload = function (dataUrl, name) {
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {
                        file: Upload.dataUrltoBlob(dataUrl, name)
                    },
                }).then(function (response) {
                    $timeout(function () {
                        $scope.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status 
                        + ': ' + response.data;
                }, function (evt) {
                    $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
                });
            }
        }
    }
})();