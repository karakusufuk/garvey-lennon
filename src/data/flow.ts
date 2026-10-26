// "Tell us what happened" flow: translations (T), doors (DOORS), results (RES) and warnings (WARN).
// Transcribed from the approved board; only the address and phone number changed (Ince Belge, section 2).
import type { AreaId, PersonId } from './people';

export type Lang = 'en' | 'pl' | 'pt';
export const LANGS: Lang[] = ['en', 'pl', 'pt'];
export const HTML_LANG: Record<Lang, string> = { en: 'en-IE', pl: 'pl', pt: 'pt-BR' };
export const LOCALE: Record<Lang, string> = { en: 'en-IE', pl: 'pl-PL', pt: 'pt-BR' };

type L3 = Record<Lang, string>;

export interface Strings {
  h1: string; sub: string; startBtn: string; flowH: string; other: string; disc: string;
  services: string; insights: string; fees: string; about: string; contact: string; menu: string;
  q: string; of: string; back: string; start: string; trail: string; name: string; phone: string; email: string; book: string; meet: string; first: string;
  doneH: string; doneP: (n: string, d: string, t: string) => string; plNote: string;
  day: string; time: string; close: string; langLabel: string; howItWorks: string; careers: string; fFirm: string; fRead: string; privacyCookies: string; legalNotice: string;
  tagline: string; aFamily: string; aEmployment: string; aCopyright: string; aInjury: string; piFee: string; ll1: string; ll3: string; demo1: string; demo2: string;
}

