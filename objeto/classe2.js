class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao) {
        super(sobrenome)
        this.profissao = "Professor"
    }
}

class Filho extends Pai {
    constructor() {
        super("Marinho")
    }
}

const filho = new Filho
console.log(filho)