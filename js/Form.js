class Form {
    constructor() {
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
        this.title = createElement("h3")
    }
    hide() {
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.position.hide()
    }

    display() {
        this.title = createElement('h2')
        this.title.html("Car Racing Game");
        this.title.position(displayWidth / 2, 0);

        this.input = createInput("Name");
        this.button = createButton('Play');

        this.input.position(displayWidth / 2 - 40, displayHeight / 2);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.update(name)
            player.updateCount(playerCount);
            this.greeting = createElement('h3');
            greeting.html("Hello " + name)
            greeting.position(displayWidth / 2 - 70, displayHeight / 4)
        });

    }
}