export class Globals {
    //hostname: string = window.location.hostname;
    hostname: string = "192.168.0.83";
    port: string = window.location.port;
    weburl: string = 'http://' + this.hostname  + ':8080/SHMA/SHMA/';
    // weburl: string = 'http://' + this.hostname  + ':'+ this.port + '/OrderPro/OrderPro/';
  
    fn_parseFloatIgnoreCommas(varString:String) :any {
      let stringWithoutComma = varString.replace(',', '');
      return parseFloat(stringWithoutComma);
    }
}
