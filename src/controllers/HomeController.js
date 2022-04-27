import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rodrigo1',
      sobrenome: 'Baitola1',
      email: 'baitola@gmail.com',
      idade: '26',
      peso: '200',
      altura: '1.89',
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