export const T: Record<Lang, Strings> = {
  en: {
    h1: 'Tell us <em>what happened.</em>', sub: 'A few one-click questions, then a meeting with the solicitor who handles it.', startBtn: 'Start here',
    flowH: 'Pick the sentence closest to yours, answer a few one-click questions, then meet the solicitor who handles it.', other: 'All four situations',
    disc: 'This is not legal advice. Nothing you click is stored until you book.', services: 'Services', insights: 'Insights', fees: 'Fees', about: 'About', contact: 'Contact', menu: 'Menu',
    q: 'Question', of: 'of', back: 'Back', start: 'Start again', trail: 'Your note', name: 'Full name', phone: 'Phone', email: 'Email', book: 'Book', meet: 'You’d meet',
    first: 'First meeting: 45 minutes, €150 + VAT, online or at 6 Lennox Mews.', doneH: 'Booked.',
    doneP: (n, d, t) => `${n} will see you on ${d} at ${t}. A confirmation and your note are on their way by email.`, plNote: '',
    day: 'Day', time: 'Time', close: 'Close', langLabel: 'Language', howItWorks: 'See how it works →', careers: 'Careers', fFirm: 'The firm', fRead: 'Read', privacyCookies: 'Privacy and cookies', legalNotice: 'Legal notice',
    tagline: 'Solicitors · Dublin', aFamily: 'Family law', aEmployment: 'Employment law', aCopyright: 'Copyright', aInjury: 'Personal injury',
    piFee: 'In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.',
    ll1: 'Garvey Lennon LLP is a limited liability partnership authorised by the Legal Services Regulatory Authority under section 125 of the Legal Services Regulation Act 2015. Solicitors regulated by the Law Society of Ireland.',
    ll3: 'Information on this website is general and is not legal advice. © 2026 Garvey Lennon LLP.', demo1: 'Portfolio demo, not a real business.', demo2: 'Designed by Ufuk Karakuş',
  },
  pl: {
    h1: 'Opowiedz nam, <em>co się stało.</em>', sub: 'Kilka pytań, każde jednym kliknięciem, a potem spotkanie z prawnikiem, który się tym zajmuje.', startBtn: 'Zacznij tutaj',
    flowH: 'Wybierz zdanie najbliższe twojej sytuacji, odpowiedz na kilka pytań i spotkaj się z prawnikiem, który się tym zajmuje.', other: 'Wszystkie sytuacje',
    disc: 'To nie jest porada prawna. Nic, co tu klikniesz, nie zostanie zapisane przed rezerwacją.', services: 'Usługi', insights: 'Artykuły', fees: 'Koszty', about: 'O nas', contact: 'Kontakt', menu: 'Menu',
    q: 'Pytanie', of: 'z', back: 'Wstecz', start: 'Zacznij od nowa', trail: 'Twoja notatka', name: 'Imię i nazwisko', phone: 'Telefon', email: 'E-mail', book: 'Umów', meet: 'Spotkasz się z',
    first: 'Pierwsze spotkanie: 45 minut, 150 € + VAT, online lub przy 6 Lennox Mews.', doneH: 'Umówione.',
    doneP: (n, d, t) => `${n} czeka na ciebie: ${d}, godz. ${t}. Potwierdzenie i notatka są już w drodze na e-mail.`, plNote: 'Marta Kowalska może dołączyć do spotkania i wszystko wyjaśnić po polsku.',
    day: 'Dzień', time: 'Godzina', close: 'Zamknij', langLabel: 'Język', howItWorks: 'Zobacz, jak to działa →', careers: 'Kariera', fFirm: 'Kancelaria', fRead: 'Czytaj', privacyCookies: 'Prywatność i pliki cookie', legalNotice: 'Nota prawna',
    tagline: 'Prawnicy · Dublin', aFamily: 'Prawo rodzinne', aEmployment: 'Prawo pracy', aCopyright: 'Prawo autorskie', aInjury: 'Wypadki i odszkodowania',
    piFee: 'W sprawach spornych prawnik nie może ustalać wynagrodzenia ani innych opłat jako procentu lub części jakiejkolwiek zasądzonej kwoty ani ugody.',
    ll1: 'Garvey Lennon LLP jest spółką z ograniczoną odpowiedzialnością (limited liability partnership) działającą na podstawie zezwolenia Legal Services Regulatory Authority, zgodnie z art. 125 Legal Services Regulation Act 2015. Prawnicy podlegają nadzorowi Law Society of Ireland.',
    ll3: 'Informacje na tej stronie mają charakter ogólny i nie stanowią porady prawnej. © 2026 Garvey Lennon LLP.', demo1: 'Pokaz do portfolio, nie prawdziwa firma.', demo2: 'Projekt: Ufuk Karakuş',
  },
  pt: {
    h1: 'Conte para nós <em>o que aconteceu.</em>', sub: 'Algumas perguntas, um clique cada, e depois uma reunião com o advogado responsável.', startBtn: 'Comece aqui',
    flowH: 'Escolha a frase mais parecida com a sua, responda algumas perguntas e converse com o advogado responsável.', other: 'Todas as situações',
    disc: 'Isto não é aconselhamento jurídico. Nada do que você clicar é salvo antes do agendamento.', services: 'Serviços', insights: 'Artigos', fees: 'Custos', about: 'Sobre', contact: 'Contato', menu: 'Menu',
    q: 'Pergunta', of: 'de', back: 'Voltar', start: 'Recomeçar', trail: 'Seu resumo', name: 'Nome completo', phone: 'Telefone', email: 'E-mail', book: 'Agendar', meet: 'Você vai conversar com',
    first: 'Primeira reunião: 45 minutos, €150 + IVA, online ou na 6 Lennox Mews.', doneH: 'Agendado.',
    doneP: (n, d, t) => `${n} vai atender você em ${d}, às ${t}. A confirmação e o seu resumo foram enviados por e-mail.`, plNote: '',
    day: 'Dia', time: 'Horário', close: 'Fechar', langLabel: 'Idioma', howItWorks: 'Veja como funciona →', careers: 'Carreiras', fFirm: 'O escritório', fRead: 'Leia', privacyCookies: 'Privacidade e cookies', legalNotice: 'Aviso legal',
    tagline: 'Advogados · Dublin', aFamily: 'Direito de família', aEmployment: 'Direito do trabalho', aCopyright: 'Direito autoral', aInjury: 'Acidentes e lesões',
    piFee: 'Em causas contenciosas, o advogado não pode calcular honorários ou outras cobranças como percentual ou proporção de qualquer indenização ou acordo.',
    ll1: 'A Garvey Lennon LLP é uma sociedade de responsabilidade limitada (limited liability partnership) autorizada pela Legal Services Regulatory Authority nos termos da seção 125 da Legal Services Regulation Act 2015. Advogados regulados pela Law Society of Ireland.',
    ll3: 'As informações deste site são gerais e não constituem aconselhamento jurídico. © 2026 Garvey Lennon LLP.', demo1: 'Demonstração de portfólio, não é uma empresa real.', demo2: 'Design: Ufuk Karakuş',
  },
};

