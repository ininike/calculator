const data =[
        {
        col1:"7",
        col2:"8",
        col3:"9",
        col4:"X",
        },
        {
        col1:"4",
        col2:"5",
        col3:"6",
        col4:"-",
        },
        {
        col1:"1",
        col2:"2",
        col3:"3",
        col4:"+",
        },
        {
        col1:"0",
        col2:".",
        col3:"%",
        col4:"/",
        }
    ]

data.forEach(col => {
    document.getElementById('buttonb').innerHTML +=
    `<div class="row">
        <div class="input button"><p>${col.col1}</p></div>
        <div class="input button"><P>${col.col2}</P></div>
        <div class="input button"><P>${col.col3}</P></div>
        <div class="input button"><P>${col.col4}</P></div>
    </div>`
});
