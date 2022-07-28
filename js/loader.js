export class Loader{

    // URL: string;
    // POSTLOAD_FUNCTION: (data: string) => void;

    constructor(url, func){
        this.POSTLOAD_FUNCTION = func;
        this.URL = url;

        this.run();
    }

    async run(){

        const response = await fetch(this.URL).catch(e => {console.log(`${e}`)});

        this.POSTLOAD_FUNCTION(response);

        return;
        
    }

}