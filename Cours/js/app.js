
 app = new Vue ({
    el: "#app",
    data:
    {
        message : 'eezzza',
        link:'http://grafikart.fr',
        cls : 'success',
        persons: ['JJJ', 'lll'],
         
     },


    methods:
    {
        close: function ()
        {
            
            this.cls = false
        },
       
    }
})
