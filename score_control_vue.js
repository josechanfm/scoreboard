
const BTN_UP=0;
const BTN_DOWN=1;
const BTN_DISABLE=-1;

var app=new Vue({
	el:"#main",
	data:{
        masterTimer:4,
        message:'Hello World!',
        btnDisplay:{
            'hajime':'',
            'whiteOsaekomi':'',
            'blueOsaekomi':'',
            'whiteSonomama':'',
            'blueSonomama':'',
        },
        btnLabel:{
            'hajime':[,'Hajime','Mate'],
            'whiteOsaekomi':['W/Osaekomi','W/Toketa'],
            'blueOsaekomi':['B/Osaekomi','B/Toketa'],
            'whiteSonomama':['W/Sonomama','W/Yoshi'],
            'blueSonomama':['B/Sonomama','B/Yoshi'],
        },
        btnState:{
            'hajime':null,
            'whiteOsaekomi':null,
            'blueOsaekomi':null,
            'whiteSonomama':null,
            'blueSonomama':null,
        }

    },
	created(){
	},
	mounted: function(){
        this.btnState.hajime=BTN_UP;
        this.btnState.osaekomi=BTN_DOWN;
        this.btnDisplay.whiteOsaekomi=this.btnLabel.whiteOsaekomi[BTN_UP];
        this.btnDisplay.blueOsaekomi=this.btnLabel.blueOsaekomi[BTN_UP];

        this.btnDisplay.whiteSonomama=this.btnLabel.whiteSonomama[BTN_UP];
        this.btnState.whiteSonomama=BTN_DISABLE;
        this.btnDisplay.blueSonomama=this.btnLabel.blueSonomama[BTN_UP];
        this.btnState.blueSonomama=BTN_DISABLE;
        
	},
	methods:{
        masterTimerStart(){
            setTimeout(()=>{
                this.masterTimer-=1;
                this.masterTimerStart();
            },1000)
        },
        clickHajime() {
            if(this.btnState.hajime==BTN_UP){
                this.btnState.hajime=BTN_DOWN;
            }else{
                this.btnState.hajime=BTN_UP;
                this.btnState.whiteOsaekomi=BTN_UP;
                this.btnState.blueOsaekomi=BTN_UP;
            }
        },
        clickWhiteOsaekomi(){
            if(this.btnState.whiteOsaekomi!=BTN_DISABLE){
                this.btnState.whiteOsaekomi=!this.btnState.whiteOsaekomi;
                if(this.btnState.whiteOsaekomi==BTN_UP){
                    this.btnState.whiteSonomama=BTN_DISABLE;
                }else{
                    this.btnState.whiteSonomama=BTN_UP;
                    this.btnState.blueOsaekomi=BTN_UP;
                    this.btnState.blueSonomama=BTN_DISABLE;
                }
            }
        },
        clickWhiteSonomama(){
            if(this.btnState.whiteSonomama!=BTN_DISABLE){
                this.btnState.whiteSonomama=!this.btnState.whiteSonomama;
            }
        },
        clickBlueOsaekomi(){
            if(this.btnState.blueOsaekomi!=BTN_DISABLE){
                this.btnState.blueOsaekomi=!this.btnState.blueOsaekomi;
                if(this.btnState.blueOsaekomi==BTN_UP){
                    this.btnState.blueSonomama=BTN_DISABLE;
                }else{
                    this.btnState.blueSonomama=BTN_UP;
                    this.btnState.whiteOsaekomi=BTN_UP;
                    this.btnState.whiteSonomama=BTN_DISABLE;
                }
            }
        },
        clickBlueSonomama(){
            if(this.btnState.blueSonomama!=BTN_DISABLE){
                this.btnState.blueSonomama=!this.btnState.blueSonomama;
            }
        },
	},
	watch:{
        'btnState.hajime': function(newState) {
            if(newState!=BTN_DISABLE){
                this.btnDisplay.hajime=this.btnLabel.hajime[1];
                // this.btnState.osaekomi=!newState;
            }
        },
        'btnState.whiteOsaekomi':function(newState){
            if(newState!=BTN_DISABLE){
                this.btnDisplay.whiteOsaekomi=this.btnLabel.whiteOsaekomi[newState*1];
            }
        },
        'btnState.whiteSonomama':function(newState){
            if(newState!=BTN_DISABLE){
                this.btnDisplay.whiteSonomama=this.btnLabel.whiteSonomama[newState*1];
            }else{
                this.btnDisplay.whiteSonomama=this.btnLabel.whiteSonomama[BTN_UP];
            }
        },
        'btnState.blueOsaekomi':function(newState){
            if(newState!=BTN_DISABLE){
                this.btnDisplay.blueOsaekomi=this.btnLabel.blueOsaekomi[newState*1];
            }
        },
        'btnState.blueSonomama':function(newState){
            if(newState!=BTN_DISABLE){
                this.btnDisplay.blueSonomama=this.btnLabel.blueSonomama[newState*1];
            }else{
                this.btnDisplay.blueSonomama=this.btnLabel.blueSonomama[BTN_UP];
            }
        }
	},
	computed:{
	}
});



