class Retangulo {

    constructor(x,y,altura,largura,cor){
        this.x=x;
        this.y=y;
        this.altura=altura;
        this.largura=largura;
        this.cor=cor;
        this.vx=0;
        this.vy=0;
    }
    
    update() {
        this.x+=this.vx;
        this.y+=this.vy;
    }

    draw(ctx){
        ctx.fillStyle=this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
    }
}
