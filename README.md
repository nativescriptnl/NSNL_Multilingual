##Don't use this project just yet. Work in progress ...

```
git clone --depth 1 https://github.com/nativescriptnl/NSNL_Multilingual NSNL_Multilingual
cd NSNL_Multilingual
rm -rf .git
git init
npm install
tns platform add ios
tns livesync ios --watch
 
-> app starts and loads homepage
 
-> click on button Example
 
-> result:
Label is not displayed
<Label class="header" text="{{ 'EXAMPLE.TITLE' | translate }}"></Label>
   
-> console error:
CONSOLE ERROR file:///app/tns_modules/nativescript-angular/zone.js/dist/zone-nativescript.js:344:22: Error: Error in :0:0 caused by: null is not an object (evaluating '_angular_platformBrowser.__platform_browser_private__.getDOM().getCookie')
 
-> Click on button "Nederlands"
 
-> console error:
file:///app/tns_modules/@angular/core/bundles/core.umd.js:9464:77: JS ERROR Error: Error in components/example/example.component.html:12:12 caused by: null is not an object (evaluating '_angular_platformBrowser.__platform_browser_private__.getDOM().getCookie')
Jan  2 08:23:47 HAL com.apple.CoreSimulator.SimDevice.1D0EF76C-80FC-40AB-9DD9-C31588C5A38E.launchd_sim[37580] (UIKitApplication:org.nativescript.NSNLmultilingual[0xa61f][37664]): Service exited due to Segmentation fault: 11
```