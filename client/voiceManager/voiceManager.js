VoiceManager = {
    commands: {
        'wake up': function () {
            console.log('COMMAND: Wake up');
            States.wakeUp();
        },
        'sleep': function () {
            console.log('COMMAND: Sleep');
            States.goSleep();
        },
        '(show) dashboard': function () {
            console.log('COMMAND: Show dashboard');
            States.wakeUp();
            FlowRouter.go('dashboard');
        },
        '(show) weather': function () {
            console.log('COMMAND: Show weather');
            States.wakeUp();
            FlowRouter.go('weather');
        },
        '(show) news': function () {
            console.log('COMMAND: Show news');
            States.wakeUp();
            FlowRouter.go('news');
        },
        '(show) stocks': function () {
            console.log('COMMAND: Show stocks');
            States.wakeUp();
            FlowRouter.go('stocks');
        },
        'qui est la plus belle': function () {
            console.log('COMMAND: Qui est la plus belle');
        }
    },
    startListening: function () {
        annyang.start();
    },
    stopListening: function () {
        annyang.stop();
    }
};

// Add our commands to annyang
annyang.addCommands(VoiceManager.commands);

VoiceManager.startListening();

