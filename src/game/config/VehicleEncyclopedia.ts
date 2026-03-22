import type { EncyclopediaEntry } from '../../types';

/** のりもの */
export const VEHICLE_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'shinkansen', name: 'しんかんせん', emoji: '🚄', trivia: 'はやさ320キロ！にほんで いちばん はやい でんしゃだよ。はなが ながくて かっこいいね！', themeColor: 0x0072CE, soundType: 'shinkansen' },
  { id: 'airplane', name: 'ひこうき', emoji: '✈️', trivia: 'そらを とぶよ！いちばん はやい ひこうきは おとより はやいんだ。つばさが おおきいね！', themeColor: 0x87CEEB, soundType: 'airplane' },
  { id: 'bus', name: 'バス', emoji: '🚌', trivia: 'たくさんの ひとを のせて まちを はしるよ。がっこうの えんそくでも のるよね！', themeColor: 0xFF8C00, soundType: 'bus' },
  { id: 'policeCar', name: 'パトカー', emoji: '🚔', trivia: 'わるいことを する ひとを つかまえるよ。サイレンが なったら みちを あけてね！', themeColor: 0x1C1C1C, soundType: 'policeCar' },
  { id: 'excavator', name: 'ショベルカー', emoji: '🏗️', trivia: 'つちを ほったり ものを はこんだり するよ。こうじげんばで はたらく ちからもちだよ！', themeColor: 0xFFD700, soundType: 'excavator' },
  { id: 'helicopter', name: 'ヘリコプター', emoji: '🚁', trivia: 'プロペラを まわして そらを とぶよ。たてにも よこにも うごけるんだ。すごいでしょ！', themeColor: 0x2E8B57, soundType: 'helicopter' },
  { id: 'rocket', name: 'ロケット', emoji: '🚀', trivia: 'うちゅうに いくための のりものだよ！すごい スピードで そらに とんでいくよ！', themeColor: 0xFF4500, soundType: 'rocket' },
  { id: 'ship', name: 'ふね', emoji: '🚢', trivia: 'うみを わたる おおきな のりものだよ。にもつや ひとを はこぶよ。ボーっと きてきが なるよ！', themeColor: 0x4169E1, soundType: 'ship' },
];

/** うみのいきもの */
export const SEA_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'whale', name: 'クジラ', emoji: '🐋', trivia: 'ちきゅうで いちばん おおきい いきものだよ。しおを ふく すがたが かっこいいね！', themeColor: 0x3366aa, soundType: 'whale' },
  { id: 'dolphin', name: 'イルカ', emoji: '🐬', trivia: 'あたまが よくて、ジャンプが とくいだよ。なかまと おはなしも するんだ！', themeColor: 0x6699cc, soundType: 'dolphin' },
  { id: 'clownfish', name: 'クマノミ', emoji: '🐠', trivia: 'オレンジと しろの しましまが きれいだね。イソギンチャクの なかに すんでいるよ！', themeColor: 0xff6622, soundType: 'clownfish' },
  { id: 'octopus', name: 'タコ', emoji: '🐙', trivia: 'あしが 8ぽん あるよ。すみを はいて にげるのが とくいなんだ！', themeColor: 0xcc4488, soundType: 'octopus' },
  { id: 'seaTurtle', name: 'ウミガメ', emoji: '🐢', trivia: '100ねん いじょう いきる カメも いるよ。うみを ゆっくり およぐ すがたが すてきだね！', themeColor: 0x558844, soundType: 'seaTurtle' },
  { id: 'jellyfish', name: 'クラゲ', emoji: '🪼', trivia: 'からだが とうめいで きれいだね。のうみそが ないのに うみを ただよえるんだよ！', themeColor: 0xaabbff, soundType: 'jellyfish' },
  { id: 'manta', name: 'マンタ', emoji: '🦈', trivia: 'おおきな つばさみたいな ひれで およぐよ。やさしい いきもので ひとを おそわないよ！', themeColor: 0x334466, soundType: 'manta' },
  { id: 'seahorse', name: 'タツノオトシゴ', emoji: '🦑', trivia: 'うまの かおに にているね。おとうさんが あかちゃんを うむ めずらしい いきものだよ！', themeColor: 0xffaa33, soundType: 'seahorse' },
];

