const {createApp} = Vue;

createApp({
    data() {
        return {
            error:false,
            newItem: "",
            list: [ 
            {
                item: "Banana",
                comprato: false,
            },
            {
                item: "Arancia",
                comprato: true,
            },
            {
                item: "Pizza",
                comprato: false,
            },
            {
                item: "Caffe'",
                comprato: true,
            },
            {
                item: "Riso",
                comprato: false,
            },
            {
                item: "Tee",
                comprato: true,
            },
            {
                item: "Vino",
                comprato: false,
            }
            
            ]
        }
    },
    methods: {
        addItem(){
            if(this.newItem !== "" && this.newItem.length >= 4 ) {
            this.list.unshift({item: this.newItem, comprato:false});
            this.newItem = "";
            this.error= false;
            } else{
                this.error = true;
            }

            
        }
    }
}).mount("#app");