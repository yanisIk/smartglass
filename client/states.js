/**
 * Created by Yanis on 2015-11-14.
 */
States = {
    sleep: new ReactiveVar(false),
    isAwake: function () {
        return !this.sleep.get();
    },
    wakeUp: function () {
        this.sleep.set(false);
    },
    goSleep: function () {
        this.sleep.set(true);
    }
}