/** こっき */
export const FLAGS_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'flagJapan', name: 'にほん', emoji: '🇯🇵', trivia: 'しろい はたに あかい まる。「ひのまる」と よばれているよ。わたしたちの くにの はただね！', themeColor: 0xcc0000, soundType: 'flagJapan' },
  { id: 'flagUSA', name: 'アメリカ', emoji: '🇺🇸', trivia: 'ほしが 50こ あるよ！しましまは さいしょの 13の しゅうを あらわしているんだ！', themeColor: 0x003399, soundType: 'flagUSA' },
  { id: 'flagBrazil', name: 'ブラジル', emoji: '🇧🇷', trivia: 'みどりと きいろの はた。サッカーが つよい くにだよ。アマゾンの もりが あるよ！', themeColor: 0x009933, soundType: 'flagBrazil' },
  { id: 'flagFrance', name: 'フランス', emoji: '🇫🇷', trivia: 'あお しろ あかの 3しょく。エッフェルとうが ゆうめいだね。パンが おいしい くにだよ！', themeColor: 0x003399, soundType: 'flagFrance' },
  { id: 'flagChina', name: 'ちゅうごく', emoji: '🇨🇳', trivia: 'あかい はたに きいろい ほし。せかいで いちばん ひとが おおい くにだよ！', themeColor: 0xcc0000, soundType: 'flagChina' },
  { id: 'flagAustralia', name: 'オーストラリア', emoji: '🇦🇺', trivia: 'コアラと カンガルーの くに。みなみのおおきなしまで きせつが にほんと はんたいだよ！', themeColor: 0x003399, soundType: 'flagAustralia' },
  { id: 'flagIndia', name: 'インド', emoji: '🇮🇳', trivia: 'オレンジ しろ みどりの はた。カレーが ゆうめいで、ぞうが たくさん いるよ！', themeColor: 0xff9933, soundType: 'flagIndia' },
  { id: 'flagKorea', name: 'かんこく', emoji: '🇰🇷', trivia: 'しろい はたに あかと あおの まる。キムチや ビビンバが おいしい おとなりの くにだよ！', themeColor: 0xcc0033, soundType: 'flagKorea' },
];

/** がっき */
export const INSTRUMENTS_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'piano', name: 'ピアノ', emoji: '🎹', trivia: 'しろと くろの けんばんを おすと おとが なるよ。いちばん にんきの がっきなんだ！', themeColor: 0x111111, soundType: 'piano' },
  { id: 'guitar', name: 'ギター', emoji: '🎸', trivia: 'げんを はじくと やさしい おとが するよ。ロックでも つかわれる かっこいい がっきだね！', themeColor: 0xcc8844, soundType: 'guitar' },
  { id: 'taiko', name: 'たいこ', emoji: '🥁', trivia: 'バチで たたくと「ドンドン」おおきな おとが するよ。おまつりで きくと わくわくするね！', themeColor: 0xcc3333, soundType: 'taiko' },
  { id: 'trumpet', name: 'トランペット', emoji: '🎺', trivia: 'きんいろに ひかる かっこいい がっきだよ。ファンファーレの おとが ゆうめいだね！', themeColor: 0xddaa22, soundType: 'trumpet' },
  { id: 'violin', name: 'バイオリン', emoji: '🎻', trivia: 'ゆみで げんを こすると きれいな おとが でるよ。オーケストラの おうさまだね！', themeColor: 0xaa5522, soundType: 'violin' },
  { id: 'harmonica', name: 'ハーモニカ', emoji: '🎵', trivia: 'くちで ふくと おとが なるよ。ちいさいのに いろんな おとが だせるんだ！', themeColor: 0xcccccc, soundType: 'harmonica' },
  { id: 'cymbal', name: 'シンバル', emoji: '🥁', trivia: '2まいを「ジャーン！」と ぶつけると おおきな おとが するよ。ドラムに つかわれるよ！', themeColor: 0xccaa33, soundType: 'cymbal' },
  { id: 'recorder', name: 'リコーダー', emoji: '🎶', trivia: 'がっこうで ならう ふえだよ。ゆびの おさえかたで いろんな おとが だせるんだ！', themeColor: 0xeeddbb, soundType: 'recorder' },
];

