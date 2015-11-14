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
}

// Add our commands to annyang
annyang.addCommands(VoiceManager.commands);

// Start listening.
annyang.start();