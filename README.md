# obscountdown
countdown tests for obs

How to Use the Page
Access the Page:
Open your hosted URL:
https://hjmeneses.github.io/obscountdown/

Countdown Timer:
The page displays a countdown timer along with animated HUD elements. The timer starts from a default value (05:00) if no parameters are provided.

URL Parameters:

time: Set the starting time for the countdown in the format mm:ss.
Example: https://hjmeneses.github.io/obscountdown/?time=03:30 starts the countdown at 3 minutes and 30 seconds.
scene: Specify the OBS scene name to switch to when the countdown reaches 0. This functionality works only when the page is used as a browser source in OBS (i.e., when window.obsstudio.setCurrentScene is available).
Example: https://hjmeneses.github.io/obscountdown/?time=03:30&scene=GameScene will switch to the scene named "GameScene" 500 ms after the timer reaches 0.
Additional Effects:
The page also features a scanning line effect that traverses the screen every 4 seconds, accompanied by a beep sound synchronized with the scan line crossing the center of the page.

How to Modify the Attributes
Countdown Value and Scene Switching:
Adjust the timer start and scene change behavior using the URL parameters described above.

Visual Appearance and Animations:
The appearance of the HUD (including the animated rings, scan line, and other effects) is defined in the CSS. You can modify:

Animation Speeds: Change the durations set in the CSS keyframes (e.g., the rotate, float, and scan animations).
Sizes and Positions: Adjust the percentages for each ring or effect to fine-tune their sizes and positions relative to the central timer.
Colors and Effects: Modify color codes, shadows, and background gradients to fit your desired aesthetic.
Beep Sound:
The beep is triggered by the Web Audio API and is currently set to play every time the scan line reaches the center (every 4 seconds, with an initial delay of 2 seconds). You can adjust the timing in the JavaScript portion that handles the beep repetition.

Customization Example
If you want to start the countdown at 2 minutes and switch to a scene named "LiveScene" after the timer reaches 0, you would access:

lua
Copiar
https://hjmeneses.github.io/obscountdown/?time=02:00&scene=LiveScene
For further customization, you can edit the source files (HTML, CSS, and JavaScript) directly on your GitHub repository and push the changes to update your GitHub Pages site.

This setup provides a flexible and dynamic countdown display tailored for OBS integration while allowing you to easily modify its appearance and behavior via URL parameters or by editing the code directly.
