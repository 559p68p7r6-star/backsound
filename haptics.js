window.testVibration = async function () {
    try {
        if (window.Capacitor &&
            window.Capacitor.Plugins &&
            window.Capacitor.Plugins.Haptics) {

            await window.Capacitor.Plugins.Haptics.impact({
                style: "HEAVY"
            });

        } else if (navigator.vibrate) {

            navigator.vibrate(500);

        }
    } catch (error) {
        console.error("진동 오류:", error);
    }
};