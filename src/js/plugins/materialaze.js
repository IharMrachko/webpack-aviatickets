import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem);
}

const auotocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(auotocomplete);

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.init(elem);
}

const datepicker = document.querySelectorAll('.datepicker');
 M.Datepicker.init(datepicker, {
     showClearBtn: true,
     format: 'yyyy-mm'
 });

export function getDatepickerInstance(elem) {
    return M.Datepicker.init(elem, {
        showClearBtn: true,
        format: 'yyyy-mm'
    });
}