export interface Question { q: L3; o: L3[] }
export interface Door { label: L3; sub: L3; qs: Question[] }

export const DOORS: Record<AreaId, Door> = {
  employment: {
    label: { en: 'I’ve been dismissed', pl: 'Zwolniono mnie z pracy', pt: 'Perdi o emprego' }, sub: { en: 'Employment', pl: 'Prawo pracy', pt: 'Trabalhista' }, qs: [
      { q: { en: 'When was your last day at work?', pl: 'Kiedy był twój ostatni dzień w pracy?', pt: 'Quando foi seu último dia de trabalho?' }, o: [{ en: 'Less than a month ago', pl: 'Niecały miesiąc temu', pt: 'Há menos de um mês' }, { en: 'One to six months ago', pl: 'Od miesiąca do pół roku temu', pt: 'Entre um e seis meses atrás' }, { en: 'More than six months ago', pl: 'Ponad pół roku temu', pt: 'Há mais de seis meses' }, { en: 'I’m still working there', pl: 'Nadal tam pracuję', pt: 'Ainda trabalho lá' }] },
      { q: { en: 'How did it end?', pl: 'Jak to się skończyło?', pt: 'Como terminou?' }, o: [{ en: 'I was dismissed', pl: 'Zwolniono mnie', pt: 'A empresa me demitiu' }, { en: 'I was made redundant', pl: 'Moje stanowisko zlikwidowano', pt: 'Meu cargo foi cortado' }, { en: 'I resigned because I felt I had to', pl: 'Rezygnacja z pracy pod presją', pt: 'Pedi demissão porque não tive escolha' }, { en: 'My contract wasn’t renewed', pl: 'Nie przedłużono mi umowy', pt: 'Meu contrato não foi renovado' }] },
      { q: { en: 'How long had you worked there?', pl: 'Jak długo trwało zatrudnienie?', pt: 'Quanto tempo você trabalhou lá?' }, o: [{ en: 'Under a year', pl: 'Krócej niż rok', pt: 'Menos de um ano' }, { en: 'One to two years', pl: 'Od roku do dwóch lat', pt: 'De um a dois anos' }, { en: 'More than two years', pl: 'Ponad dwa lata', pt: 'Mais de dois anos' }] },
      { q: { en: 'Did you get anything in writing?', pl: 'Czy masz coś na piśmie?', pt: 'Você recebeu algo por escrito?' }, o: [{ en: 'Yes, a letter', pl: 'Tak, list', pt: 'Sim, uma carta' }, { en: 'An email or a text', pl: 'E-mail lub SMS', pt: 'Um e-mail ou mensagem' }, { en: 'Nothing in writing', pl: 'Nic na piśmie', pt: 'Nada por escrito' }] },
    ],
  },
  family: {
    label: { en: 'We’re separating. What about the children?', pl: 'Rozstajemy się. Co z dziećmi?', pt: 'Estamos nos separando. E as crianças?' }, sub: { en: 'Family', pl: 'Prawo rodzinne', pt: 'Família' }, qs: [
      { q: { en: 'Are you married?', pl: 'Czy jesteście małżeństwem?', pt: 'Vocês são casados?' }, o: [{ en: 'Married', pl: 'Tak, jesteśmy po ślubie', pt: 'Sim, somos casados' }, { en: 'Civil partnership', pl: 'Związek partnerski (civil partnership)', pt: 'União civil registrada' }, { en: 'Living together, not married', pl: 'Mieszkamy razem bez ślubu', pt: 'Moramos juntos, sem casar' }, { en: 'We never lived together', pl: 'Nigdy nie mieszkaliśmy razem', pt: 'Nunca moramos juntos' }] },
      { q: { en: 'How old are the children?', pl: 'Ile lat mają dzieci?', pt: 'Quantos anos têm as crianças?' }, o: [{ en: 'Under 5', pl: 'Poniżej 5 lat', pt: 'Menos de 5' }, { en: '5 to 12', pl: 'Od 5 do 12 lat', pt: 'De 5 a 12' }, { en: '13 to 17', pl: 'Od 13 do 17 lat', pt: 'De 13 a 17' }, { en: 'Different ages', pl: 'W różnym wieku', pt: 'Idades diferentes' }] },
      { q: { en: 'What do you need to sort out first?', pl: 'Co trzeba ustalić najpierw?', pt: 'O que precisa ser resolvido primeiro?' }, o: [{ en: 'Where the children will live', pl: 'Gdzie zamieszkają dzieci', pt: 'Onde as crianças vão morar' }, { en: 'The home and money', pl: 'Dom i pieniądze', pt: 'A casa e o dinheiro' }, { en: 'Separation or divorce', pl: 'Separacja lub rozwód', pt: 'Separação ou divórcio' }, { en: 'I don’t know yet', pl: 'Jeszcze nie wiem', pt: 'Ainda não sei' }] },
      { q: { en: 'Has anyone started court proceedings?', pl: 'Czy ktoś wszczął już postępowanie sądowe?', pt: 'Alguém já entrou na Justiça?' }, o: [{ en: 'Not yet', pl: 'Jeszcze nie', pt: 'Ainda não' }, { en: 'I’ve received court papers', pl: 'Przyszły dokumenty z sądu', pt: 'Recebi documentos do tribunal' }, { en: 'I’ve started them', pl: 'Tak, z mojej inicjatywy', pt: 'Eu dei entrada no processo' }] },
    ],
  },
  copyright: {
    label: { en: 'Someone used my work without permission', pl: 'Ktoś wykorzystał moją pracę bez zgody', pt: 'Alguém usou meu trabalho sem permissão' }, sub: { en: 'Copyright', pl: 'Prawo autorskie', pt: 'Direito autoral' }, qs: [
      { q: { en: 'What was used?', pl: 'Co zostało wykorzystane?', pt: 'O que foi usado?' }, o: [{ en: 'Drawings or photos', pl: 'Rysunki lub zdjęcia', pt: 'Desenhos ou fotos' }, { en: 'Writing', pl: 'Tekst', pt: 'Texto' }, { en: 'Music or audio', pl: 'Muzyka lub nagranie', pt: 'Música ou áudio' }, { en: 'Software or design', pl: 'Oprogramowanie lub projekt', pt: 'Software ou design' }] },
      { q: { en: 'Where did you find it?', pl: 'Gdzie to się pojawiło?', pt: 'Onde você encontrou?' }, o: [{ en: 'On a website or social media', pl: 'Na stronie lub w mediach społecznościowych', pt: 'Num site ou rede social' }, { en: 'On a product or packaging', pl: 'Na produkcie lub opakowaniu', pt: 'Num produto ou embalagem' }, { en: 'In print', pl: 'W druku', pt: 'Em material impresso' }, { en: 'Somewhere else', pl: 'Gdzie indziej', pt: 'Em outro lugar' }] },
      { q: { en: 'Have you contacted them?', pl: 'Czy był już z nimi kontakt?', pt: 'Você entrou em contato com eles?' }, o: [{ en: 'Not yet', pl: 'Jeszcze nie', pt: 'Ainda não' }, { en: 'Yes, no reply', pl: 'Tak, bez odpowiedzi', pt: 'Sim, sem resposta' }, { en: 'Yes, they refused', pl: 'Tak, odmówili', pt: 'Sim, e eles recusaram' }] },
      { q: { en: 'Do you have dated originals?', pl: 'Czy masz oryginały z datą?', pt: 'Você tem os originais com data?' }, o: [{ en: 'Yes', pl: 'Tak', pt: 'Sim' }, { en: 'Some of them', pl: 'Część z nich', pt: 'Alguns' }, { en: 'I’m not sure', pl: 'Nie wiem', pt: 'Não tenho certeza' }] },
    ],
  },
  injury: {
    label: { en: 'I’ve had an accident', pl: 'Doszło do wypadku', pt: 'Sofri um acidente' }, sub: { en: 'Personal injury', pl: 'Wypadki', pt: 'Acidentes' }, qs: [
      { q: { en: 'Where did it happen?', pl: 'Gdzie to się stało?', pt: 'Onde aconteceu?' }, o: [{ en: 'On the road', pl: 'Na drodze', pt: 'No trânsito' }, { en: 'At work', pl: 'W pracy', pt: 'No trabalho' }, { en: 'In a shop or public place', pl: 'W sklepie lub miejscu publicznym', pt: 'Numa loja ou lugar público' }, { en: 'Somewhere else', pl: 'Gdzie indziej', pt: 'Em outro lugar' }] },
      { q: { en: 'When did it happen?', pl: 'Kiedy to się stało?', pt: 'Quando aconteceu?' }, o: [{ en: 'In the last six months', pl: 'W ciągu ostatnich sześciu miesięcy', pt: 'Nos últimos seis meses' }, { en: 'Six to eighteen months ago', pl: 'Od pół roku do półtora roku temu', pt: 'Entre seis e dezoito meses atrás' }, { en: 'Eighteen months to two years ago', pl: 'Od półtora roku do dwóch lat temu', pt: 'Entre dezoito meses e dois anos atrás' }, { en: 'More than two years ago', pl: 'Ponad dwa lata temu', pt: 'Há mais de dois anos' }] },
      { q: { en: 'Have you applied to the Injuries Resolution Board?', pl: 'Czy wniosek do Injuries Resolution Board jest już złożony?', pt: 'Você já fez o pedido ao Injuries Resolution Board?' }, o: [{ en: 'Not yet', pl: 'Jeszcze nie', pt: 'Ainda não' }, { en: 'Yes, it’s with them', pl: 'Tak, jest w toku', pt: 'Sim, está em andamento' }, { en: 'Yes, I have an assessment', pl: 'Tak, mam już wycenę', pt: 'Sim, já tenho a avaliação' }] },
      { q: { en: 'Have you seen a doctor about it?', pl: 'Czy była już wizyta u lekarza?', pt: 'Você foi ao médico?' }, o: [{ en: 'Yes', pl: 'Tak', pt: 'Sim' }, { en: 'Not yet', pl: 'Jeszcze nie', pt: 'Ainda não' }] },
    ],
  },
};

