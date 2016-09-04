angular.module('cards', []).directive('card', cardDirective);

function cardDirective() {
    return {
        restrict: 'E',
        scope: { suit: '@', value: '@' },
        bindToController: true,
        controller: cardController,
        controllerAs: 'card',
        template: '\n      <corner ng-repeat="corner in card.corners" ng-class="corner">\n        <h1>{{card.display}}</h1>\n        <pip class="{{card.suit.toLowerCase()}}"></p>\n      </corner>\n      <pips>\n        <pip ng-repeat="pip in card.pips" ng-style="{ left: pip.left, top: pip.top }" class="{{card.suit.toLowerCase()}}" ng-class="{ flip: pip.flip }"></pip>\n        <h1 ng-if="!card.pips.length">{{card.display}}</h1>\n      </pips>\n    '
    };
}

function cardController($element) {
    var card = this;
    this.corners = ['top left', 'bottom right'];
    this.pips = getPips();
    this.display = getDisplayValue();

    return init();

    function init() {
        addClasses(card.suit);
    }

    function addClasses(suit) {
        $element.addClass(suit === 'Hearts' || suit === 'Diamonds' ? 'red' : 'black');
    }

    function getDisplayValue() {
        switch (card.value) {
            case '10':
                return '10';
            default:
                return card.value.charAt(0);
        }
    }

    function getPips() {
        switch (card.value) {
            case 'Ace':
                return [{ left: '50%', top: '50%' }];
            case '2':
                return [{ left: '50%', top: '20%' }, { left: '50%', top: '80%', flip: true }];
            case '3':
                return [{ left: '50%', top: '50%' }, { left: '50%', top: '20%' }, { left: '50%', top: '80%', flip: true }];
            case '4':
                return [{ left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }];
            case '5':
                return [{ left: '50%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }];
            case '6':
                return [{ left: '33%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '50%' }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }];
            case '7':
                return [{ left: '33%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '50%' }, { left: '67%', top: '20%' }, { left: '67%', top: '80%', flip: true }, { left: '50%', top: '35%' }];
            case '8':
                return [{ left: '33%', top: '20%' }, { left: '33%', top: '40%' }, { left: '33%', top: '60%', flip: true }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '40%' }, { left: '67%', top: '60%', flip: true }, { left: '67%', top: '80%', flip: true }];
            case '9':
                return [{ left: '50%', top: '50%' }, { left: '33%', top: '20%' }, { left: '33%', top: '40%' }, { left: '33%', top: '60%', flip: true }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '40%' }, { left: '67%', top: '60%', flip: true }, { left: '67%', top: '80%', flip: true }];
            case '10':
                return [{ left: '50%', top: '35%' }, { left: '50%', top: '65%', flip: true }, { left: '33%', top: '20%' }, { left: '33%', top: '40%' }, { left: '33%', top: '60%', flip: true }, { left: '33%', top: '80%', flip: true }, { left: '67%', top: '20%' }, { left: '67%', top: '40%' }, { left: '67%', top: '60%', flip: true }, { left: '67%', top: '80%', flip: true }];
            default:
                return [];
        }
    }
}