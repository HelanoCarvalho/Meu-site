import React from 'react'
import Icone from './icone'
import grimm from './grimm.jpg'
import GOT from './GOT.jpg'
import TWD from './TWD.jpg'
import TBBT from './TBBT.jpg'
import YOU from './YOU.jpg'
import TUA from './TUA.jpeg'
import RandM from './RandM.jpg'

export default props =>
    <div className="tela">
        <Icone img={grimm} titulo="Grimm" sinopse = 'O protagonista da série é Nick Burkhardt, um investigador da Homicídios do Departamento de Polícia de Portland, que tem sua vida transformada quando lhe é revelado que descende dos Grimms, uma linhagem de guardiões encarregada de manter o equilíbrio entre a humanidade e os Wesen, criaturas mitológicas que apesar de se fazerem passar por pessoas normais, especialmente na aparência, possuem uma outra entidade, na maior parte das vezes oculta aos humanos' class='borda_serie' url="https://www.youtube.com/embed/2-4xKNZ_gaA"></Icone>

        <Icone img={GOT} titulo="Game of Thrones" sinopse = 'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos. A irmandade da Patrulha da Noite busca proteger o reino de cada criatura que pode vir de lá da Muralha, mas já não tem os recursos necessários para garantir a segurança de todos. Depois de um verão de dez anos, um inverno rigoroso promete chegar com um futuro mais sombrio. Enquanto isso, conspirações e rivalidades correm no jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto' class='borda_serie' url="https://www.youtube.com/embed/gcTkNV5Vg1E"></Icone>

        <Icone img={TWD} titulo="The Walking Dead" sinopse = 'The Walking Dead conta a história de um pequeno grupo de sobreviventes em um mundo pós-apocalíptico cheio de mortos-vivos. A série apresenta a excessiva jornada do grupo liderado por Rick Grimes, em busca de suprimentos e refúgios seguros. Além disso, os sobreviventes têm que lidar com dilemas morais, sentimentos confusos e desafios do dia-a-dia em um mundo hostil e praticamente dominado por mortos-vivos.' class='borda_serie' url="https://www.youtube.com/embed/R1v0uFms68U"></Icone>

        <Icone img={TBBT} titulo="The Big Bang Theory" sinopse = 'Leonard e Sheldon podem lhe dizer tudo o que você quiser saber sobre física quântica. Mas eles não seriam capazes de lhe dizer nada sobre a vida "real", as relações diárias ou humanas... Mas tudo vai mudar com a chegada da bela vizinha Penny, uma garçonete candidata a atriz que movimentará o grupo de amigos, que conta ainda com as presenças de Howard e Raj, um indiano que não consegue falar com mulheres.' class='borda_serie' url="https://www.youtube.com/embed/x6H7k3XBlk4"></Icone>

        <Icone img={YOU} titulo="YOU" sinopse = 'YOU conta a história de Guinevere Beck (Elizabeth Lail), uma aspirante a escritora, que vê sua vida mudar completamente ao entrar em uma livraria no East Village, onde conhece o charmoso gerente, Joe Goldberg (Penn Badgley). Assim que a conhece, Joe tem certeza de que ela é a garota dos seus sonhos, e fará de tudo para conquistá-la — usando a internet e as redes sociais para descobrir tudo sobre Beck. O que poderia ser visto como paixão se transforma em uma obsessão perigosa, uma vez que Joe não vai medir esforços para tirar de seu caminho tudo e todos que podem ameaçar seus objetivos.' class='borda_serie' url="https://www.youtube.com/embed/WoV4O0Jfm8U"></Icone>
        
        <Icone img={TUA} titulo="The Umbrella Academy" sinopse = 'Antes de falecer, o milionário Sir Reginald Hargreeves adotou sete crianças a fim de treiná-las para combater o mal. Depois que ele morre misteriosamente, esses jovens habilidosos unem suas forças para seguir o caminho para o qual seu pai adotivo os criou e acabam se envolvendo em um mundo muito mais perigoso do que eles imaginavam ser possível.' class='borda_serie' url="https://www.youtube.com/embed/5_4SW8HHfUs"></Icone>
        
        <Icone img={RandM} titulo="Rick and Morty" sinopse = 'Rick Sanchez é um cientista genial e alcoólatra que foi morar com a família de sua filha Beth, uma cirurgiã cardíaca de equinos. Ele divide seu tempo entre desenvolver projetos altamente tecnológicos em seu laboratório (garagem da casa de Beth) e levar seu neto de 14 anos Morty em aventuras perigosas e surreais pelo Multiverso. Combinados com tensões preexistentes dentro da família, esses eventos causam ao sensível Morty muito angústia em casa e na escola.' class='borda_serie' url="https://www.youtube.com/embed/DuYpZeszaM4"></Icone>
    </div>