export const ORDER: AreaId[] = ['employment', 'family', 'copyright', 'injury'];

export interface Result { lead: PersonId; en: { h: string; p: string }; pl: { h: string; p: string }; pt: { h: string; p: string } }

export const RES: Record<AreaId, Result> = {
  employment: { lead: 'declan', en: { h: 'Let’s check your dates.', p: 'Unfair dismissal claims go to the Workplace Relations Commission within six months of your last day. Bring your contract, payslips and anything in writing.' }, pl: { h: 'Sprawdźmy terminy.', p: 'Skargę o niesłuszne zwolnienie składa się do Workplace Relations Commission w ciągu sześciu miesięcy od ostatniego dnia pracy. Zabierz umowę, odcinki wypłat i wszystko, co masz na piśmie.' }, pt: { h: 'Vamos conferir as datas.', p: 'Reclamações por demissão injusta vão para a Workplace Relations Commission em até seis meses após o último dia. Traga o contrato, os contracheques e tudo que tiver por escrito.' } },
  family: { lead: 'siobhan', en: { h: 'Start with the children.', p: 'At a first meeting Siobhan explains your options, from mediation to court, and what each means for where the children live. Bring any letters or court papers.' }, pl: { h: 'Zacznijmy od dzieci.', p: 'Na pierwszym spotkaniu Siobhan wyjaśni możliwości, od mediacji po sąd, i co każda z nich oznacza dla dzieci. Zabierz listy i dokumenty sądowe.' }, pt: { h: 'Comece pelas crianças.', p: 'Na primeira reunião, Siobhan explica as opções, da mediação ao tribunal, e o que cada uma significa para as crianças. Traga cartas ou documentos do tribunal.' } },
  copyright: { lead: 'marta', en: { h: 'Keep everything as it is.', p: 'Don’t delete, edit or post about it yet. Screenshot where you found it, with the date and address showing, and bring your original files.' }, pl: { h: 'Niczego nie zmieniaj.', p: 'Na razie nic nie usuwaj, nie edytuj i nie publikuj. Zrób zrzut ekranu z datą i adresem strony i przynieś oryginalne pliki.' }, pt: { h: 'Guarde tudo como está.', p: 'Não apague, edite nem publique nada ainda. Faça capturas de tela com data e endereço visíveis e traga os arquivos originais.' } },
  injury: { lead: 'rafael', en: { h: 'Two years from the accident.', p: 'Almost every claim must first go to the Injuries Resolution Board. Keep your medical notes, photos, receipts and the names of anyone who saw it.' }, pl: { h: 'Masz dwa lata od wypadku.', p: 'Prawie każde roszczenie trafia najpierw do Injuries Resolution Board. Zachowaj dokumentację medyczną, zdjęcia, rachunki i nazwiska świadków.' }, pt: { h: 'Dois anos a partir do acidente.', p: 'Quase todo pedido passa primeiro pelo Injuries Resolution Board. Guarde laudos médicos, fotos, recibos e o nome de quem viu o acidente.' } },
};

