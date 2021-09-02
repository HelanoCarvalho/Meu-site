import React from 'react'
import Icone from './icone'
import tlou from './tlou2.jpg'
import gow from './GOW.jpg'
import re4 from './RE4.jpg'
import over from './overwatch.jpg'
import out from './outlast.jpg'
import rdr from './RDR2.jpg'


export default props =>

   
        <div className="tela">

            <Icone img={gow} titulo="God of War" sinopse = 'Do Santa Monica Studio e do diretor criativo Cory Barlog, chega um novo começo para um dos ícones mais conhecidos dos jogos. Vivendo como um homem fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e uma segunda chance de ser pai.' class='borda_jogo' url="https://www.youtube.com/embed/FyIwEFXOcaE"></Icone>

            <Icone img={tlou} titulo="The Last of Us Part II" sinopse = 'Cinco anos depois de sua perigosa jornada através dos EUA pós-pandêmico, Ellie e Joel se estabeleceram em Jackson, Wyoming. Viver em uma comunidade de sobreviventes, permitiu que eles tivessem paz e estabilidade, apesar da ameaça constante de infectados e sobreviventes desesperados. Quando um evento violento acaba com a paz, Ellie embarca em uma jornada para buscar justiça e encontrar um encerramento. Enquanto ela caça todos os responsáveis, ela é confrontada pelas repercussões físicas e emocionais de suas ações.' class='borda_jogo' url="https://www.youtube.com/embed/W2Wnvvj33Wo"></Icone>

            <Icone img={re4} titulo="Resident Evil 4" sinopse = 'Leon S. Kennedy era apenas um policial novato quando presenciou o horrível evento que aconteceu em 1998, na cidade de Raccoon City. Muito tempo se passou e Leon finalmente conseguiu deixar para trás as imagens daquele dia. Seis anos depois, ele é um agente do serviço secreto norte-americano, responsável pela proteção da família presidencial. Ashley Graham, a filha do presidente, é seqüestrada na saída de sua universidade por uma organização desconhecida. A única pista é que ela teria sido vista em uma remota ilha do continente europeu. Agora, cabe a Leon resgatá-la.' class='borda_jogo' url="https://www.youtube.com/embed/1KTghW30ZuY"></Icone> 

            <Icone img={over} titulo="Overwatch" sinopse = 'A força-tarefa internacional chamada Overwatch foi formada pelas Nações Unidas para proteger a humanidade contra a crise global Omnica. Nos anos que se seguiram, a Overwatch manteve-se como uma força de pacificação, mas após múltiplos incidentes de atividade criminosa, acusações de corrupção e de sedição as pessoas voltaram-se contra aqueles que as haviam salvado. A força-tarefa foi finalmente dissolvida quando a sede da Overwatch foi destruída, aparentemente, devido a um acidente. Oficialmente, o ataque tirou a vida do líder da Overwatch, Jack Morrison, e do segundo-em-comando, Gabriel Reyes.' class='borda_jogo' url="https://www.youtube.com/embed/GubjHz5--6M"></Icone> 

            <Icone img={out} titulo="Outlast" sinopse = 'Miles Upshur, é um jornalista autônomo, que um dia recebe um email de fonte anônima, conhecida apenas como "The Whistleblower" (O Denunciante), sobre um hospital psiquiátrico que pertence e é operado pela corporação Murkoff. Ao chegar, o local parece completamente abandonado e deserto, porém carros da SWAT estão na entrada do manicômio e Upshur com seu instinto curioso de jornalista vai à investigação.' class='borda_jogo' url="https://www.youtube.com/embed/uKA-IA4locM"></Icone> 

            <Icone img={rdr} titulo="Red Dead Redemption 2" sinopse = 'Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensa em seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que criou.' class='borda_jogo' url="https://www.youtube.com/embed/zBrkdzAAlkA"></Icone> 
        </div>
