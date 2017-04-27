angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/two')
        $stateProvider
            .state('one',{
                url:'/one',
                template:'<h1>首页</h1>'
            })
            .state('two',{
                url:'/two',
                templateUrl:'one.html'
            })
            .state('three',{
                url:'/three',
                template:'<h1>党组织页</h1>'
            })
            .state('four',{
                url:'/four',
                template:'<h1>居民自治页</h1>'
            })
    })
angular.module('app')
    .directive('inputFile',function(){
        return {
            template:'<div class="input-file">' +
            '<label for="{{inputId}}"></label>' +
            '<input type="file" id="{{inputId}}"> ' +
            '</div>',
            restrict:'E',
            controller:function ($scope) {
                $scope.inputId = 'inputFile'+$scope.$id
            },
            scope:{},
            link:function(scope,ele,attr){
                var inputFile=ele.find('div');
                var input=$(inputFile).find('input');
                input.on('change',function(){
                    var reader=new FileReader();
                    reader.readAsDataURL(this.files[0])
                    reader.onload = function () {
                        console.log($(inputFile).find('label'));
                        $(inputFile).find('label')[0].style.background = 'url('+this.result+') no-repeat center center'

                    }
                })
            }
        }
    });
angular.module('app').run(function($rootScope){
    $rootScope.fn=function(){
            //console.log(1)
            var txt=$('#tt').val()
            console.log(txt)
            var date=new Date();
            if(txt){
                $('.box4').append('<p>'+ txt+'<span>'+ date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'
                +date.getMinutes()+'</span></p>')
                $('#tt').val('')
            }

        }
    });
$('.kk li').on('click',function(){
    $(this).children('a').attr('class','down-kk').end().siblings().children('a').attr('class','up-kk')
})
