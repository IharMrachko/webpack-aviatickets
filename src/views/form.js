import {getAutocompleteInstance, getDatepickerInstance} from '../js/plugins/materialaze';

class FormUI {
    constructor(autocompleteInstance, datepickerInstance){
        this._form = document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-destination');
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');
        this.origiAutocomplete = autocompleteInstance(this.origin);
        this.destinationAutocomplete = autocompleteInstance(this.destination);
        this.departDatepicker = datepickerInstance(this.depart);
        this.returnDatepicker = datepickerInstance(this.return);
    }
    get form(){
        return this._form;
    }
    get originValue(){
        return this.origin.value;
    }
    get destinationValue(){
        return this.destination.value;
    }
    get departDateValue(){
        return this.departDatepicker.toString();
    }
    get returnDateValue(){
        return this.returnDatepicker.toString();
    }

    setAutoCompleteData(data){
        this.origiAutocomplete.updateData(data);
        this.destinationAutocomplete.updateData(data);
    }

}
const formUI = new FormUI(getAutocompleteInstance, getDatepickerInstance);

export default formUI;
