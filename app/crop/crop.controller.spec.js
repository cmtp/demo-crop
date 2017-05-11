describe('Test CropController', function () {
    beforeEach(module('app'));
    beforeEach(module('app.crop'));

    var $controller;
    beforeEach(inject(function (_$controller_, $timeout, Upload) {
        $controller = _$controller_;
    }));

    describe('Defined $controller', function () {
        it('Should be created successfully', function ($controller, $timeout, Upload) {
            let vm = {};
            let controller = $controller('CropController', {
                '$timeout': $timeout,
                'Upload': Upload
            });
            expect(controller).toBeDefined();
        });
    });

    // describe('Progress is defined with 0', function () {
    //     it('Should be created successfully', function ($controller, $timeout, Upload) {
    //         let vm = {};
    //         let controller = $controller('CropController', {
    //             '$timeout': $timeout,
    //             'Upload': Upload
    //         });
    //         expect(controller.progress).toEqual(0);
    //     });
    // });
});