// Key: `${door}:${questionIndex}:${answerIndex}`
export const WARN: Record<string, L3> = {
  'employment:0:2': { en: 'Six months have passed. The WRC can extend the limit to twelve months only for reasonable cause. Book soon.', pl: 'Minęło sześć miesięcy. WRC może przedłużyć termin do dwunastu tylko z uzasadnionej przyczyny. Umów się szybko.', pt: 'Já se passaram seis meses. A WRC só estende o prazo para doze meses com motivo razoável. Agende logo.' },
  'employment:2:0': { en: 'Unfair dismissal usually needs a year’s service. Discrimination, whistleblowing and pregnancy-related dismissals don’t.', pl: 'Skarga o niesłuszne zwolnienie zwykle wymaga roku zatrudnienia. Nie dotyczy to dyskryminacji, sygnalistów ani zwolnienia z powodu ciąży.', pt: 'A demissão injusta normalmente exige um ano de serviço. Discriminação, denúncia de irregularidades e demissão ligada à gravidez não exigem.' },
  'injury:1:2': { en: 'You are close to the two-year limit. Book this week.', pl: 'Zbliża się termin dwóch lat. Umów się w tym tygodniu.', pt: 'O prazo de dois anos está perto. Agende esta semana.' },
  'injury:1:3': { en: 'The two-year limit may have passed. Sometimes it runs from when you knew about the injury. Book soon so we can check.', pl: 'Termin dwóch lat mógł minąć. Czasem liczy się od dnia, w którym uraz został rozpoznany. Umów się szybko.', pt: 'O prazo de dois anos pode ter passado. Às vezes conta a partir de quando você soube da lesão. Agende logo.' },
  'family:3:1': { en: 'If the hearing is within two weeks, phone 01 234 5180 instead.', pl: 'Jeśli rozprawa jest w ciągu dwóch tygodni, zadzwoń: 01 234 5180.', pt: 'Se a audiência for em menos de duas semanas, ligue para 01 234 5180.' },
};

export const TIMES = ['09:30', '11:00', '12:30', '14:30', '16:00'];
export const PI_FEE_SENTENCE = 'In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.';
