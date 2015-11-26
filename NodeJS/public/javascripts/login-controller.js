function loginController($scope) {
    $scope.userMessage = "";
    $scope.passwordMessage = "";
    
    $scope.userValidation = function () {
        if ($scope.user == '') {
            $scope.userMessage = 'User should not be empty.'
        }
        else if (!/^\w+$/.test($scope.user)) {
            $scope.userMessage = 'User should contains only alphanumeric symbols.'
        }
        else {
            $scope.userMessage = '';
        }
    };

    $scope.passwordValidation = function () {
        if ($scope.password == '') {
            $scope.passwordMessage = 'Password should not be empty.'
        }
        else {
            $scope.passwordMessage = '';
        }
    };
}