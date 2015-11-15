VoiceManager = {};

VoiceManager.commands  = {
    'wake up': function () {
        console.log('COMMAND: Wake up');
        States.wakeUp();
    },
    'sleep': function () {
        console.log('COMMAND: Sleep');
        States.goSleep();
    },
    'show weather': function () {
        console.log('COMMAND: Show weather');
    },
    'qui est la plus belle': function () {
        console.log('COMMAND: Qui est la plus belle');
    }
}

// Add our commands to annyang
annyang.addCommands(VoiceManager.commands);

// Start listening.
annyang.start();