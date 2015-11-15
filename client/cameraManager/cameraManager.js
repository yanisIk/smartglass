/**
 * Created by Yanis on 2015-11-14.
 */
var camMotion = CamMotion.Engine();

camMotion.on("error", function (e) {
    console.log("error", e);
});


camMotion.on("streamInit", function(e) {
    console.log("webcam stream initialized", e);
});

camMotion.onMotion(CamMotion.Detectors.LeftMotion, function () {
    console.log("Left motion detected");
});
camMotion.onMotion(CamMotion.Detectors.RightMotion, function () {
    console.log("Right motion detected");
});
camMotion.onMotion(CamMotion.Detectors.DownMotion, function () {
    console.log("Down motion detected");
});
camMotion.onMotion(CamMotion.Detectors.UpMotion, function () {
    console.log("Up motion detected");
});