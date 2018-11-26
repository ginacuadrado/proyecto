//Modelo de mensajes para la notificación de errores

export class Message
{

    content:string;
    style:string;
    dismissed:boolean;

    constructor(content,style)
    {

        this.content= content;
        this.style=style || 'info'

    }


}

