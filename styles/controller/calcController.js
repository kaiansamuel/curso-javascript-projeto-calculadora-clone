class CalcController {
    constructor(){

        this._displayCalc = "0"
        this.currentDate
    }

    get _displayCalc(){
        return this._displayCalc  

    }

    set displayCalc(valor){
        this._displayCalc = valor
    }

    get dataAtual(){
        return this._currentDate
    }

    set dataAtual(data){
        this._currentDate = data
    }

}
