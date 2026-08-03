export const ZONES = [
  {
    key: 'z1',
    name: 'Abaixo do peso',
    min: 0,
    max: 18.5,
    color: 'var(--z1)',
    desc: 'Seu peso está abaixo da faixa considerada saudável para sua altura. Um profissional de saúde pode ajudar a avaliar as causas.'
  },
  {
    key: 'z2',
    name: 'Peso normal',
    min: 18.5,
    max: 25,
    color: 'var(--z2)',
    desc: 'Sua relação entre peso e altura está dentro da faixa considerada saudável pela Organização Mundial da Saúde.'
  },
  {
    key: 'z3',
    name: 'Sobrepeso',
    min: 25,
    max: 30,
    color: 'var(--z3)',
    desc: 'Seu IMC está levemente acima da faixa recomendada. Pequenos ajustes de hábito costumam fazer diferença.'
  },
  {
    key: 'z4',
    name: 'Obesidade grau I',
    min: 30,
    max: 35,
    color: 'var(--z4)',
    desc: 'Seu IMC indica obesidade grau I. Vale conversar com um profissional de saúde sobre um plano de acompanhamento.'
  },
  {
    key: 'z5',
    name: 'Obesidade grau II',
    min: 35,
    max: 40,
    color: 'var(--z5)',
    desc: 'Seu IMC indica obesidade grau II, faixa associada a maior risco de saúde. Acompanhamento médico é recomendado.'
  },
  {
    key: 'z6',
    name: 'Obesidade grau III',
    min: 40,
    max: 60,
    color: 'var(--z6)',
    desc: 'Seu IMC indica obesidade grau III (grave). Um acompanhamento médico próximo é fortemente recomendado.'
  }
];

export const SCALE_MIN = 14;
export const SCALE_MAX = 45;
