<div id="main">
    <button @click="clickHajime()">{{btnDisplay.hajime}}</button>
    <button @click="clickWhiteOsaekomi()" :disabled="btnState.whiteOsaekomi==-1">{{btnDisplay.whiteOsaekomi}}</button>
    <button @click="clickWhiteSonomama()" :disabled="btnState.whiteSonomama==-1">{{btnDisplay.whiteSonomama}}</button>
    <button @click="clickBlueOsaekomi()" :disabled="btnState.blueOsaekomi==-1">{{btnDisplay.blueOsaekomi}}</button>
    <button @click="clickBlueSonomama()" :disabled="btnState.blueSonomama==-1">{{btnDisplay.blueSonomama}}</button>
</div>