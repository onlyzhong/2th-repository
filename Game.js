(function () {
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    window.Game = Game;
    //初始化
    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.food, this.map);
        this.bindKey();

    }
    Game.prototype.runSnake = function (food, map) {
        var timeId = setInterval(function () {
            this.snake.move(food, map);
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                clearInterval(timeId);
                alert("游戏结束");
                return;
            }

            this.snake.init(map);
        }.bind(that), 150)
    }

    Game.prototype.bindKey = function () {
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 37: if (this.snake.direction != "right") {
                    this.snake.direction = "left";
                }
                    break;
                case 38:
                    if (this.snake.direction != "bottom") {
                        this.snake.direction = "top";
                    }
                    break;
                case 39:
                    if (this.snake.direction != "left") {
                        this.snake.direction = "right";
                    }
                    break;

                case 40: if (this.snake.direction != "top") {
                    this.snake.direction = "bottom";
                }
                    break;
            }
        }.bind(that), false)
    }

})();


