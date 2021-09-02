import React from 'react'
import Icone from './icone'
import qtd from './questao_de_tempo.jpg'
import DH from './DH.jpg'
import IlhaM from './IlhaM.jpg'
import M2I from './M2I.jpg'
import TOG from './TOG.jpg'
import Outros from './outros.jpg'

export default props =>
    <div className="tela">
        <Icone img={qtd} titulo="Questão de Tempo" sinopse = 'Aos 21 anos, Tim descobre um grande segredo — todos os homens de sua família conseguem viajar através do tempo, do qual pensa em tirar proveito. Viajando para Londres, apaixona-se por Mary, mas exagera nas viagens ao passado na tentativa de tornar perfeito o seu relacionamento.' class='borda_filme' url='https://www.youtube.com/embed/-0gX9g4Lxm8'></Icone>
        
        <Icone img={DH} titulo="A Casa dos Sonhos" sinopse = 'Will Atenton é um bem sucedido editor em Manhattan que deixa o emprego e se muda com a esposa Libby e suas duas filhas para a cidade de Nova Inglaterra. Só que logo eles descobrem que a casa onde vivem foi o local do assassinato de uma mãe e seus filhos, um crime que a cidade inteira acredita ter sido cometido pelo próprio marido. Will começa a investigar o caso e logo percebe que há algo de estranho na história. Sua única pista é Ann Patterson, uma misteriosa vizinha que conhecia a família vítima da tragédia.' class='borda_filme' url='https://www.youtube.com/embed/XgpGJn7WsEI'></Icone>
        
        <Icone img={IlhaM} titulo="Ilha do Medo" sinopse = '1954. Teddy Daniels investiga o desaparecimento de um paciente no Shutter Island Ashecliffe Hospital, em Boston. No local, ele descobre que os médicos realizam experiências radicais com os pacientes, envolvendo métodos ilegais e anti-éticos. Teddy tenta buscar mais informações, mas enfrenta a resistência dos médicos em lhe fornecer os arquivos que possam permitir que o caso seja aberto. Quando um furacão deixa a ilha sem comunicação, diversos prisioneiros conseguem escapar e tornam a situação ainda mais perigosa.' class='borda_filme' url='https://www.youtube.com/embed/GT5fluzzupM'></Icone>
        
        <Icone img={M2I} titulo="O Mistério das Duas Irmãs" sinopse = 'Após perder a mãe em um incêndio misterioso, Anna tenta cometer suicídio e acaba sendo internada em uma clínica psiquiátrica. Meses depois, a jovem volta para casa e encontra Rachel Summers, antiga enfermeira da sua mãe e atual madrasta. Atormentada, Anna começa a ter visões que podem revelar detalhes importantes sobre o incêndio.' class='borda_filme' url='https://www.youtube.com/embed/8P_Ci3mq7_g'></Icone>
        
        <Icone img={TOG} titulo="The Old Guard" sinopse = 'Em The Old Guard, Andy e seus companheiros formam um grupo de soldados que possuem a inestimável virtude da vida eterna. Eles vivem através dos anos oferecendo seus serviços como mercenários para aqueles que podem pagar, se passando como seres humanos comuns dentre os demais. No entanto, tudo muda com a descoberta de que existe uma outra imortal que atua como fuzileira naval.' class='borda_filme' url='https://www.youtube.com/embed/x4_EAlRLY_E'></Icone>
        
        <Icone img={Outros} titulo="Os Outros" sinopse = 'Durante a 2ª Guerra Mundial, Grace (Nicole Kidman) decide por se mudar, juntamente com seus dois filhos, para uma mansão isolada na ilha de Jersey, a fim de esperar que seu marido retorne da guerra. Como seus filhos possuem uma estranha doença que os impedem de receber diretamente a luz do sol, a casa onde vivem está sempre em total escuridão. Eles vivem sozinhos seguindo rigorosamente certas regras, como nunca abrir uma porta sem fechar a anterior, mas quando eles contratam empregados para a casa eles terminam quebrando estas regras, fazendo com que imprevisíveis consequências ocorram.' class='borda_filme' url='https://www.youtube.com/embed/iZmV5gOwHRI'></Icone>
    </div>
