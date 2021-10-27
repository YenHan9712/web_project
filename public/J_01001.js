const guestTable = document.querySelector('#gue-table');
const form = document.querySelector("#add-guest-form");
// create element & render 
function renderStudents(doc){
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().Date;
    td2.textContent = doc.data().Name;
    td3.textContent = doc.data().Total;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    // delete 
    let cross = document.createElement('div');
    cross.textContent = 'X';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('Guest').doc(id).delete();
    });
    //

    guestTable.appendChild(tr);
}

// getting data 
db.collection('Guest').get().then(data => {
    data.docs.forEach(doc => {
        renderStudents(doc);
    });
});

// add data
   form.addEventListener('submit', (e) => {
       e.preventDefault();
       db.collection('Guest').add({
           Date: form.Date.value,
           Name: form.Name.value,
           Total: form.Total.value
       });
       form.Date.value = '';
       form.Name.value = '';
       form.Total.value = '';
   });

