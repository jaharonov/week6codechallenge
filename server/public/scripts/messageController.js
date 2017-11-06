myApp.controller('messageController', ['$http', function ($http) {
    console.log(' sourced');

    var vm = this;
    vm.message = [];


    vm.newMessage = function (newM) {
      

        console.log('message added');
        console.log(newM);
        $http.post('/messages', newM).then(function (response) {
            console.log('success');

        }).catch(function (error) {
            console.log('failure');
        })
    }

    
    vm.refreshMessages = function () {
        $http.get('/messages').then(function (response) {
            console.log('Success!');
            vm.message = response.data;
        }).catch(function (error) {
            console.log('Failure!', error);
        });
    }
    vm.refreshMessages();

}]);
