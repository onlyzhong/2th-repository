        (function () {
            var elements = [];
            function Snake(width, height, direction) {
                this.width = width || 20;
                this.height = height || 20;
                this.direction = direction || "right";
                this.body = [{
                    x: 3,
                    y: 2,
                    color: "red"
                }, {
                    x: 2,
                    y: 2,
                    color: "yellow"
                }, {
                    x: 1,
                    y: 2,
                    color: "yellow"
                }];
            }
            window.Snake = Snake;
            Snake.prototype.init = function (map) {
                remove();
                for (var i = 0; i < this.body.length; i++) {
                    var obj = this.body[i];
                    var div = document.createElement("div");
                    map.appendChild(div);
                    div.style.position = "absolute";
                    div.style.height = this.height + "px";
                    div.style.width = this.width + "px";
                    div.style.left = obj.x * this.width + "px";
                    div.style.top = obj.y * this.height + "px";
                    div.style.backgroundColor = obj.color;
                    div.style.backgroundImage = "url('./bird.png')";
                    div.style.backgroundSize = "100%";
                    elements.push(div);
                }
                function remove() {
                    var i = elements.length - 1;
                    for (; i >= 0; i--) {
                        var ele = elements[i];
                        ele.parentNode.removeChild(ele);
                        elements.splice(i, 1);
                    }
                }
            }

            Snake.prototype.move = function (food, map) {
                var i = this.body.length - 1;
                for (; i > 0; i--) {
                    this.body[i].x = this.body[i - 1].x;
                    this.body[i].y = this.body[i - 1].y;
                }
                switch (this.direction) {
                    case "right": this.body[0].x += 1; break;
                    case "left": this.body[0].x -= 1; break;
                    case "top": this.body[0].y -= 1; break;
                    case "bottom": this.body[0].y += 1; break;
                }
                var headX = this.body[0].x * this.width;
                var headY = this.body[0].y * this.height;
                if (headX == food.x && headY == food.y) {
                    var last = this.body[this.body.length - 1];
                    this.body.push({
                        x: last.x,
                        y: last.y,
                        color: last.color
                    });
                    food.init(map);
                }

            }

        })();