/** きょうりゅう */
export const DINOSAURS_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'trex', name: 'ティラノサウルス', emoji: '🦖', trivia: 'いちばん つよい にくしょく きょうりゅう！おおきな あたまと するどい はが とくちょうだよ！', themeColor: 0x556633, soundType: 'trex' },
  { id: 'triceratops', name: 'トリケラトプス', emoji: '🦕', trivia: '3ぼんの つのと おおきな えりかざりが かっこいい！やさいを たべる やさしい きょうりゅうだよ！', themeColor: 0x886644, soundType: 'triceratops' },
  { id: 'stegosaurus', name: 'ステゴサウルス', emoji: '🦕', trivia: 'せなかに おおきな いたが ならんでいるよ。しっぽの トゲで みを まもったんだ！', themeColor: 0x669944, soundType: 'stegosaurus' },
  { id: 'pteranodon', name: 'プテラノドン', emoji: '🦅', trivia: 'おおきな つばさで そらを とんでいたよ！あたまの とさかが とくちょうだね！', themeColor: 0x8899aa, soundType: 'pteranodon' },
  { id: 'brachiosaurus', name: 'ブラキオサウルス', emoji: '🦕', trivia: 'ながーい くびで たかい きの はっぱを たべていたよ。とっても おおきな きょうりゅうだね！', themeColor: 0x77aa55, soundType: 'brachiosaurus' },
  { id: 'velociraptor', name: 'ヴェロキラプトル', emoji: '🦖', trivia: 'ちいさいけど すばしっこいよ！あたまが よくて なかまと ちからを あわせて かりを したんだ！', themeColor: 0x998866, soundType: 'velociraptor' },
  { id: 'ankylosaurus', name: 'アンキロサウルス', emoji: '🦕', trivia: 'からだが よろいで おおわれていて、しっぽに こんぼうが ついているよ。まるで たんくみたい！', themeColor: 0x887755, soundType: 'ankylosaurus' },
  { id: 'parasaurolophus', name: 'パラサウロロフス', emoji: '🦕', trivia: 'あたまの ながい トサカで おおきな おとを だしていたよ。なかまに きけんを しらせたんだ！', themeColor: 0x66aa88, soundType: 'parasaurolophus' },
];

/** むし */
export const INSECTS_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'beetleKabuto', name: 'カブトムシ', emoji: '🪲', trivia: 'おおきな つのが かっこいいね！なつの よるに じゅえきに あつまるよ。おすに つのが あるんだ！', themeColor: 0x553311, soundType: 'beetleKabuto' },
  { id: 'beetleKuwagata', name: 'クワガタ', emoji: '🪲', trivia: 'おおきな あごが つよいよ！カブトムシと にんきを きそうんだ。きの なかで かくれているよ！', themeColor: 0x331100, soundType: 'beetleKuwagata' },
  { id: 'butterfly', name: 'チョウチョ', emoji: '🦋', trivia: 'きれいな はねで ひらひら とぶよ。いもむしから さなぎに なって うまれかわるんだ！', themeColor: 0xff8844, soundType: 'butterfly' },
  { id: 'ladybug', name: 'テントウムシ', emoji: '🐞', trivia: 'あかい からだに くろい てんてんが あるよ。アブラムシを たべてくれる やさしい むしだよ！', themeColor: 0xdd2222, soundType: 'ladybug' },
  { id: 'dragonfly', name: 'トンボ', emoji: '🪰', trivia: 'おおきな めで まわりが よく みえるよ。そらを すいすい とぶのが とくいなんだ！', themeColor: 0x2266aa, soundType: 'dragonfly' },
  { id: 'grasshopper', name: 'バッタ', emoji: '🦗', trivia: 'ながい あしで ピョーンと ジャンプ！くさむらに かくれるのが とくいだよ！', themeColor: 0x44aa22, soundType: 'grasshopper' },
  { id: 'firefly', name: 'ホタル', emoji: '✨', trivia: 'おしりが ピカピカ ひかるよ！なつの よるに かわの ちかくで きれいに ひかるんだ！', themeColor: 0xffff44, soundType: 'firefly' },
  { id: 'mantis', name: 'カマキリ', emoji: '🦟', trivia: 'まえあしが カマの かたちを しているよ。えものを まちぶせ するのが とくいなハンターだよ！', themeColor: 0x55aa33, soundType: 'mantis' },
];

