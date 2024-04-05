export class Usuario {
    private nome: string;
    private anoNascimento: number;
    private cpf: string;
    private genero: string;
  
    constructor(nome: string, anoNascimento: number, cpf: string, genero: string) {
      this.nome = nome;
      this.anoNascimento = anoNascimento;
      this.cpf = cpf;
      this.genero = genero;
    }
  
    equals(outroUsuario: Usuario): boolean {
      return (
        this.nome === outroUsuario.nome &&
        this.anoNascimento === outroUsuario.anoNascimento &&
        this.cpf === outroUsuario.cpf &&
        this.genero === outroUsuario.genero
      );
    }
  
    speakName(): string {
      return this.nome;
    }
  }
  