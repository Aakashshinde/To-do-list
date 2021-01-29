let ultasks = $('#ultasks');
let btnadd  = $('#btnadd');
let btnclear= $('#btnclear');
let inpnewtask = $('#inpnewtask');
let btnsort = $('#btnsort');
let btncleanup = $('#btncleanup');

function cleardone() {
    $('#ultasks .done').remove();
}

function sortitems(){
    let items = $('ultasks .done'); // dashed items will be stored here
    cleardone();                 //   it will clear all dashed items
    ultasks.append(items);         //  now dashed items will be added to bottom
}
function addItem(){
    let listitem = $('<li>',{
        'class' : 'list-group-item',
         text: inpnewtask.val();
    })
    ultasks.append(listitem)

    listitem.click((event)=> {
        $(event.target).toggleClass('done');
    })
}
inpnewtask.keypress((e) =>{
    if(e.which == 13) addItem();
})


btnadd.click(() => addItem())
btnsort.click(sortitems);


btnclear.click(() => {
    inpnewtask.val('');
})


btncleanup.click(cleardone);