/** どうぶつ */
export const ANIMALS_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'lion', name: 'ライオン', emoji: '🦁', trivia: 'ひゃくじゅうの おう！おすには りっぱな たてがみが あるよ。がおー！', themeColor: 0xcc8833, soundType: 'lion' },
  { id: 'elephant', name: 'ゾウ', emoji: '🐘', trivia: 'りくの どうぶつで いちばん おおきいよ！ながい はなで みずを すうんだ！', themeColor: 0x888899, soundType: 'elephant' },
  { id: 'giraffe', name: 'キリン', emoji: '🦒', trivia: 'せかいいち せが たかい どうぶつだよ。ながい くびで たかい はっぱを たべるんだ！', themeColor: 0xddaa44, soundType: 'giraffe' },
  { id: 'panda', name: 'パンダ', emoji: '🐼', trivia: 'しろと くろの もようが かわいいね。ささの はっぱが だいすきなんだ！', themeColor: 0xffffff, soundType: 'panda' },
  { id: 'rabbit', name: 'ウサギ', emoji: '🐰', trivia: 'ながい みみと ふわふわの しっぽが とくちょうだよ。ぴょんぴょん はねるよ！', themeColor: 0xeeeeee, soundType: 'rabbit' },
  { id: 'penguin', name: 'ペンギン', emoji: '🐧', trivia: 'とべないけど およぎが とくい！さむい ところに すんでいるよ！', themeColor: 0x222233, soundType: 'penguin' },
  { id: 'cat', name: 'ネコ', emoji: '🐱', trivia: 'にゃーと なくよ。じゆうきままな せいかくで、ひるねが だいすき！', themeColor: 0xdd8844, soundType: 'cat' },
  { id: 'dog', name: 'イヌ', emoji: '🐶', trivia: 'わんわん！にんげんの いちばんの ともだちだよ。しっぽを ふって よろこぶよ！', themeColor: 0xaa7744, soundType: 'dog' },
];

/** にほんのぶんか */
export const JAPAN_ENCYCLOPEDIA: EncyclopediaEntry[] = [
  { id: 'castle', name: 'おしろ', emoji: '🏯', trivia: 'むかしの おさむらいさんが すんでいた おおきな たてものだよ。てんしゅかくが かっこいいね！', themeColor: 0xeeeedd, soundType: 'castle' },
  { id: 'torii', name: 'とりい', emoji: '⛩️', trivia: 'じんじゃの いりぐちに ある あかい もんだよ。かみさまの せかいへの いりぐちなんだ！', themeColor: 0xcc2211, soundType: 'torii' },
  { id: 'fujisan', name: 'ふじさん', emoji: '🗻', trivia: 'にほんで いちばん たかい やまだよ！きれいな かたちで せかいいさんなんだ！', themeColor: 0x4466aa, soundType: 'fujisan' },
  { id: 'sakuramochi', name: 'さくらもち', emoji: '🍡', trivia: 'ピンクの おもちに さくらの はっぱを まいた おかしだよ。はるに たべるよ！', themeColor: 0xff88aa, soundType: 'sakuramochi' },
  { id: 'koinobori', name: 'こいのぼり', emoji: '🎏', trivia: 'こどもの ひに そらに およぐ こいの かたちの のぼりだよ。げんきに そだてと いう ねがいが こもっているよ！', themeColor: 0x2266cc, soundType: 'koinobori' },
  { id: 'daruma', name: 'だるま', emoji: '🔴', trivia: 'ねがいごとを するときに かたほうの めを いれるよ。かなったら もうかたほうも いれるんだ！', themeColor: 0xcc2211, soundType: 'daruma' },
  { id: 'chochin', name: 'ちょうちん', emoji: '🏮', trivia: 'おまつりや おみせの まえに ある あかい あかりだよ。ふんいきが でるね！', themeColor: 0xee4422, soundType: 'chochin' },
  { id: 'manekiNeko', name: 'まねきねこ', emoji: '🐱', trivia: 'てを あげて おきゃくさんを まねいている ねこの おきものだよ。おかねが たまるって いわれているよ！', themeColor: 0xffffff, soundType: 'manekiNeko' },
];

/** 全図鑑データ（カテゴリID → エントリ配列） */
export const ALL_ENCYCLOPEDIA: Record<string, EncyclopediaEntry[]> = {
  vehicles: VEHICLE_ENCYCLOPEDIA,
  sea: SEA_ENCYCLOPEDIA,
  flags: FLAGS_ENCYCLOPEDIA,
  instruments: INSTRUMENTS_ENCYCLOPEDIA,
  dinosaurs: DINOSAURS_ENCYCLOPEDIA,
  insects: INSECTS_ENCYCLOPEDIA,
  animals: ANIMALS_ENCYCLOPEDIA,
  japan: JAPAN_ENCYCLOPEDIA,
};

/** 全エントリをフラットに取得 */
export function getAllEntries(): EncyclopediaEntry[] {
  return Object.values(ALL_ENCYCLOPEDIA).flat();
}
